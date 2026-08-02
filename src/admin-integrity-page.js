import { supabase, ANON_KEY } from './supabase-client.js';

const SCANNER_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-integrity-scanner`;
const AUTOMATION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-integrity-automation`;

let state = {
  loading: true,
  scanning: false,
  dashboard: null,
  automation: null,
};

// ── Auth helpers ──────────────────────────────────────────────
async function getAuthHeaders() {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token || ANON_KEY;
  return { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' };
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-msg');
  if (toast && msgEl) {
    msgEl.textContent = msg;
    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => toast.classList.add('translate-y-20', 'opacity-0'), 3000);
  }
}

// ── Severity colors ──────────────────────────────────────────
const severityColors = {
  critical: { text: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
  high: { text: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
  medium: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
  low: { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
};

const issueTypeLabels = {
  broken_image: 'Broken Image',
  corrupted_image: 'Corrupted Image',
  missing_images: 'Missing Images',
  wrong_image: 'Wrong Image',
  duplicate_image_in_gallery: 'Duplicate in Gallery',
  duplicate_image_across_products: 'Duplicate Across Products',
  incorrect_cover_image: 'Incorrect Cover Image',
  incorrect_image_order: 'Incorrect Image Order',
  low_quality_image: 'Low Quality Image',
  scan_error: 'Scan Error',
};

// ── Health score color ───────────────────────────────────────
function healthColor(score) {
  if (score >= 90) return { text: 'text-emerald-400', bg: 'bg-emerald-500', label: 'Excellent' };
  if (score >= 70) return { text: 'text-amber-400', bg: 'bg-amber-500', label: 'Good' };
  if (score >= 50) return { text: 'text-orange-400', bg: 'bg-orange-500', label: 'Fair' };
  return { text: 'text-red-400', bg: 'bg-red-500', label: 'Poor' };
}

// ── Render metrics ───────────────────────────────────────────
function renderMetrics(metrics) {
  const grid = document.getElementById('metrics-grid');
  if (!grid) return;
  const cards = [
    { label: 'Products Scanned', value: metrics.products_scanned || 0, icon: 'package', color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'Images Scanned', value: metrics.images_scanned || 0, icon: 'image', color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'Issues Found', value: metrics.issues_found || 0, icon: 'alert-triangle', color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { label: 'Repairs Done', value: metrics.repairs_completed || 0, icon: 'wrench', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Pending Reviews', value: metrics.pending_reviews || 0, icon: 'clipboard-check', color: 'text-orange-400', bg: 'bg-orange-500/10' },
    { label: 'Health Score', value: metrics.health_score != null ? `${metrics.health_score}%` : '—', icon: 'heart-pulse', color: 'text-red-400', bg: 'bg-red-500/10' },
  ];
  grid.innerHTML = cards.map(c => `
    <div class="glass-soft border border-blue-500/15 rounded-xl p-3 slide-up">
      <div class="flex items-center gap-2 mb-2">
        <div class="w-8 h-8 ${c.bg} rounded-lg flex items-center justify-center">
          <i data-lucide="${c.icon}" class="w-4 h-4 ${c.color}"></i>
        </div>
      </div>
      <p class="text-[10px] text-gray-500 uppercase font-bold tracking-wide">${c.label}</p>
      <p class="text-xl font-black text-white mt-0.5">${c.value}</p>
    </div>
  `).join('');
  if (window.lucide) lucide.createIcons();
}

// ── Render issue breakdown ──────────────────────────────────
function renderIssueBreakdown(breakdown) {
  const el = document.getElementById('issue-breakdown');
  if (!el) return;
  const entries = Object.entries(breakdown || {});
  if (entries.length === 0) {
    el.innerHTML = '<p class="text-xs text-emerald-400 font-bold">No issues found. All products are clean.</p>';
    return;
  }
  el.innerHTML = entries.map(([type, count]) => {
    const label = issueTypeLabels[type] || type;
    const sev = type.includes('broken') || type.includes('wrong') || type.includes('missing') ? 'critical' : type.includes('duplicate') ? 'high' : 'medium';
    const c = severityColors[sev] || severityColors.medium;
    return `
      <div class="flex items-center justify-between glass-soft border ${c.border} rounded-lg px-3 py-2">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full ${c.text.replace('text-', 'bg-')}"></span>
          <span class="text-xs font-bold text-white">${label}</span>
        </div>
        <span class="text-xs font-black ${c.text}">${count}</span>
      </div>
    `;
  }).join('');
}

// ── Render scan history ──────────────────────────────────────
function renderScanHistory(history) {
  const el = document.getElementById('scan-history');
  if (!el) return;
  if (!history || history.length === 0) {
    el.innerHTML = '<p class="text-xs text-gray-500">No scans yet.</p>';
    return;
  }
  el.innerHTML = history.map(scan => {
    const date = new Date(scan.created_at).toLocaleString();
    const statusColor = scan.status === 'completed' ? 'text-emerald-400' : scan.status === 'running' ? 'text-blue-400 pulse-dot' : 'text-red-400';
    return `
      <div class="glass-soft border border-blue-500/15 rounded-lg px-3 py-2.5">
        <div class="flex items-center justify-between mb-1">
          <span class="text-xs font-bold text-white">${scan.scan_type === 'full' ? 'Full Scan' : 'Incremental'}</span>
          <span class="text-[10px] font-bold ${statusColor} uppercase">${scan.status}</span>
        </div>
        <div class="text-[10px] text-gray-500">${date}</div>
        <div class="flex gap-3 mt-1.5 text-[10px] text-gray-400">
          <span>${scan.products_scanned || 0} products</span>
          <span>${scan.images_scanned || 0} images</span>
          <span class="text-amber-400">${scan.issues_found || 0} issues</span>
          <span class="text-emerald-400">${scan.repairs_completed || 0} repairs</span>
        </div>
      </div>
    `;
  }).join('');
}

// ── Render review queue ──────────────────────────────────────
function renderReviewQueue(queue) {
  const el = document.getElementById('review-queue');
  const badge = document.getElementById('review-count-badge');
  if (!el) return;
  if (!queue || queue.length === 0) {
    el.innerHTML = '<p class="text-xs text-emerald-400 font-bold">No items pending review.</p>';
    if (badge) badge.classList.add('hidden');
    return;
  }
  if (badge) {
    badge.textContent = queue.length;
    badge.classList.remove('hidden');
  }
  el.innerHTML = queue.map(item => {
    const conf = Math.round(item.confidence || 0);
    const date = new Date(item.created_at).toLocaleString();
    return `
      <div class="glass-soft border border-amber-500/20 rounded-xl p-4 slide-up">
        <div class="flex items-start justify-between mb-2">
          <div>
            <p class="text-sm font-bold text-white">${item.product_title || 'Unknown Product'}</p>
            <p class="text-[10px] text-gray-500">${item.property_id || ''} · ${item.product_category || ''}</p>
          </div>
          <div class="text-right">
            <p class="text-[10px] text-gray-500 uppercase">Confidence</p>
            <p class="text-sm font-black ${conf < 70 ? 'text-red-400' : 'text-amber-400'}">${conf}%</p>
          </div>
        </div>
        <p class="text-xs text-gray-400 mb-2">${item.reason || ''}</p>
        <p class="text-[10px] text-gray-600 mb-3">${date}</p>
        <div class="flex gap-2">
          <button onclick="approveReview('${item.id}')" class="btn-press text-[10px] font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg hover:bg-emerald-500/20 transition">
            <i data-lucide="check" class="w-3 h-3 inline mr-1"></i> Approve
          </button>
          <button onclick="rejectReview('${item.id}')" class="btn-press text-[10px] font-bold text-red-300 bg-red-500/10 border border-red-500/20 px-3 py-1.5 rounded-lg hover:bg-red-500/20 transition">
            <i data-lucide="x" class="w-3 h-3 inline mr-1"></i> Reject
          </button>
        </div>
      </div>
    `;
  }).join('');
  if (window.lucide) lucide.createIcons();
}

// ── Render unhealthy products ───────────────────────────────
function renderUnhealthyProducts(products) {
  const el = document.getElementById('unhealthy-products');
  if (!el) return;
  if (!products || products.length === 0) {
    el.innerHTML = '<p class="text-xs text-emerald-400 font-bold">All products have a perfect health score.</p>';
    return;
  }
  el.innerHTML = products.map(p => {
    const hc = healthColor(p.health_score);
    return `
      <div class="glass-soft border border-blue-500/15 rounded-xl p-3 flex items-center gap-3">
        <div class="w-10 h-10 ${hc.bg} rounded-lg flex items-center justify-center shrink-0">
          <span class="text-sm font-black ${hc.text}">${p.health_score}</span>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-bold text-white truncate">${p.product_title || 'Unknown'}</p>
          <p class="text-[10px] text-gray-500">${p.property_id || ''} · ${p.product_category || ''} · ${p.issues_count || 0} issues</p>
        </div>
        <div class="text-right shrink-0">
          <p class="text-[10px] text-gray-500 uppercase">${hc.label}</p>
          <p class="text-[10px] text-gray-600">${Math.round(p.confidence || 0)}% conf.</p>
        </div>
      </div>
    `;
  }).join('');
}

// ── Render recent repairs ───────────────────────────────────
function renderRecentRepairs(repairs) {
  const el = document.getElementById('recent-repairs');
  if (!el) return;
  if (!repairs || repairs.length === 0) {
    el.innerHTML = '<p class="text-xs text-gray-500">No repairs yet.</p>';
    return;
  }
  el.innerHTML = repairs.map(r => {
    const date = new Date(r.created_at).toLocaleString();
    return `
      <div class="glass-soft border border-emerald-500/15 rounded-lg px-3 py-2.5">
        <div class="flex items-center justify-between mb-1">
          <span class="text-xs font-bold text-white">${r.repair_type.replace(/_/g, ' ')}</span>
          ${r.auto_repaired ? '<span class="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Auto</span>' : '<span class="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">Manual</span>'}
        </div>
        <p class="text-[10px] text-gray-400">${r.description || ''}</p>
        <p class="text-[10px] text-gray-600 mt-1">${r.property_id || ''} · ${date}</p>
      </div>
    `;
  }).join('');
}

// ── Render open issues ───────────────────────────────────────
function renderOpenIssues(issues) {
  const el = document.getElementById('open-issues');
  if (!el) return;
  if (!issues || issues.length === 0) {
    el.innerHTML = '<p class="text-xs text-emerald-400 font-bold">No open issues.</p>';
    return;
  }
  el.innerHTML = issues.map(issue => {
    const c = severityColors[issue.severity] || severityColors.medium;
    const label = issueTypeLabels[issue.issue_type] || issue.issue_type;
    return `
      <div class="glass-soft border ${c.border} rounded-lg px-3 py-2.5">
        <div class="flex items-center justify-between mb-1">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full ${c.text.replace('text-', 'bg-')}"></span>
            <span class="text-xs font-bold text-white">${label}</span>
            <span class="text-[10px] text-gray-600 uppercase">${issue.severity}</span>
          </div>
          <span class="text-[10px] ${c.text} font-bold">${Math.round(issue.confidence || 0)}%</span>
        </div>
        <p class="text-[10px] text-gray-400">${issue.description || ''}</p>
        <p class="text-[10px] text-gray-600 mt-1">${issue.property_id || ''}</p>
      </div>
    `;
  }).join('');
}

// ── Load dashboard ───────────────────────────────────────────
async function loadDashboard() {
  try {
    const headers = await getAuthHeaders();
    const res = await fetch(SCANNER_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ action: 'get_dashboard' }),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || `HTTP ${res.status}`);
    }
    const data = await res.json();
    state.dashboard = data;

    // Calculate overall health score
    if (data.unhealthy_products && data.metrics) {
      const totalProducts = data.metrics.products_scanned || 0;
      const unhealthyCount = data.unhealthy_products.length;
      const healthyCount = totalProducts - unhealthyCount;
      data.metrics.health_score = totalProducts > 0 ? Math.round((healthyCount / totalProducts) * 100) : 100;
    }

    renderMetrics(data.metrics);
    renderIssueBreakdown(data.issue_breakdown);
    renderScanHistory(data.scan_history);
    renderReviewQueue(data.review_queue);
    renderUnhealthyProducts(data.unhealthy_products);
    renderRecentRepairs(data.recent_repairs);
    renderOpenIssues(data.open_issues);

    // Also load automation status
    loadAutomationStatus();
  } catch (err) {
    showToast('Error loading dashboard: ' + err.message);
  }
}

// ── Render automation status ─────────────────────────────────
function renderAutomationStatus(status) {
  const el = document.getElementById('automation-status');
  if (!el) return;
  const config = status.config || {};
  const queue = status.queue || {};
  const notifications = status.notifications || {};

  const enabled = config.enabled !== false;
  const statusColor = enabled ? 'text-emerald-400' : 'text-red-400';
  const statusText = enabled ? 'Active' : 'Disabled';
  const statusDot = enabled ? 'bg-emerald-500 pulse-dot' : 'bg-red-500';

  let lastDaily = config.last_daily_scan_at ? new Date(config.last_daily_scan_at).toLocaleString() : 'Never';
  let lastQueue = config.last_queue_process_at ? new Date(config.last_queue_process_at).toLocaleString() : 'Never';

  el.innerHTML = `
    <div class="flex items-center justify-between mb-3">
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full ${statusDot}"></span>
        <span class="text-sm font-bold ${statusColor}">${statusText}</span>
      </div>
      <button onclick="toggleAutomation(${!enabled})" class="btn-press text-[10px] font-bold ${enabled ? 'text-red-300 bg-red-500/10 border border-red-500/20' : 'text-emerald-300 bg-emerald-500/10 border border-emerald-500/20'} px-3 py-1.5 rounded-lg hover:opacity-80 transition">
        ${enabled ? 'Disable' : 'Enable'}
      </button>
    </div>
    <div class="space-y-1.5 text-[11px]">
      <div class="flex justify-between"><span class="text-gray-500">Queue Pending</span><span class="font-bold ${queue.pending > 0 ? 'text-amber-400' : 'text-gray-300'}">${queue.pending || 0}</span></div>
      <div class="flex justify-between"><span class="text-gray-500">Queue Errors</span><span class="font-bold ${queue.errors > 0 ? 'text-red-400' : 'text-gray-300'}">${queue.errors || 0}</span></div>
      <div class="flex justify-between"><span class="text-gray-500">Auto-Repair Threshold</span><span class="font-bold text-gray-300">${config.auto_repair_threshold || 95}%</span></div>
      <div class="flex justify-between"><span class="text-gray-500">Daily Scan</span><span class="font-bold ${config.daily_scan_enabled ? 'text-emerald-400' : 'text-gray-500'}">${config.daily_scan_enabled ? 'Enabled' : 'Disabled'}</span></div>
      <div class="flex justify-between"><span class="text-gray-500">Last Daily Scan</span><span class="text-gray-400">${lastDaily}</span></div>
      <div class="flex justify-between"><span class="text-gray-500">Last Queue Process</span><span class="text-gray-400">${lastQueue}</span></div>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

// ── Render notifications ─────────────────────────────────────
function renderNotifications(notifications) {
  const el = document.getElementById('automation-notifications');
  if (!el) return;
  if (!notifications || notifications.length === 0) {
    el.innerHTML = '<p class="text-xs text-gray-500">No notifications.</p>';
    return;
  }
  const typeIcons = {
    auto_repaired: 'wrench',
    review_needed: 'clipboard-check',
    issue_found: 'alert-triangle',
    daily_scan_complete: 'scan-line',
  };
  const typeColors = {
    auto_repaired: 'text-emerald-400',
    review_needed: 'text-amber-400',
    issue_found: 'text-red-400',
    daily_scan_complete: 'text-blue-400',
  };
  el.innerHTML = notifications.map(n => {
    const date = new Date(n.created_at).toLocaleString();
    const icon = typeIcons[n.type] || 'bell';
    const color = typeColors[n.type] || 'text-gray-400';
    return `
      <div class="glass-soft border border-blue-500/15 rounded-lg px-3 py-2.5 ${n.read ? 'opacity-60' : ''}">
        <div class="flex items-start gap-2">
          <i data-lucide="${icon}" class="w-4 h-4 ${color} shrink-0 mt-0.5"></i>
          <div class="flex-1 min-w-0">
            <p class="text-xs font-bold text-white">${n.message}</p>
            <p class="text-[10px] text-gray-600 mt-0.5">${date}${n.property_id ? ' · ' + n.property_id : ''}</p>
          </div>
          ${!n.read ? '<button onclick="markRead(\''+n.id+'\')" class="text-[10px] text-blue-400 hover:text-blue-300 shrink-0">Mark read</button>' : ''}
        </div>
      </div>
    `;
  }).join('');
  if (window.lucide) lucide.createIcons();
}

// ── Load automation status ───────────────────────────────────
async function loadAutomationStatus() {
  try {
    const headers = await getAuthHeaders();
    const res = await fetch(AUTOMATION_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ action: 'get_status' }),
    });
    if (!res.ok) return;
    const data = await res.json();
    state.automation = data;
    renderAutomationStatus(data);
    renderNotifications(data.notifications?.recent || []);
  } catch {
    // Silent fail — automation status is supplementary
  }
}

// ── Toggle automation ────────────────────────────────────────
window.toggleAutomation = async (enable) => {
  try {
    const headers = await getAuthHeaders();
    await fetch(AUTOMATION_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ action: 'update_config', config: { enabled: enable } }),
    });
    showToast(`Automation ${enable ? 'enabled' : 'disabled'}.`);
    await loadAutomationStatus();
  } catch (err) {
    showToast('Error: ' + err.message);
  }
};

// ── Mark notification read ───────────────────────────────────
window.markRead = async (notificationId) => {
  try {
    const headers = await getAuthHeaders();
    await fetch(AUTOMATION_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ action: 'mark_notification_read', notification_id: notificationId }),
    });
    await loadAutomationStatus();
  } catch {
    // Silent fail
  }
};

// ── Start full scan ──────────────────────────────────────────
window.startFullScan = async () => {
  if (state.scanning) return;
  state.scanning = true;
  const overlay = document.getElementById('scanning-overlay');
  const btn = document.getElementById('btn-full-scan');
  if (overlay) overlay.classList.remove('hidden');
  if (btn) { btn.disabled = true; btn.classList.add('opacity-50'); }

  try {
    const headers = await getAuthHeaders();
    const res = await fetch(SCANNER_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ action: 'start_full_scan' }),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || `HTTP ${res.status}`);
    }
    const data = await res.json();
    showToast(`Scan complete: ${data.products_scanned} products, ${data.issues_found} issues found, ${data.repairs_completed} auto-repaired.`);
    await loadDashboard();
  } catch (err) {
    showToast('Scan failed: ' + err.message);
  } finally {
    state.scanning = false;
    if (overlay) overlay.classList.add('hidden');
    if (btn) { btn.disabled = false; btn.classList.remove('opacity-50'); }
  }
};

// ── Approve review ───────────────────────────────────────────
window.approveReview = async (reviewId) => {
  try {
    const headers = await getAuthHeaders();
    await fetch(SCANNER_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ action: 'resolve_review', review_id: reviewId, decision: 'approve' }),
    });
    showToast('Review approved.');
    await loadDashboard();
  } catch (err) {
    showToast('Error: ' + err.message);
  }
};

// ── Reject review ────────────────────────────────────────────
window.rejectReview = async (reviewId) => {
  try {
    const headers = await getAuthHeaders();
    await fetch(SCANNER_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ action: 'resolve_review', review_id: reviewId, decision: 'reject' }),
    });
    showToast('Review rejected.');
    await loadDashboard();
  } catch (err) {
    showToast('Error: ' + err.message);
  }
};

// ── Init ─────────────────────────────────────────────────────
async function init() {
  // Check auth
  const { data: session } = await supabase.auth.getSession();
  if (!session?.session) {
    document.getElementById('access-denied').classList.remove('hidden');
    document.getElementById('main-content').classList.add('hidden');
    return;
  }

  // Check admin
  const { data: profile } = await supabase
    .from('profiles')
    .select('is_admin')
    .eq('user_id', session.session.user.id)
    .maybeSingle();

  if (!profile?.is_admin) {
    document.getElementById('access-denied').classList.remove('hidden');
    document.getElementById('main-content').classList.add('hidden');
    return;
  }

  await loadDashboard();

  // Auto-refresh every 30 seconds
  setInterval(loadDashboard, 30000);
}

init();