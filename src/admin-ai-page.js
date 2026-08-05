import { supabase } from './supabase-client.js';
import { getCurrentUser } from './auth.js';

const AI_FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-admin-assistant`;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const AUTO_EXECUTE_DEVELOPER_ACTIONS = true;

let state = {
  user: null,
  isAdmin: false,
  history: [],
  sending: false,
  developerMode: true,
};

function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.remove('translate-y-20', 'opacity-0');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.add('translate-y-20', 'opacity-0'), 3000);
  if (window.lucide) lucide.createIcons();
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function renderMarkdown(text) {
  let html = escapeHtml(text);
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => `<pre><code>${code.trim()}</code></pre>`);
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/^\- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`);
  html = html.replace(/\n\n/g, '</p><p>');
  html = html.replace(/\n/g, '<br>');
  html = `<p>${html}</p>`;
  html = html.replace(/<ul><br>/g, '<ul>').replace(/<br><\/ul>/g, '</ul>');
  return html;
}

function renderToolResult(toolResult) {
  const r = toolResult.result;
  if (r.error) {
    return `<div class="mt-2 text-xs bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2 text-red-400"><i data-lucide="alert-circle" class="w-3 h-3 inline mr-1"></i> ${escapeHtml(r.error)}</div>`;
  }
  if (r.results && Array.isArray(r.results)) {
    const items = r.results.slice(0, 5).map(item => {
      if (item.property_id) {
        return `<div class="text-xs text-gray-400 py-1 border-b border-blue-500/5 last:border-0"><span class="font-mono text-blue-400">${item.property_id}</span> — ${escapeHtml(item.title || 'Untitled')} <span class="text-amber-400 font-bold">${item.price ? parseFloat(item.price).toLocaleString() : ''} ${item.currency || ''}</span>${item.stock_quantity != null ? ` <span class="text-gray-500">(Stock: ${item.stock_quantity})</span>` : ''}</div>`;
      }
      if (item.order_number) {
        return `<div class="text-xs text-gray-400 py-1 border-b border-blue-500/5 last:border-0"><span class="font-mono text-blue-400">${item.order_number}</span> — ${escapeHtml(item.full_name || item.customer_name || 'Customer')} <span class="text-amber-400">${item.amount ? parseFloat(item.amount).toLocaleString() : ''} ${item.currency || ''}</span> <span class="text-gray-500">(${item.status || ''})</span></div>`;
      }
      if (item.display_name || item.user_id) {
        return `<div class="text-xs text-gray-400 py-1 border-b border-blue-500/5 last:border-0">${escapeHtml(item.display_name || 'Unknown')} <span class="text-gray-500">(${item.country_code || ''})</span></div>`;
      }
      return `<div class="text-xs text-gray-400 py-1">${escapeHtml(JSON.stringify(item).slice(0, 100))}</div>`;
    }).join('');
    const more = r.count > 5 ? `<div class="text-[10px] text-gray-600 mt-1">...and ${r.count - 5} more</div>` : '';
    return `<div class="mt-2 glass-soft border border-blue-500/15 rounded-xl px-3 py-2"><div class="text-[10px] text-gray-500 uppercase font-bold mb-1">${toolResult.tool} — ${r.count} result(s)</div>${items}${more}</div>`;
  }
  if (r.success && r.message) {
    return `<div class="mt-2 text-xs bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-3 py-2 text-emerald-400"><i data-lucide="check-circle" class="w-3 h-3 inline mr-1"></i> ${escapeHtml(r.message)}</div>`;
  }
  if (r.generated_content) {
    return `<div class="mt-2 glass-soft border border-blue-500/15 rounded-xl px-3 py-2"><div class="text-[10px] text-gray-500 uppercase font-bold mb-1">Generated: ${toolResult.args.content_type}</div><div class="text-xs text-gray-300 whitespace-pre-wrap">${escapeHtml(r.generated_content)}</div></div>`;
  }
  return '';
}

function renderMessage(msg, animate = true) {
  const container = document.getElementById('messages-container');
  const isUser = msg.role === 'user';
  const wrapper = document.createElement('div');
  wrapper.className = `flex ${isUser ? 'justify-end' : 'justify-start'} ${animate ? 'fade-in' : ''}`;

  const toolResultsHtml = (msg.tool_results || []).map(renderToolResult).join('');

  wrapper.innerHTML = isUser ? `
    <div class="max-w-[80%] bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-lg shadow-blue-600/20">
      <p class="text-sm leading-relaxed">${escapeHtml(msg.content)}</p>
    </div>
  ` : `
    <div class="max-w-[85%] flex gap-3">
      <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-800 rounded-lg flex items-center justify-center shrink-0 shadow-md">
        <i data-lucide="sparkles" class="w-4 h-4 text-white"></i>
      </div>
      <div class="glass border border-blue-500/15 rounded-2xl rounded-tl-sm px-4 py-3">
        <div class="msg-content text-sm text-gray-200 leading-relaxed">${renderMarkdown(msg.content)}</div>
        ${toolResultsHtml}
      </div>
    </div>
  `;
  container.appendChild(wrapper);
  if (window.lucide) lucide.createIcons();
  scrollToBottom();
}

function renderTypingIndicator() {
  const container = document.getElementById('messages-container');
  const wrapper = document.createElement('div');
  wrapper.id = 'typing-indicator';
  wrapper.className = 'flex justify-start fade-in';
  wrapper.innerHTML = `
    <div class="flex gap-3">
      <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-800 rounded-lg flex items-center justify-center shrink-0 shadow-md">
        <i data-lucide="sparkles" class="w-4 h-4 text-white"></i>
      </div>
      <div class="glass border border-blue-500/15 rounded-2xl rounded-tl-sm px-4 py-4 flex items-center gap-1.5">
        <span class="typing-dot w-2 h-2 bg-blue-400 rounded-full"></span>
        <span class="typing-dot w-2 h-2 bg-blue-400 rounded-full"></span>
        <span class="typing-dot w-2 h-2 bg-blue-400 rounded-full"></span>
      </div>
    </div>
  `;
  container.appendChild(wrapper);
  if (window.lucide) lucide.createIcons();
  scrollToBottom();
}

function removeTypingIndicator() {
  document.getElementById('typing-indicator')?.remove();
}

function scrollToBottom() {
  const chat = document.getElementById('chat-messages');
  chat.scrollTop = chat.scrollHeight;
}

async function getAuthHeaders() {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token || ANON_KEY;
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
}

function applyDeveloperModeUI() {
  const indicator = document.getElementById('dev-mode-indicator');
  const toggle = document.getElementById('dev-mode-toggle');
  if (!indicator || !toggle) return;
  if (state.developerMode) {
    indicator.classList.remove('bg-gray-600');
    indicator.classList.add('bg-emerald-400');
    toggle.classList.add('ring-2', 'ring-emerald-500/50');
  } else {
    indicator.classList.add('bg-gray-600');
    indicator.classList.remove('bg-emerald-400');
    toggle.classList.remove('ring-2', 'ring-emerald-500/50');
  }
}

async function executeDeveloperApproval(approvalId) {
  const headers = await getAuthHeaders();
  const res = await fetch(AI_FUNCTION_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ action: 'approve_dev_action', approval_id: approvalId }),
  });
  return await res.json();
}

async function autoExecutePendingApprovals(approvalIds, source = 'request') {
  if (!approvalIds.length) return;
  let successCount = 0;
  let failedCount = 0;
  for (const approvalId of approvalIds) {
    try {
      const data = await executeDeveloperApproval(approvalId);
      if (data.success) {
        successCount += 1;
        const msg = { role: 'assistant', content: `✅ **Developer action executed automatically:** ${data.result.message || data.result.error || 'Done.'}` };
        state.history.push(msg);
        renderMessage(msg);
      } else {
        failedCount += 1;
        const msg = { role: 'assistant', content: `❌ **Auto-execution failed:** ${data.result?.error || data.error || 'Unknown error'}` };
        state.history.push(msg);
        renderMessage(msg);
      }
    } catch (err) {
      failedCount += 1;
      const msg = { role: 'assistant', content: `❌ **Auto-execution error:** ${err.message}` };
      state.history.push(msg);
      renderMessage(msg);
    }
  }
  if (successCount > 0) {
    showToast(`Auto-executed ${successCount} developer action(s) from ${source}.`);
  }
  if (failedCount > 0) {
    showToast(`${failedCount} developer action(s) failed during auto-execution.`);
  }
}

window.sendMessage = async () => {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text || state.sending) return;

  input.value = '';
  input.style.height = 'auto';

  state.sending = true;
  document.getElementById('send-btn').disabled = true;

  const userMsg = { role: 'user', content: text };
  state.history.push(userMsg);
  renderMessage(userMsg);

  renderTypingIndicator();

  try {
    const headers = await getAuthHeaders();
    const res = await fetch(AI_FUNCTION_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        action: 'chat',
        message: text,
        developer_mode: state.developerMode,
        history: state.history.slice(-20, -1).map(h => ({ role: h.role, content: h.content })),
      }),
    });
    const data = await res.json();
    removeTypingIndicator();

    if (!res.ok || data.error) {
      const errMsg = { role: 'assistant', content: `⚠️ **Error:** ${data.error || 'Request failed'}${data.provider ? `\n\n*Provider: ${data.provider}*` : ''}` };
      state.history.push(errMsg);
      renderMessage(errMsg);
    } else {
      const aiMsg = { role: 'assistant', content: data.response, tool_results: data.tool_results };
      state.history.push(aiMsg);
      renderMessage(aiMsg);

      // If in developer mode and there are pending approvals, auto-execute them.
      if (state.developerMode && data.tool_results) {
        const pendingApprovals = data.tool_results.filter(r => r.result && r.result.pending_approval);
        if (pendingApprovals.length > 0) {
          const ids = pendingApprovals
            .map(r => r.result?.approval_id)
            .filter(Boolean);
          if (AUTO_EXECUTE_DEVELOPER_ACTIONS && ids.length > 0) {
            await autoExecutePendingApprovals(ids, 'chat response');
          } else {
            renderApprovalPrompt(pendingApprovals);
          }
        }
      }

      // If an approval was executed, show the result
      if (data.approval_executed) {
        const execMsg = { role: 'assistant', content: `✅ **Approved action executed:** ${data.approval_executed.action_type}\n\n${data.approval_executed.result.message || data.approval_executed.result.error || 'Done.'}` };
        state.history.push(execMsg);
        renderMessage(execMsg);
      }
    }
  } catch (err) {
    removeTypingIndicator();
    const errMsg = { role: 'assistant', content: `⚠️ **Connection error:** ${err.message}` };
    state.history.push(errMsg);
    renderMessage(errMsg);
  } finally {
    state.sending = false;
    document.getElementById('send-btn').disabled = false;
    document.getElementById('chat-input').focus();
  }
};

window.quickAction = (text) => {
  document.getElementById('chat-input').value = text;
  sendMessage();
};

window.clearHistory = async () => {
  try {
    const headers = await getAuthHeaders();
    await fetch(AI_FUNCTION_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ action: 'clear_history' }),
    });
    state.history = [];
    document.getElementById('messages-container').innerHTML = '';
    renderWelcome();
    showToast('Chat history cleared.');
  } catch (err) {
    showToast('Failed to clear history.');
  }
};

function renderWelcome() {
  const welcome = {
    role: 'assistant',
    content: state.developerMode
      ? `Hello! I'm your **Developer Agent** — a full software engineering assistant for the KCO Global project.\n\nI can do everything the Marketplace AI does, PLUS:\n\n- **Read any file** — "Show me the code in src/auth.js"\n- **Search the codebase** — "Find where checkout is handled"\n- **Find bugs** — "Why is the payment page throwing an error?"\n- **Explain the architecture** — "How does the app connect to the backend?"\n- **Edit code** — "Fix the bug in the checkout flow"\n- **Run commands** — "Run npm run build"\n- **Create files** — "Create a new component for the product gallery"\n\nDeveloper actions are configured to execute automatically for your admin account.\n\nWhat would you like to build?`
      : `Hello! I'm your Admin & Developer AI, powered by Google Gemini.\n\nI can help you manage your marketplace and develop your project:\n\n**Marketplace Management:**\n- Add, edit, and delete products\n- View and manage orders\n- Check analytics and revenue\n- Manage customers\n- View and resolve customer escalations\n- Update AI settings\n- Trigger deployments\n\n**Developer Mode (toggle above):**\n- Read and analyze your entire codebase\n- Create, edit, and delete files\n- Run commands like npm build\n- Check git status and diffs\n- Install packages\n- Debug and fix bugs\n- Build new features\n\nWhat would you like to do?`,
  };
  renderMessage(welcome);
}

async function showBootstrapPrompt() {
  const denied = document.getElementById('access-denied');
  denied.classList.remove('hidden');
  denied.innerHTML = `
    <div class="glass border border-amber-500/20 rounded-2xl p-8 max-w-md w-full text-center slide-up">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-2xl mb-4">
        <i data-lucide="user-cog" class="w-8 h-8 text-amber-400"></i>
      </div>
      <h2 class="text-xl font-bold text-white mb-2">Become Admin</h2>
      <p class="text-sm text-gray-400 mb-6">No administrator has been set up yet. You can promote your account to admin to access the Admin & Developer AI.</p>
      <button onclick="bootstrapAdmin()" id="bootstrap-btn" class="btn-press inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-3 px-6 rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-amber-600/30">
        <i data-lucide="shield" class="w-4 h-4"></i> Become Admin
      </button>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

window.bootstrapAdmin = async () => {
  const btn = document.getElementById('bootstrap-btn');
  if (!btn) return;
  btn.disabled = true;
  btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Promoting...';
  if (window.lucide) lucide.createIcons();
  try {
    const { data: session } = await supabase.auth.getSession();
    const res = await fetch(AI_FUNCTION_URL, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${session.session?.access_token || ANON_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'bootstrap_admin' }),
    });
    const data = await res.json();
    if (res.ok && data.success) {
      showToast('You are now an admin!');
      setTimeout(() => window.location.reload(), 1000);
    } else {
      showToast(data.error || 'Failed to become admin');
      btn.disabled = false;
      btn.innerHTML = '<i data-lucide="shield" class="w-4 h-4"></i> Become Admin';
      if (window.lucide) lucide.createIcons();
    }
  } catch (err) {
    showToast('Error: ' + err.message);
    btn.disabled = false;
    btn.innerHTML = '<i data-lucide="shield" class="w-4 h-4"></i> Become Admin';
    if (window.lucide) lucide.createIcons();
  }
};

async function init() {
  const { data: sessionData } = await supabase.auth.getSession();
  state.user = sessionData?.session?.user || null;

  if (!state.user) {
    const currentPath = window.location.pathname + window.location.search;
    window.location.href = `/auth.html?redirect=${encodeURIComponent(currentPath)}`;
    return;
  }

  const { data: isAdmin } = await supabase.rpc('is_current_user_admin');
  if (!isAdmin) {
    const { data: anyAdmin } = await supabase.rpc('has_any_admin');
    if (anyAdmin) {
      document.getElementById('access-denied').classList.remove('hidden');
      document.getElementById('access-denied-msg').textContent = 'You are signed in, but this account does not have administrator privileges.';
    } else {
      showBootstrapPrompt();
    }
    if (window.lucide) lucide.createIcons();
    return;
  }

  state.isAdmin = true;
  applyDeveloperModeUI();

  // Load provider info — always Gemini for admin
  const badge = document.getElementById('provider-badge');
  const name = document.getElementById('provider-name');
  if (badge && name) {
    badge.classList.remove('hidden');
    badge.className = 'hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full';
    name.textContent = 'Google Gemini';
  }

  // Load chat history
  try {
    const headers = await getAuthHeaders();
    const res = await fetch(AI_FUNCTION_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ action: 'history' }),
    });
    const data = await res.json();
    if (data.history && data.history.length > 0) {
      state.history = data.history.map(h => ({
        role: h.role,
        content: h.content,
        tool_results: h.metadata?.tool_results,
      }));
      state.history.forEach(msg => renderMessage(msg, false));
    } else {
      renderWelcome();
    }
  } catch {
    renderWelcome();
  }

  // Load pending approvals if in dev mode
  try {
    const headers = await getAuthHeaders();
    const res = await fetch(AI_FUNCTION_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ action: 'list_pending_approvals' }),
    });
    const data = await res.json();
    if (data.approvals && data.approvals.length > 0) {
      if (state.developerMode && AUTO_EXECUTE_DEVELOPER_ACTIONS) {
        await autoExecutePendingApprovals(data.approvals.map(a => a.id).filter(Boolean), 'pending queue');
      } else {
        const msg = { role: 'assistant', content: `You have ${data.approvals.length} pending developer action(s) awaiting approval. Check the approval cards above.` };
        renderMessage(msg);
        for (const a of data.approvals) {
          renderPendingApprovalFromDB(a);
        }
      }
    }
  } catch { /* best-effort */ }

  // Load usage stats
  loadUsageStats();

  // Input handling
  const input = document.getElementById('chat-input');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 128) + 'px';
  });
  input.focus();
}

// ── Developer Mode toggle ─────────────────────────────────────
window.toggleDevMode = () => {
  state.developerMode = !state.developerMode;
  applyDeveloperModeUI();
  if (state.developerMode) {
    showToast('Developer Mode enabled — AI can read and modify code, run commands, and execute actions automatically.');
  } else {
    showToast('Developer Mode disabled — AI is back to marketplace-only mode.');
  }
};

// ── Render approval prompt for developer actions ─────────────
function renderApprovalPrompt(approvals) {
  const container = document.getElementById('messages-container');
  for (const a of approvals) {
    const div = document.createElement('div');
    div.className = 'flex justify-center mb-4';
    const actionLabel = {
      file_create: 'Create File',
      file_edit: 'Edit File',
      file_delete: 'Delete File',
      file_rename: 'Rename File',
      run_command: 'Run Command',
    }[a.result.action_type] || a.result.action_type;

    let details = '';
    if (a.args.path) details += `<div class="mt-2 text-xs text-gray-400">File: <code class="text-blue-300">${a.args.path}</code></div>`;
    if (a.args.old_path && a.args.new_path) details += `<div class="mt-1 text-xs text-gray-400">Rename: <code class="text-blue-300">${a.args.old_path}</code> → <code class="text-blue-300">${a.args.new_path}</code></div>`;
    if (a.args.command) details += `<div class="mt-2 text-xs text-gray-400">Command: <code class="text-amber-300 font-mono">${a.args.command}</code></div>`;
    if (a.args.content) {
      const preview = a.args.content.length > 300 ? a.args.content.slice(0, 300) + '...' : a.args.content;
      details += `<div class="mt-2 text-xs text-gray-400">Content preview:</div><pre class="mt-1 text-xs bg-black/40 rounded-lg p-2 text-gray-300 overflow-x-auto max-h-32">${preview.replace(/</g, '&lt;')}</pre>`;
    }
    if (a.args.old_string) {
      details += `<div class="mt-2 text-xs text-gray-400">Replace:</div><pre class="mt-1 text-xs bg-red-950/40 rounded-lg p-2 text-red-300 overflow-x-auto max-h-24">${a.args.old_string.slice(0, 200).replace(/</g, '&lt;')}</pre>`;
      details += `<div class="mt-1 text-xs text-gray-400">With:</div><pre class="mt-1 text-xs bg-green-950/40 rounded-lg p-2 text-green-300 overflow-x-auto max-h-24">${a.args.new_string.slice(0, 200).replace(/</g, '&lt;')}</pre>`;
    }

    div.innerHTML = `
      <div class="glass border border-amber-500/30 rounded-2xl p-4 max-w-lg w-full slide-up">
        <div class="flex items-center gap-2 mb-2">
          <i data-lucide="shield-alert" class="w-5 h-5 text-amber-400"></i>
          <span class="font-bold text-amber-300 text-sm">Approval Required: ${actionLabel}</span>
        </div>
        ${details}
        <div class="mt-3 flex gap-2">
          <button onclick="approveDevAction('${a.result.approval_id}')" class="btn-press flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs px-4 py-2 rounded-lg transition hover:bg-emerald-500/30">
            <i data-lucide="check" class="w-4 h-4"></i> Approve & Execute
          </button>
          <button onclick="rejectDevAction('${a.result.approval_id}')" class="btn-press flex items-center gap-1.5 bg-red-500/20 border border-red-500/40 text-red-300 font-bold text-xs px-4 py-2 rounded-lg transition hover:bg-red-500/30">
            <i data-lucide="x" class="w-4 h-4"></i> Reject
          </button>
        </div>
      </div>
    `;
    container.appendChild(div);
    if (window.lucide) lucide.createIcons();
    container.scrollTop = container.scrollHeight;
  }
}

window.approveDevAction = async (approvalId) => {
  try {
    const data = await executeDeveloperApproval(approvalId);
    if (data.success) {
      showToast('Action approved and executed successfully.');
      const msg = { role: 'assistant', content: `✅ **Action executed:** ${data.result.message || data.result.error || 'Done.'}` };
      state.history.push(msg);
      renderMessage(msg);
    } else {
      showToast(data.error || data.result?.error || 'Execution failed.');
      const msg = { role: 'assistant', content: `❌ **Execution failed:** ${data.result?.error || data.error || 'Unknown error'}` };
      state.history.push(msg);
      renderMessage(msg);
    }
  } catch (err) {
    showToast('Error: ' + err.message);
  }
};

window.rejectDevAction = async (approvalId) => {
  try {
    const headers = await getAuthHeaders();
    await fetch(AI_FUNCTION_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ action: 'reject_dev_action', approval_id: approvalId }),
    });
    showToast('Action rejected.');
    const msg = { role: 'assistant', content: '🚫 Action rejected by admin.' };
    state.history.push(msg);
    renderMessage(msg);
  } catch (err) {
    showToast('Error: ' + err.message);
  }
};

// ── Render pending approval from DB record ──────────────────
function renderPendingApprovalFromDB(record) {
  const container = document.getElementById('messages-container');
  const div = document.createElement('div');
  div.className = 'flex justify-center mb-4';
  const actionLabel = {
    file_create: 'Create File',
    file_edit: 'Edit File',
    file_delete: 'Delete File',
    file_rename: 'Rename File',
    run_command: 'Run Command',
  }[record.action_type] || record.action_type;

  let details = '';
  if (record.file_path) details += `<div class="mt-2 text-xs text-gray-400">File: <code class="text-blue-300">${record.file_path}</code></div>`;
  if (record.new_path) details += `<div class="mt-1 text-xs text-gray-400">Rename to: <code class="text-blue-300">${record.new_path}</code></div>`;
  if (record.command) details += `<div class="mt-2 text-xs text-gray-400">Command: <code class="text-amber-300 font-mono">${record.command}</code></div>`;
  if (record.content && record.action_type === 'file_create') {
    const preview = record.content.length > 300 ? record.content.slice(0, 300) + '...' : record.content;
    details += `<div class="mt-2 text-xs text-gray-400">Content preview:</div><pre class="mt-1 text-xs bg-black/40 rounded-lg p-2 text-gray-300 overflow-x-auto max-h-32">${preview.replace(/</g, '&lt;')}</pre>`;
  }

  div.innerHTML = `
    <div class="glass border border-amber-500/30 rounded-2xl p-4 max-w-lg w-full slide-up">
      <div class="flex items-center gap-2 mb-2">
        <i data-lucide="shield-alert" class="w-5 h-5 text-amber-400"></i>
        <span class="font-bold text-amber-300 text-sm">Pending: ${actionLabel}</span>
      </div>
      ${details}
      <div class="mt-3 flex gap-2">
        <button onclick="approveDevAction('${record.id}')" class="btn-press flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs px-4 py-2 rounded-lg transition hover:bg-emerald-500/30">
          <i data-lucide="check" class="w-4 h-4"></i> Approve & Execute
        </button>
        <button onclick="rejectDevAction('${record.id}')" class="btn-press flex items-center gap-1.5 bg-red-500/20 border border-red-500/40 text-red-300 font-bold text-xs px-4 py-2 rounded-lg transition hover:bg-red-500/30">
          <i data-lucide="x" class="w-4 h-4"></i> Reject
        </button>
      </div>
    </div>
  `;
  container.appendChild(div);
  if (window.lucide) lucide.createIcons();
  container.scrollTop = container.scrollHeight;
}

// ── Load usage stats ────────────────────────────────────────
async function loadUsageStats() {
  try {
    const headers = await getAuthHeaders();
    const res = await fetch(AI_FUNCTION_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ action: 'get_usage_stats', days: 7 }),
    });
    const data = await res.json();
    if (data.stats) {
      const stats = data.stats;
      const statsDiv = document.getElementById('usage-stats');
      if (statsDiv) {
        statsDiv.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="glass rounded-xl p-3 border border-blue-500/15">
              <p class="text-xs text-gray-500 uppercase">Requests (7d)</p>
              <p class="text-lg font-bold text-white">${stats.total_requests}</p>
            </div>
            <div class="glass rounded-xl p-3 border border-blue-500/15">
              <p class="text-xs text-gray-500 uppercase">Tokens Used</p>
              <p class="text-lg font-bold text-white">${stats.total_tokens.toLocaleString()}</p>
            </div>
            <div class="glass rounded-xl p-3 border border-blue-500/15">
              <p class="text-xs text-gray-500 uppercase">Est. Cost</p>
              <p class="text-lg font-bold text-white">${stats.total_cost}</p>
            </div>
            <div class="glass rounded-xl p-3 border border-blue-500/15">
              <p class="text-xs text-gray-500 uppercase">Success Rate</p>
              <p class="text-lg font-bold text-emerald-400">${stats.success_rate}%</p>
            </div>
          </div>
        `;
      }
    }
  } catch { /* best-effort */ }
}

init();
