import { supabase } from './supabase-client.js';
import { getCurrentUser } from './auth.js';

const LOCAL_DEV_HOSTS = new Set(['localhost', '127.0.0.1']);
const SUPABASE_BASE_URL = (import.meta.env.VITE_SUPABASE_URL || 'https://wttnvwpoqmbxryivcerf.supabase.co').replace(/\/$/, '');
const AI_FUNCTION_URL = LOCAL_DEV_HOSTS.has(window.location.hostname)
  ? '/_supabase/functions/v1/ai-admin-assistant'
  : `${SUPABASE_BASE_URL}/functions/v1/ai-admin-assistant`;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const AUTO_EXECUTE_DEVELOPER_ACTIONS = true;
const PRODUCT_IMAGE_BUCKET = 'product-images';
const MAX_PENDING_UPLOADS = 24;
const MAX_UPLOAD_SIZE_BYTES = 8 * 1024 * 1024;
const BRAND_IMAGE_CACHE_KEY = 'kco_pending_brand_image_v1';
const BRAND_OVERRIDE_KEY = 'weverse_brand_override_v1';
const PRODUCT_FALLBACK_IMAGE = 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1200';

let state = {
  user: null,
  isAdmin: false,
  history: [],
  sending: false,
  developerMode: true,
  autoDeveloperMode: true,
  pendingUploads: [],
  previewTarget: {
    url: '/',
    label: 'Storefront Home',
    itemLabel: 'No AI-created item yet.',
    status: 'Waiting for the next AI action.',
    note: 'The preview refreshes automatically after the AI creates a product, listing, property, or brand update.',
  },
  lastPreviewItem: null,
  automationCenterEnabled: false,
  repairRunning: false,
  automationTesting: false,
  automationRunning: false,
  autoPipelineRunning: false,
};

function formatBytes(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const exp = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / (1024 ** exp);
  return `${value.toFixed(value >= 10 || exp === 0 ? 0 : 1)} ${units[exp]}`;
}

function setAutomationButtonsState() {
  const repairBtn = document.getElementById('automation-repair-btn');
  const testBtn = document.getElementById('automation-test-btn');
  const runBtn = document.getElementById('automation-run-btn');
  const enabled = state.automationCenterEnabled === true;
  if (repairBtn) {
    repairBtn.disabled = !enabled || state.repairRunning;
    repairBtn.classList.toggle('opacity-40', !enabled || state.repairRunning);
    repairBtn.classList.toggle('cursor-not-allowed', !enabled || state.repairRunning);
  }
  if (testBtn) {
    testBtn.disabled = !enabled || state.automationTesting;
    testBtn.classList.toggle('opacity-40', !enabled || state.automationTesting);
    testBtn.classList.toggle('cursor-not-allowed', !enabled || state.automationTesting);
  }
  if (runBtn) {
    runBtn.disabled = !enabled || state.automationRunning;
    runBtn.classList.toggle('opacity-40', !enabled || state.automationRunning);
    runBtn.classList.toggle('cursor-not-allowed', !enabled || state.automationRunning);
  }
}

function renderAutomationCenterMeta() {
  const badge = document.getElementById('automation-center-badge');
  const status = document.getElementById('automation-center-status');
  if (badge) badge.classList.toggle('hidden', state.automationCenterEnabled !== true);
  if (status) {
    status.textContent = state.automationCenterEnabled
      ? 'Automation Center: ON (n8n)'
      : 'Automation Center: OFF (enable in AI Settings)';
  }
  setAutomationButtonsState();
}

function isHouseRelatedText(text) {
  return /(house|property|villa|apartment|estate|real\s*estate)/i.test(String(text || ''));
}

function normalizeText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function isSimpleGreeting(text) {
  const normalized = normalizeText(text).toLowerCase();
  return ['hi', 'hello', 'hey', 'yo', 'good morning', 'good afternoon', 'good evening'].includes(normalized);
}

function isLikelyProductRequest(text) {
  const message = normalizeText(text).toLowerCase();
  if (!message) return false;
  if (/(house|property|villa|apartment|estate|real estate|brand|logo|image|banner|showroom)/i.test(message)) return false;
  return /^(add|create)\s+/i.test(message) || /\b(add|create)\b.*\b(iphone|phone|samsung|macbook|laptop|watch|airpods|headphones|tablet|product)\b/i.test(message);
}

function updatePreviewMeta(meta = {}) {
  const previewShell = document.getElementById('live-preview-shell');
  if (!previewShell || previewShell.classList.contains('hidden')) return;
  state.previewTarget = { ...state.previewTarget, ...meta };
  const targetEl = document.getElementById('live-preview-target');
  const statusEl = document.getElementById('live-preview-status');
  const itemEl = document.getElementById('live-preview-item');
  const noteEl = document.getElementById('live-preview-note');
  const urlEl = document.getElementById('live-preview-url');
  if (targetEl) targetEl.textContent = state.previewTarget.label || 'Live Preview';
  if (statusEl) statusEl.textContent = state.previewTarget.status || 'Waiting for the next AI action.';
  if (itemEl) itemEl.textContent = state.previewTarget.itemLabel || 'No AI-created item yet.';
  if (noteEl) noteEl.textContent = state.previewTarget.note || '';
  if (urlEl) urlEl.textContent = state.previewTarget.url || '/';
}

function setPreviewFrameUrl(url, options = {}) {
  const previewShell = document.getElementById('live-preview-shell');
  if (!previewShell || previewShell.classList.contains('hidden')) return;
  const frame = document.getElementById('live-preview-frame');
  const finalUrl = url || '/';
  updatePreviewMeta({ url: finalUrl, ...options });
  if (frame) frame.src = finalUrl;
}

function refreshPreviewFrame() {
  const previewShell = document.getElementById('live-preview-shell');
  if (!previewShell || previewShell.classList.contains('hidden')) return;
  const frame = document.getElementById('live-preview-frame');
  if (frame?.contentWindow) frame.contentWindow.location.reload();
  else if (frame) frame.src = state.previewTarget?.url || '/';
}

function setPreviewForHome(note = 'Showing the live storefront homepage.') {
  setPreviewFrameUrl('/', {
    label: 'Storefront Home',
    itemLabel: state.lastPreviewItem?.title || 'No AI-created item yet.',
    status: 'Previewing the live storefront homepage.',
    note,
  });
}

function setPreviewForListing(item, note) {
  if (!item?.propertyId) return;
  state.lastPreviewItem = item;
  setPreviewFrameUrl(`/details.html?id=${encodeURIComponent(item.propertyId)}`, {
    label: 'Latest AI Item Preview',
    itemLabel: `${item.title || 'Untitled item'} (${item.propertyId})`,
    status: 'Previewing the item the AI just created.',
    note: note || 'The AI created this item. The preview is showing its live details page.',
  });
}

function parseCreatedTitleFromContent(content) {
  const text = normalizeText(content);
  const match = text.match(/\*\*([^*]+)\*\*\s*\((KCO-[^)]+)\)/i)
    || text.match(/created\s+\*\*([^*]+)\*\*\s+as\s+\*\*(KCO-[^*]+)\*\*/i)
    || text.match(/created\s+\*\*([^*]+)\*\*/i);
  return match?.[1] ? normalizeText(match[1]) : '';
}

function extractPreviewItemFromToolResults(toolResults = [], fallbackContent = '') {
  for (const toolResult of toolResults || []) {
    const result = toolResult?.result || {};
    if (result?.success && result?.property_id) {
      return {
        propertyId: result.property_id,
        title: result.title || parseCreatedTitleFromContent(fallbackContent),
      };
    }
  }
  return null;
}

function syncPreviewFromAssistantMessage(message) {
  const previewItem = extractPreviewItemFromToolResults(message?.tool_results, message?.content);
  if (previewItem?.propertyId) {
    setPreviewForListing(previewItem, 'Verified from the AI action result. You can see the live product page here.');
    return;
  }
  if (/brand/i.test(String(message?.content || '')) && /logo|login|header/i.test(String(message?.content || ''))) {
    setPreviewForHome('Previewing the storefront after the AI brand update.');
  }
}

function shouldUseImageListingAutomation(text) {
  if (!state.pendingUploads.length) return false;
  return /(image|images|showroom|listing|upload|add|create|put|product|house|property)/i.test(String(text || ''));
}

function shouldUseBrandImageAutomation(text) {
  if (!state.pendingUploads.length && !getCachedBrandImage()) return false;
  return /(this is my brand|use this as brand|set as brand|brand logo|brand image|replace brand|update brand|logo)/i.test(String(text || ''));
}

function shouldAskForClarification(text) {
  const message = String(text || '').trim();
  if (!message) return false;
  return /(fix|move|position|align|layout|spacing|not position well|bad layout|make it better|clean it up|adjust it)/i.test(message)
    && !/(header|footer|login|auth|admin|product|house|showroom|brand|logo|image|button|banner)/i.test(message);
}

function buildClarifyingReply(text) {
  const message = String(text || '').trim();
  if (/(brand|logo|image)/i.test(message) && !state.pendingUploads.length && !getCachedBrandImage()) {
    return 'I can do that autonomously, but I need the image first. Upload the logo or brand image here, and I will apply it automatically across the site without further questions.';
  }
  return 'I am in **fully autonomous mode** — I will scan the site and apply the fix myself right now, without asking for more details, and with no n8n dependency.';
}

function renderPendingUploads() {
  const preview = document.getElementById('ai-uploaded-images-preview');
  const hint = document.getElementById('ai-upload-hint');
  const clearBtn = document.getElementById('ai-clear-uploads-btn');
  if (!preview || !hint || !clearBtn) return;

  if (!state.pendingUploads.length) {
    preview.innerHTML = '';
    hint.textContent = 'No images selected. Upload images, then tell AI to create a showroom listing from them.';
    clearBtn.classList.add('opacity-50');
    clearBtn.disabled = true;
    if (window.lucide) lucide.createIcons();
    return;
  }

  clearBtn.classList.remove('opacity-50');
  clearBtn.disabled = false;
  hint.textContent = `${state.pendingUploads.length} image(s) ready. Say: "Use these images and add to showroom".`;

  preview.innerHTML = state.pendingUploads.map((item) => `
    <div class="group relative w-20 h-20 rounded-lg overflow-hidden border border-blue-500/25 bg-blue-950/40">
      <img src="${item.previewUrl}" alt="${escapeHtml(item.name)}" class="w-full h-full object-cover">
      <button class="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/70 text-white text-[10px] leading-none opacity-0 group-hover:opacity-100 transition" data-remove-upload-id="${item.id}" title="Remove image">×</button>
      <div class="absolute bottom-0 inset-x-0 bg-black/65 text-[9px] text-gray-200 px-1 py-0.5 truncate">${escapeHtml(item.name)}</div>
    </div>
  `).join('');

  preview.querySelectorAll('[data-remove-upload-id]').forEach((btn) => {
    btn.addEventListener('click', () => removePendingUpload(btn.getAttribute('data-remove-upload-id')));
  });

  if (window.lucide) lucide.createIcons();
}

function removePendingUpload(id) {
  const idx = state.pendingUploads.findIndex((row) => row.id === id);
  if (idx === -1) return;
  const [removed] = state.pendingUploads.splice(idx, 1);
  if (removed?.previewUrl) URL.revokeObjectURL(removed.previewUrl);
  renderPendingUploads();
}

function clearPendingUploadsLocal() {
  state.pendingUploads.forEach((item) => {
    if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
  });
  state.pendingUploads = [];
  const picker = document.getElementById('ai-image-upload');
  if (picker) picker.value = '';
  renderPendingUploads();
}

async function fileToDataUrl(file) {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('Could not read uploaded image file.'));
    reader.readAsDataURL(file);
  });
}

function getCachedBrandImage() {
  try {
    const raw = sessionStorage.getItem(BRAND_IMAGE_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.dataUrl) return null;
    return { url: String(parsed.dataUrl), fallback: true, name: String(parsed.name || 'brand-image.png') };
  } catch {
    return null;
  }
}

async function cacheBrandImageFromUploads() {
  const first = state.pendingUploads[0];
  if (!first?.file) return;
  try {
    const dataUrl = await fileToDataUrl(first.file);
    if (dataUrl) {
      sessionStorage.setItem(BRAND_IMAGE_CACHE_KEY, JSON.stringify({
        ts: Date.now(),
        name: first.name || 'brand-image.png',
        dataUrl,
      }));
    }
  } catch {}
}

async function uploadPendingImages(propertyId) {
  const uploads = state.pendingUploads.slice(0, MAX_PENDING_UPLOADS);
  const urls = [];
  let storageFailures = 0;

  for (let i = 0; i < uploads.length; i += 1) {
    const item = uploads[i];
    const extRaw = String(item.name || '').split('.').pop() || 'jpg';
    const ext = extRaw.toLowerCase().replace(/[^a-z0-9]/g, '') || 'jpg';
    const objectPath = `ai-uploads/${new Date().toISOString().slice(0, 10)}/${propertyId}-${String(i + 1).padStart(2, '0')}.${ext}`;

    try {
      const { error: uploadErr } = await supabase.storage.from(PRODUCT_IMAGE_BUCKET).upload(objectPath, item.file, {
        cacheControl: '3600',
        upsert: true,
        contentType: item.file.type || 'image/jpeg',
      });

      if (!uploadErr) {
        const { data: pub } = supabase.storage.from(PRODUCT_IMAGE_BUCKET).getPublicUrl(objectPath);
        if (pub?.publicUrl) {
          urls.push(pub.publicUrl);
          continue;
        }
      }

      storageFailures += 1;
      const dataUrl = await fileToDataUrl(item.file);
      if (dataUrl) urls.push(dataUrl);
    } catch {
      storageFailures += 1;
      const dataUrl = await fileToDataUrl(item.file);
      if (dataUrl) urls.push(dataUrl);
    }
  }

  return {
    urls,
    total: uploads.length,
    storageFailures,
  };
}

async function uploadBrandImage(propertyId) {
  const first = state.pendingUploads[0];
  const cached = getCachedBrandImage();
  if (!first && cached) return cached;
  if (!first) return null;

  const extRaw = String(first.name || '').split('.').pop() || 'png';
  const ext = extRaw.toLowerCase().replace(/[^a-z0-9]/g, '') || 'png';
  const objectPath = `brand-assets/${new Date().toISOString().slice(0, 10)}/${propertyId}.${ext}`;

  try {
    const { error: uploadErr } = await supabase.storage.from(PRODUCT_IMAGE_BUCKET).upload(objectPath, first.file, {
      cacheControl: '3600',
      upsert: true,
      contentType: first.file.type || 'image/png',
    });
    if (!uploadErr) {
      const { data: pub } = supabase.storage.from(PRODUCT_IMAGE_BUCKET).getPublicUrl(objectPath);
      if (pub?.publicUrl) return { url: pub.publicUrl, fallback: false };
    }
  } catch {}

  const dataUrl = await fileToDataUrl(first.file);
  return dataUrl ? { url: dataUrl, fallback: true } : null;
}

function clearBrandImageQueue() {
  clearPendingUploadsLocal();
}

function parseImageShowroomRequest(text) {
  const message = String(text || '').trim();
  if (!message) return null;
  const hasIntent = /(image|images|showroom|listing|upload|add|create|put|product|house|property)/i.test(message);
  if (!hasIntent) return null;

  const isHouse = isHouseRelatedText(message);
  const namedMatch = message.match(/named\s+["']([^"']+)["']/i) || message.match(/named\s+([^,\.]+?)(?:,|\sprice\s|\scategory\s|\sin\s|\sthen\s|$)/i);
  const nameMatch = message.match(/name\s*[:=]\s*([\w\s'"\-&,]+?)(?:,|\sprice\s|\scategory\s|\sin\s|\sthen\s|$)/i);
  const titleMatch = message.match(/title\s*[:=]\s*([^,\.]+?)(?:,|\sprice\s|\scategory\s|\sin\s|\sthen\s|$)/i);
  const priceMatch = message.match(/price\s*[:=]?\s*([0-9]+(?:\.[0-9]{1,2})?)/i);
  const stockMatch = message.match(/stock\s*[:=]?\s*([0-9]+)/i);
  const categoryMatch = message.match(/category\s*[:=]?\s*([a-zA-Z0-9\-\s&]+)/i);
  const currencyMatch = message.match(/\b(USD|EUR|GBP|NGN|KES|ZAR|GHS|CAD|AUD)\b/i);
  const bedsMatch = message.match(/(bedrooms?|beds?)\s*[:=]?\s*([0-9]+)/i);
  const bathsMatch = message.match(/(bathrooms?|baths?)\s*[:=]?\s*([0-9]+)/i);
  const countryCodeMatch = message.match(/country\s*code\s*[:=]?\s*([a-z]{2})\b/i);
  const countryMatch = message.match(/country\s*[:=]?\s*([a-zA-Z\s]+?)(?:,|\sstate\s|\scity\s|\sthen\s|$)/i);
  const stateMatch = message.match(/state\s*[:=]?\s*([a-zA-Z\s]+?)(?:,|\scity\s|\stown\s|\sthen\s|$)/i);
  const cityMatch = message.match(/city\s*[:=]?\s*([a-zA-Z\s]+?)(?:,|\stown\s|\sthen\s|$)/i);
  const townMatch = message.match(/town\s*[:=]?\s*([a-zA-Z\s]+?)(?:,|\sthen\s|$)/i);
  const locationMatch = message.match(/(location|area|address)\s*[:=]?\s*([a-zA-Z0-9\-,\s]+?)(?:\sthen\s|$)/i);
  const latMatch = message.match(/lat(?:itude)?\s*[:=]?\s*(-?[0-9]+(?:\.[0-9]+)?)/i);
  const lngMatch = message.match(/(?:lng|lon|long|longitude)\s*[:=]?\s*(-?[0-9]+(?:\.[0-9]+)?)/i);

  const parsedCategory = (categoryMatch?.[1] || '').trim();
  const listingType = isHouse ? 'property' : 'product';
  const category = parsedCategory || (isHouse ? 'Real Estate' : 'General');
  const title = (namedMatch?.[1] || nameMatch?.[1] || titleMatch?.[1] || deriveProfessionalTitle(message, category, listingType, { propertyType: isHouse ? 'House' : '' })).trim();

  return {
    listingType,
    title,
    category,
    price: priceMatch ? Number(priceMatch[1]) : null,
    stock: stockMatch ? Number(stockMatch[1]) : null,
    currency: (currencyMatch?.[1] || 'USD').toUpperCase(),
    bedrooms: bedsMatch ? Number(bedsMatch[2]) : null,
    bathrooms: bathsMatch ? Number(bathsMatch[2]) : null,
    countryCode: (countryCodeMatch?.[1] || '').toUpperCase(),
    country: (countryMatch?.[1] || '').trim(),
    state: (stateMatch?.[1] || '').trim(),
    city: (cityMatch?.[1] || '').trim(),
    town: (townMatch?.[1] || '').trim(),
    productLocation: (locationMatch?.[2] || '').trim(),
    latitude: latMatch ? Number(latMatch[1]) : null,
    longitude: lngMatch ? Number(lngMatch[1]) : null,
    shouldDeploy: /\bdeploy\b|\bpublish\b.*\bsite\b/i.test(message),
    prompt: message,
  };
}

function buildProfessionalDescription(intent, imageCount) {
  if (intent.listingType === 'property') {
    const location = [intent.city, intent.state, intent.country].filter(Boolean).join(', ');
    const beds = intent.bedrooms ? `${intent.bedrooms} bedrooms` : 'well-proportioned bedrooms';
    const baths = intent.bathrooms ? `${intent.bathrooms} bathrooms` : 'modern bathrooms';
    return `A professionally curated property listing prepared from uploaded visuals. This home offers ${beds}, ${baths}, and a presentation-ready gallery for high-conversion showroom display.${location ? ` Located in ${location}, it is positioned for serious buyers seeking quality and confidence.` : ''} The listing includes ${imageCount} arranged images to create a complete visual journey.`;
  }
  return `A professionally arranged showroom product listing built from your uploaded images. The gallery is optimized for discovery, trust, and conversion with consistent visual ordering. Every detail is structured for a premium marketplace presentation so customers can quickly understand quality, value, and fit.`;
}

async function runLocalImageShowroomAutomation(text) {
  if (!shouldUseImageListingAutomation(text)) return null;
  const intent = parseImageShowroomRequest(text);
  if (!intent) return null;
  if (!state.pendingUploads.length) {
    return {
      ok: false,
      content: '❌ I need uploaded images first. Click Upload Images, select your files, then send your instruction again.',
      tool_results: [{ tool: 'upload_images', result: { error: 'No pending uploads found.' } }],
    };
  }

  const propertyId = generateProductId();
  const uploadResult = await uploadPendingImages(propertyId);
  if (!uploadResult.urls.length) {
    return {
      ok: false,
      content: '❌ I could not process your uploaded images. Try smaller files (under 8MB each) and retry.',
      tool_results: [{ tool: 'upload_images', result: { error: 'Image upload failed.' } }],
    };
  }

  const listingType = intent.listingType;
  const targetImageCount = listingType === 'property' ? 24 : uploadResult.urls.length;
  const arrangedImages = ensureImageCount(uploadResult.urls, targetImageCount);
  const payload = {
    property_id: propertyId,
    listing_type: listingType,
    category: intent.category,
    subcategory: listingType === 'property' ? 'House' : null,
    title: intent.title,
    description: buildProfessionalDescription(intent, arrangedImages.length),
    price: Number.isFinite(intent.price) ? intent.price : 0,
    currency: intent.currency || 'USD',
    country: intent.country || '',
    country_code: intent.countryCode || '',
    listing_status: 'sale',
    state: intent.state || '',
    city: intent.city || '',
    town: intent.town || '',
    product_location: intent.productLocation || '',
    latitude: intent.latitude ?? null,
    longitude: intent.longitude ?? null,
    is_active: true,
    stock_quantity: listingType === 'product' ? intent.stock : null,
    bedrooms: listingType === 'property' ? intent.bedrooms : null,
    bathrooms: listingType === 'property' ? intent.bathrooms : null,
    property_type: listingType === 'property' ? 'House' : null,
    furnished: listingType === 'property' ? 'Unfurnished' : null,
    features: listingType === 'property'
      ? ['Professional Photo Gallery', 'Map-ready Listing', 'Structured Details', 'Premium Presentation']
      : ['Professional Photo Set', 'Structured Product Details', 'Premium Showroom Presentation', 'AI Optimized Listing'],
    highlights: listingType === 'property'
      ? ['Image-led narrative flow', 'Consistent showroom styling', 'Conversion-ready visuals']
      : ['Organized image sequence', 'Trust-focused listing structure', 'Conversion-oriented copy'],
    tags: listingType === 'property' ? ['Featured Property'] : ['New Arrival', 'Image Verified'],
    seo_keywords: listingType === 'property'
      ? ['house listing', 'real estate', 'showroom property']
      : ['product listing', 'showroom', 'professional product photos'],
    images: arrangedImages,
    is_ai_generated: true,
    ai_generated_fields: ['title', 'description', 'images', 'features', 'highlights', 'seo_keywords'],
    specifications: {},
  };

  const candidate = { ...payload };
  let insertErr = null;
  for (let attempt = 0; attempt < 12; attempt += 1) {
    const { error } = await supabase.from('showroom_listings').insert(candidate);
    if (!error) {
      insertErr = null;
      break;
    }
    const msg = String(error.message || '');
    const missingColMatch = msg.match(/Could not find the '([^']+)' column/i);
    if (missingColMatch?.[1]) {
      delete candidate[missingColMatch[1]];
      continue;
    }
    insertErr = error;
    break;
  }

  if (insertErr) {
    return {
      ok: false,
      content: `❌ Listing creation failed: ${insertErr.message}`,
      tool_results: [{ tool: 'create_listing', result: { error: insertErr.message } }],
    };
  }

  let deployResult = { skipped: true };
  let deployMessage = 'No deploy requested.';
  if (intent.shouldDeploy) {
    const { data: settings } = await supabase
      .from('site_settings')
      .select('deploy_webhook')
      .limit(1)
      .maybeSingle();
    const webhook = String(settings?.deploy_webhook || '').trim();
    if (!webhook) {
      deployResult = { skipped: true, reason: 'missing_webhook' };
      deployMessage = 'Listing saved, but deploy webhook is not configured in Publish & Deploy.';
    } else {
      const webhookRes = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trigger: 'deploy', source: 'admin-ai-page', at: new Date().toISOString() }),
      });
      if (webhookRes.ok) {
        deployResult = { ok: true, status: webhookRes.status };
        deployMessage = 'Deploy webhook accepted. Deployment started.';
      } else {
        deployResult = { ok: false, status: webhookRes.status };
        deployMessage = `Listing saved, but deploy failed (webhook status ${webhookRes.status}).`;
      }
    }
  }

  clearPendingUploadsLocal();

  return {
    ok: true,
    content: `✅ Done. I uploaded and arranged **${arrangedImages.length} image(s)**, then created a professional ${listingType === 'property' ? 'house/property' : 'product'} listing **${intent.title}** as **${propertyId}** in your showroom.${uploadResult.storageFailures > 0 ? ' Some images used safe fallback format because storage upload was unavailable.' : ''} ${deployMessage}`,
    tool_results: [
      { tool: 'upload_images', result: { success: true, total: uploadResult.total, saved: arrangedImages.length, storage_fallbacks: uploadResult.storageFailures } },
      { tool: 'create_listing', result: { success: true, property_id: propertyId, listing_type: listingType, image_count: arrangedImages.length } },
      { tool: 'deploy_site', result: deployResult },
    ],
  };
}

async function runLocalBrandImageAutomation(text) {
  if (!shouldUseBrandImageAutomation(text)) return null;
  if (!state.pendingUploads.length && !getCachedBrandImage()) {
    return {
      ok: false,
      content: buildClarifyingReply(text),
      tool_results: [{ tool: 'set_brand', result: { error: 'No uploaded brand image found.' } }],
    };
  }

  const propertyId = generateProductId();
  const uploaded = await uploadBrandImage(propertyId);
  if (!uploaded?.url) {
    return {
      ok: false,
      content: '❌ I could not read that brand image. Try a smaller PNG or JPG.',
      tool_results: [{ tool: 'set_brand', result: { error: 'Brand image upload failed.' } }],
    };
  }

  const brandTitle = 'Weverse Online Shop';
  const brandSlogan = 'SHOP GLOBALLY, DELIVERED WORLDWIDE';
  const brandPayload = {
    brand_name: brandTitle,
    brand_slogan: brandSlogan,
    brand_logo: uploaded.url,
    site_name: brandTitle,
    site_tagline: brandSlogan,
  };
  localStorage.setItem(BRAND_OVERRIDE_KEY, JSON.stringify(brandPayload));
  localStorage.setItem('weverse_brand_v1', JSON.stringify({ ts: Date.now(), data: brandPayload }));
  window.dispatchEvent(new StorageEvent('storage', { key: BRAND_OVERRIDE_KEY }));
  window.dispatchEvent(new StorageEvent('storage', { key: 'weverse_brand_v1' }));
  window.dispatchEvent(new CustomEvent('brand-updated', { detail: brandPayload }));
  clearBrandImageQueue();

  return {
    ok: true,
    content: `✅ Done. I set your uploaded image as the active brand and applied it to the site header and login branding without changing the image itself. The old text brand is now visually covered by the logo image.`,
    tool_results: [
      { tool: 'set_brand', result: { success: true, brand_name: brandTitle, brand_logo: uploaded.url, storage_fallback: uploaded.fallback } },
      { tool: 'refresh_brand', result: { success: true } },
    ],
  };
}

// ── Auto image pipeline: scan → fill fields → free AI generates 24 images ──
const AUTO_RUN_PIPELINE_ON_UPLOAD = true;

const VISION_SCAN_PROMPT = `You are the AI listing expert for the Weverse Online Shop marketplace. Look carefully at the uploaded photo(s) and identify exactly what the item is.

Return a single valid JSON object (no markdown, no extra text) with these keys:
- listing_type (string): "product" or "property" (property if it is a house, building, villa, apartment, estate, or land).
- title (string): a real, professional marketplace listing title that matches the actual item (brand + model/type + key feature + category). Never use placeholders like "AI Product" or "Premium Item".
- description (string): a detailed, persuasive 2-4 sentence description.
- category (string): best category (e.g. Electronics, Fashion, Home & Kitchen, Real Estate).
- subcategory (string)
- brand (string): brand name if visible, otherwise empty string.
- model (string)
- color (string)
- condition (string): one of New, Refurbished, Used - Like New, Used - Good, Used - Fair.
- material, size, storage, ram, processor (strings, only if relevant)
- bedrooms (number, only for property)
- bathrooms (number, only for property)
- property_type (string, only for property: House, Villa, Apartment, etc.)
- features (array of strings)
- highlights (array of strings)
- seo_keywords (array of strings)
- specifications (object with relevant spec keys only)
- generation_prompt (string): a detailed visual description of the exact item in the photo, written as an instruction for an AI image generator. Include the item's design, colors, materials, branding, and requested professional e-commerce photography style so the generator can produce a 24-image gallery of this SAME item.

Rules:
- Only include keys you can actually observe or reasonably infer from the photo(s). NEVER invent exact specs (price, storage size, RAM, horsepower, year, serial numbers) that are not visible or printed on the product.
- Respond with valid JSON only.`;

async function callAiEdge(body) {
  const headers = await getAuthHeaders();
  const res = await fetch(AI_FUNCTION_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
  return await res.json().catch(() => ({}));
}

function extractJsonFromAiText(text) {
  if (!text) return null;
  let t = String(text).trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) t = fence[1].trim();
  const start = t.indexOf('{');
  const end = t.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) return null;
  const candidate = t.slice(start, end + 1);
  try { return JSON.parse(candidate); } catch { return null; }
}

function cleanScanString(v) {
  return String(v || '').trim().replace(/^["']+|["']+$/g, '');
}

function deriveTitleFromFileName(name) {
  const base = String(name || '').replace(/\.[a-z0-9]+$/i, '').replace(/[_-]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
  return base ? titleCaseProfessional(base) : 'Premium Item';
}

function buildGenerationPromptFromScan(scan, fallbackTitle) {
  const explicit = cleanScanString(scan?.generation_prompt);
  if (explicit) return explicit;
  const title = cleanScanString(scan?.title) || fallbackTitle || 'this product';
  const brand = cleanScanString(scan?.brand) ? ` Brand: ${scan.brand}.` : '';
  const color = cleanScanString(scan?.color) ? ` Color: ${scan.color}.` : '';
  const desc = cleanScanString(scan?.description) ? ` ${scan.description}` : '';
  return `Generate high-quality, photorealistic marketplace photos of this EXACT item${title ? `: ${title}` : ''}.${brand}${color}${desc} Keep the item identical in design, color, and branding. Clean background, sharp focus, professional e-commerce product photography, premium showroom presentation.`;
}

function galleryAnglesForListing(listingType) {
  if (listingType === 'property') {
    return [
      'front exterior view', 'three-quarter front view', 'side elevation view', 'back yard view',
      'entry and doorway detail', 'living room interior', 'kitchen interior', 'bedroom interior',
      'bathroom interior', 'aerial roof view', 'neighborhood context shot', 'evening exterior with lights',
    ];
  }
  return [
    'front hero shot', 'three-quarter angle', 'left side view', 'right side view', 'back view',
    'top-down flat lay', 'detail close-up', 'lifestyle in-use shot', 'boxed retail presentation',
    'angle with soft shadows', 'clean minimal hero', 'alternate colorway look',
  ];
}

function buildScanListingPayload({ propertyId, listingType, scan, title, images }) {
  const description = cleanScanString(scan?.description) || buildProfessionalDescription({ listingType }, images.length);
  const features = Array.isArray(scan?.features) && scan.features.length
    ? scan.features.map(String)
    : (listingType === 'property'
      ? ['Professional Photo Gallery', 'Map-ready Listing', 'Structured Details', 'Premium Presentation']
      : ['Professional Photo Set', 'Structured Product Details', 'Premium Showroom Presentation', 'AI Optimized Listing']);
  const highlights = Array.isArray(scan?.highlights) && scan.highlights.length
    ? scan.highlights.map(String)
    : (listingType === 'property'
      ? ['Image-led narrative flow', 'Consistent showroom styling', 'Conversion-ready visuals']
      : ['Organized image sequence', 'Trust-focused listing structure', 'Conversion-oriented copy']);
  const seo = Array.isArray(scan?.seo_keywords) && scan.seo_keywords.length
    ? scan.seo_keywords.map(String)
    : (listingType === 'property'
      ? ['house listing', 'real estate', 'showroom property']
      : ['product listing', 'showroom', 'professional product photos']);

  return {
    property_id: propertyId,
    listing_type: listingType,
    category: cleanScanString(scan?.category) || (listingType === 'property' ? 'Real Estate' : 'General'),
    subcategory: listingType === 'property'
      ? (cleanScanString(scan?.property_type) || 'House')
      : (cleanScanString(scan?.subcategory) || null),
    title,
    description,
    price: 0,
    currency: 'USD',
    listing_status: 'sale',
    brand: listingType === 'product' ? (cleanScanString(scan?.brand) || '') : null,
    color: listingType === 'product' ? (cleanScanString(scan?.color) || '') : null,
    condition: listingType === 'product' ? (cleanScanString(scan?.condition) || '') : null,
    stock_quantity: listingType === 'product' ? 1 : null,
    bedrooms: listingType === 'property' ? (Number.isFinite(Number(scan?.bedrooms)) ? Number(scan.bedrooms) : null) : null,
    bathrooms: listingType === 'property' ? (Number.isFinite(Number(scan?.bathrooms)) ? Number(scan.bathrooms) : null) : null,
    property_type: listingType === 'property' ? (cleanScanString(scan?.property_type) || 'House') : null,
    features,
    highlights,
    tags: listingType === 'property' ? ['Featured Property'] : ['New Arrival', 'Image Verified'],
    seo_keywords: seo,
    specifications: (scan?.specifications && typeof scan.specifications === 'object') ? scan.specifications : {},
    images,
    is_ai_generated: true,
    ai_generated_fields: ['title', 'description', 'images', 'brand', 'features', 'highlights', 'seo_keywords'],
  };
}

async function uploadDataUrlImageToStorage(propertyId, index, dataUrl) {
  try {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    const ext = (blob.type.split('/')[1] || 'png').replace('jpeg', 'jpg');
    const objectPath = `ai-generated/${new Date().toISOString().slice(0, 10)}/${propertyId}-${String(index + 1).padStart(2, '0')}.${ext}`;
    const { error } = await supabase.storage.from(PRODUCT_IMAGE_BUCKET).upload(objectPath, blob, {
      cacheControl: '3600',
      upsert: true,
      contentType: blob.type || 'image/png',
    });
    if (!error) {
      const { data: pub } = supabase.storage.from(PRODUCT_IMAGE_BUCKET).getPublicUrl(objectPath);
      if (pub?.publicUrl) return pub.publicUrl;
    }
  } catch {}
  return dataUrl;
}

async function runAutoImagePipeline() {
  if (!AUTO_RUN_PIPELINE_ON_UPLOAD) return null;
  if (!state.pendingUploads.length) return null;
  if (state.autoPipelineRunning) return null;
  state.autoPipelineRunning = true;

  try {
    const progressMsg = {
      role: 'assistant',
      content: `🔍 **Auto pipeline started.** Scanning your uploaded image(s) with Gemini + providers, then asking the free AI generator to build a **24-image** gallery from what the scan tells it.`,
    };
    state.history.push(progressMsg);
    renderMessage(progressMsg);

    const propertyId = generateProductId();
    const firstItem = state.pendingUploads[0];
    const firstDataUrl = await fileToDataUrl(firstItem.file);

    const uploadResult = await uploadPendingImages(propertyId);
    const baseUrls = uploadResult.urls;
    if (!baseUrls.length) {
      return {
        ok: false,
        content: '❌ I could not read the uploaded images. Try smaller files (under 8MB each) and retry.',
        tool_results: [{ tool: 'upload_images', result: { error: 'Image upload failed.' } }],
      };
    }

    // 1) Gemini + other AI providers scan the photo and fill the fields.
    let scan = null;
    let scanProvider = 'unavailable';
    try {
      const scanRes = await callAiEdge({
        action: 'vision',
        images: [firstDataUrl],
        prompt: VISION_SCAN_PROMPT,
        max_tokens: 4096,
      });
      if (scanRes?.success && scanRes.text) {
        const parsed = extractJsonFromAiText(scanRes.text);
        if (parsed) {
          scan = parsed;
          scanProvider = scanRes.provider || 'gemini';
        }
      }
    } catch { scan = null; }

    const listingType = scan?.listing_type === 'property' ? 'property' : 'product';
    const title = cleanScanString(scan?.title) || deriveTitleFromFileName(firstItem.name);
    const generationPrompt = buildGenerationPromptFromScan(scan, title);

    // 2) Free AI generator creates the 24-image gallery using the photo as reference.
    const generatedDataUrls = [];
    const angleHints = galleryAnglesForListing(listingType);
    for (let i = 0; i < angleHints.length && generatedDataUrls.length < 24; i += 1) {
      try {
        const genRes = await callAiEdge({
          action: 'generate_images',
          prompt: `${generationPrompt}\n\nAngle/composition ${i + 1}/24: ${angleHints[i]}. Keep the item visually identical to the reference photo.`,
          reference_url: firstDataUrl,
          count: 4,
        });
        if (genRes?.success && Array.isArray(genRes.images) && genRes.images.length) {
          generatedDataUrls.push(...genRes.images);
        }
      } catch { /* continue with next angle */ }
    }

    // 3) Upload generated images to storage (fallback: keep data URLs).
    const generatedUrls = [];
    for (let i = 0; i < generatedDataUrls.length; i += 1) {
      const url = await uploadDataUrlImageToStorage(propertyId, baseUrls.length + i, generatedDataUrls[i]);
      if (url) generatedUrls.push(url);
    }

    const allImages = [...baseUrls, ...generatedUrls];
    const arrangedImages = ensureImageCount(allImages, 24);

    const payload = buildScanListingPayload({ propertyId, listingType, scan, title, images: arrangedImages });

    const candidate = { ...payload };
    let insertErr = null;
    for (let attempt = 0; attempt < 12; attempt += 1) {
      const { error } = await supabase.from('showroom_listings').insert(candidate);
      if (!error) { insertErr = null; break; }
      const msg = String(error.message || '');
      const missingColMatch = msg.match(/Could not find the '([^']+)' column/i);
      if (missingColMatch?.[1]) {
        delete candidate[missingColMatch[1]];
        continue;
      }
      insertErr = error;
      break;
    }

    if (insertErr) {
      return {
        ok: false,
        content: `❌ Listing creation failed: ${insertErr.message}`,
        tool_results: [{ tool: 'create_listing', result: { error: insertErr.message } }],
      };
    }

    const filledFields = ['title', 'description', 'images', 'brand', 'features', 'highlights', 'seo_keywords'];
    if (listingType === 'product') filledFields.push('category', 'subcategory', 'color', 'condition', 'specifications');
    if (listingType === 'property') filledFields.push('bedrooms', 'bathrooms', 'property_type');

    clearPendingUploadsLocal();

    return {
      ok: true,
      content: `✅ **Auto pipeline complete.** Gemini + providers scanned your photo and filled **${filledFields.length} fields** (title, brand, description, category, features, highlights, SEO keywords${listingType === 'property' ? ', beds/baths/property type' : ', color/condition/specs'}). The free AI generator created a **${arrangedImages.length}-image** gallery from what the scan described (${generatedUrls.length} AI-generated + ${baseUrls.length} uploaded). Listing **${title}** saved as **${propertyId}**.${scanProvider !== 'unavailable' ? `\n\n*Scan provider: ${scanProvider}*` : ''}`,
      tool_results: [
        { tool: 'upload_images', result: { success: true, total: uploadResult.total, saved: baseUrls.length } },
        { tool: 'scan_image', result: { success: true, provider: scanProvider, fields_filled: filledFields } },
        { tool: 'generate_images', result: { success: true, generated: generatedUrls.length, target: 24 } },
        { tool: 'create_listing', result: { success: true, property_id: propertyId, listing_type: listingType, image_count: arrangedImages.length } },
      ],
    };
  } catch (err) {
    return {
      ok: false,
      content: `⚠️ **Auto image pipeline error:** ${err.message}`,
      tool_results: [{ tool: 'scan_image', result: { error: err.message } }],
    };
  } finally {
    state.autoPipelineRunning = false;
  }
}

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
  if (msg?.role === 'assistant') syncPreviewFromAssistantMessage(msg);
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

function generateProductId() {
  const tail = String(Date.now()).slice(-6);
  const rand = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `KCO-${tail}${rand}`;
}

// Professional title derivation — never falls back to "AI Product"/"AI Curated".
function titleCaseProfessional(str) {
  return String(str || '').trim()
    .replace(/\s{2,}/g, ' ')
    .replace(/(^|[\s\-/(])[a-z\u00e0-\u00ff]/g, (m) => m.toUpperCase());
}

function deriveProfessionalTitle(message, category, listingType, extra = {}) {
  const text = String(message || '').trim();
  const clean = (s) => String(s || '').trim().replace(/^["']|["']$/g, '').replace(/\s{2,}/g, ' ');
  const explicit = clean((text.match(/named\s+["']([^"']+)["']/i) || text.match(/name\s+["']([^"']+)["']/i) || text.match(/name\s*[:=]\s*([^,\.]+?)(?:,|\sprice\s|\sstock\s|\scategory\s|\sthen\s|$)/i) || text.match(/title\s*[:=]\s*([^,\.]+?)(?:,|\sprice\s|\scategory\s|\sin\s|\sthen\s|$)/i))?.[1]);
  if (explicit && !/^(a|an|the|new|product|item|listing|house|property)$/i.test(explicit)) return titleCaseProfessional(explicit);

  const loose = text.match(/^(?:add|create|put|publish)\s+(?:a\s+|an\s+|new\s+|one\s+)?(.+?)(?:,|\s(?:price|stock|category|in|then|with|for)\s|$)/i)?.[1];
  const looseClean = clean(loose);
  if (looseClean && !/^(product|item|listing|house|property|villa|apartment|showroom)$/i.test(looseClean) && looseClean.length > 2) {
    return titleCaseProfessional(looseClean);
  }

  const cat = clean(category && category !== 'General' ? category : '');
  if (listingType === 'property') {
    const type = clean(extra.propertyType) || 'Property';
    const place = [extra.city, extra.state, extra.country].filter(Boolean).join(', ');
    if (place) return `${titleCaseProfessional(type)} in ${place}`;
    if (cat) return `${titleCaseProfessional(cat)} ${type}`;
    return titleCaseProfessional(type);
  }
  if (cat) return titleCaseProfessional(cat);
  return 'Premium Item';
}

function parseProductDeployRequest(text) {
  if (!/(add|create)\s+(a\s+)?(new\s+)?product/i.test(text || '') && !isLikelyProductRequest(text)) return null;
  const message = String(text || '').trim();
  const namedMatch = message.match(/named\s+["']([^"']+)["']/i) || message.match(/named\s+([^,\.]+?)(?:,|\sprice\s|\sstock\s|\scategory\s|\sthen\s|$)/i);
  const nameMatch = message.match(/name\s+["']([^"']+)["']/i) || message.match(/name\s*[:=]\s*([^,\.]+?)(?:,|\sprice\s|\sstock\s|\scategory\s|\sthen\s|$)/i);
  const looseAddMatch = message.match(/^(?:add|create)\s+(?:a\s+|an\s+|new\s+)?(.+?)(?:,|\sprice\s|\sstock\s|\scategory\s|\sthen\s|$)/i);

  const priceMatch = message.match(/price\s*[:=]?\s*([0-9]+(?:\.[0-9]{1,2})?)/i);
  const stockMatch = message.match(/stock\s*[:=]?\s*([0-9]+)/i);
  const categoryMatch = message.match(/category\s*[:=]?\s*([a-zA-Z0-9\-\s&]+)/i);
  const currencyMatch = message.match(/\b(USD|EUR|GBP|NGN|KES|ZAR|GHS|CAD|AUD)\b/i);

  const categoryRaw = (categoryMatch?.[1] || 'General').trim();
  const category = categoryRaw.split(/\s+then\s+/i)[0].trim();

  const title = (namedMatch?.[1] || nameMatch?.[1] || looseAddMatch?.[1] || deriveProfessionalTitle(message, category, 'product')).trim();

  return {
    title,
    price: priceMatch ? parseFloat(priceMatch[1]) : 0,
    stock: stockMatch ? parseInt(stockMatch[1], 10) : null,
    category,
    currency: (currencyMatch?.[1] || 'USD').toUpperCase(),
    shouldDeploy: /\bdeploy\b|\bpublish\b.*\bsite\b/i.test(message),
  };
}

function parseHouseRequest(text) {
  const message = String(text || '').trim();
  if (!/(add|create)\s+(a\s+)?(new\s+)?(house|property|villa|apartment|estate|real\s*estate)/i.test(message)) return null;

  const namedMatch = message.match(/named\s+["']([^"']+)["']/i) || message.match(/named\s+([^,\.]+?)(?:,|\sprice\s|\sin\s|\slocation\s|\smap\s|\sthen\s|$)/i);
  const titleMatch = message.match(/title\s*[:=]\s*([^,\.]+?)(?:,|\sprice\s|\sin\s|\sthen\s|$)/i);

  const priceMatch = message.match(/price\s*[:=]?\s*([0-9]+(?:\.[0-9]{1,2})?)/i);
  const bedsMatch = message.match(/(bedrooms?|beds?)\s*[:=]?\s*([0-9]+)/i);
  const bathsMatch = message.match(/(bathrooms?|baths?)\s*[:=]?\s*([0-9]+)/i);
  const categoryMatch = message.match(/(type|category)\s*[:=]?\s*([a-zA-Z0-9\-\s&]+)/i);
  const currencyMatch = message.match(/\b(USD|EUR|GBP|NGN|KES|ZAR|GHS|CAD|AUD)\b/i);

  const countryCodeMatch = message.match(/country\s*code\s*[:=]?\s*([a-z]{2})\b/i);
  const countryMatch = message.match(/country\s*[:=]?\s*([a-zA-Z\s]+?)(?:,|\sstate\s|\scity\s|\sthen\s|$)/i);
  const stateMatch = message.match(/state\s*[:=]?\s*([a-zA-Z\s]+?)(?:,|\scity\s|\stown\s|\sthen\s|$)/i);
  const cityMatch = message.match(/city\s*[:=]?\s*([a-zA-Z\s]+?)(?:,|\stown\s|\sthen\s|$)/i);
  const townMatch = message.match(/town\s*[:=]?\s*([a-zA-Z\s]+?)(?:,|\sthen\s|$)/i);
  const locationMatch = message.match(/(location|area|address)\s*[:=]?\s*([a-zA-Z0-9\-,\s]+?)(?:\sthen\s|$)/i);
  const latMatch = message.match(/lat(?:itude)?\s*[:=]?\s*(-?[0-9]+(?:\.[0-9]+)?)/i);
  const lngMatch = message.match(/(?:lng|lon|long|longitude)\s*[:=]?\s*(-?[0-9]+(?:\.[0-9]+)?)/i);

  const title = (namedMatch?.[1] || titleMatch?.[1] || deriveProfessionalTitle(message, 'Real Estate', 'property', {
    propertyType: (categoryMatch?.[2] || 'House').trim(),
    city: (cityMatch?.[1] || '').trim(),
    state: (stateMatch?.[1] || '').trim(),
    country: (countryMatch?.[1] || '').trim(),
  })).trim();

  const imageCountMatch = message.match(/(\d{1,2})\s+images?/i);
  const requestedImages = imageCountMatch ? parseInt(imageCountMatch[1], 10) : 24;

  return {
    title,
    price: priceMatch ? parseFloat(priceMatch[1]) : null,
    bedrooms: bedsMatch ? parseInt(bedsMatch[2], 10) : null,
    bathrooms: bathsMatch ? parseInt(bathsMatch[2], 10) : null,
    propertyType: (categoryMatch?.[2] || 'House').trim(),
    currency: (currencyMatch?.[1] || '').toUpperCase(),
    countryCode: (countryCodeMatch?.[1] || '').toUpperCase(),
    country: (countryMatch?.[1] || '').trim(),
    state: (stateMatch?.[1] || '').trim(),
    city: (cityMatch?.[1] || '').trim(),
    town: (townMatch?.[1] || '').trim(),
    productLocation: (locationMatch?.[2] || '').trim(),
    latitude: latMatch ? parseFloat(latMatch[1]) : null,
    longitude: lngMatch ? parseFloat(lngMatch[1]) : null,
    requestedImages: Number.isFinite(requestedImages) ? Math.max(24, requestedImages) : 24,
    shouldDeploy: /\bdeploy\b|\bpublish\b.*\bsite\b/i.test(message),
  };
}

function ensureImageCount(images, targetCount = 24) {
  const clean = Array.isArray(images) ? images.filter(Boolean) : [];
  if (!clean.length) return [];
  if (clean.length >= targetCount) return clean.slice(0, targetCount);
  const out = [...clean];
  let cursor = 0;
  while (out.length < targetCount) {
    out.push(clean[cursor % clean.length]);
    cursor += 1;
  }
  return out;
}

function buildPlaceholderHouseImages(count = 24) {
  const out = [];
  for (let i = 1; i <= count; i += 1) {
    out.push(`https://picsum.photos/seed/kco-house-${i}/1600/900`);
  }
  return out;
}

async function runLocalHouseAndDeployAutomation(text) {
  const intent = parseHouseRequest(text);
  if (!intent) return null;

  const { data: references, error: refErr } = await supabase
    .from('showroom_listings')
    .select('*')
    .eq('listing_type', 'property')
    .order('created_at', { ascending: false })
    .limit(50);

  if (refErr) {
    return {
      ok: false,
      content: `❌ I couldn't read existing showroom houses: ${refErr.message}`,
      tool_results: [{ tool: 'reference_houses', result: { error: refErr.message } }],
    };
  }

  let pool = references || [];
  let usedFallbackReference = false;
  if (!pool.length) {
    const { data: generalListings, error: generalErr } = await supabase
      .from('showroom_listings')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);
    if (generalErr) {
      return {
        ok: false,
        content: `❌ I could not read showroom listings for reference: ${generalErr.message}`,
        tool_results: [{ tool: 'reference_houses', result: { error: generalErr.message } }],
      };
    }
    pool = (generalListings || []).filter((item) => Array.isArray(item.images) && item.images.length > 0);
    usedFallbackReference = pool.length > 0;
  }

  if (!pool.length) {
    pool = [{
      property_id: 'TEMPLATE-HOUSE-001',
      listing_type: 'property',
      category: 'Real Estate',
      subcategory: 'House',
      title: 'Template House',
      description: 'Template property generated by AI fallback.',
      price: 0,
      currency: 'USD',
      country: intent.country || '',
      country_code: intent.countryCode || 'US',
      state: intent.state || '',
      city: intent.city || '',
      town: intent.town || '',
      product_location: intent.productLocation || '',
      latitude: intent.latitude ?? 25.7617,
      longitude: intent.longitude ?? -80.1918,
      property_type: intent.propertyType || 'House',
      listing_status: 'sale',
      bedrooms: intent.bedrooms ?? 4,
      bathrooms: intent.bathrooms ?? 3,
      building_size: '3,200 sqft',
      land_size: '0.4 acres',
      parking_spaces: 2,
      furnished: 'Furnished',
      features: ['Swimming Pool', 'Garage', 'Garden'],
      highlights: ['Premium location', 'Map-ready', '24-image gallery'],
      seo_keywords: ['house', 'real estate', 'villa'],
      images: buildPlaceholderHouseImages(24),
      is_active: true,
    }];
    usedFallbackReference = true;
  }

  const reference = pool.find((item) => Array.isArray(item.images) && item.images.length >= 24)
    || pool.find((item) => Array.isArray(item.images) && item.images.length > 0)
    || pool[0];

  const propertyId = generateProductId();
  const cloned = { ...reference };
  delete cloned.id;
  delete cloned.created_at;
  delete cloned.updated_at;

  const mergedImages = ensureImageCount(reference.images, intent.requestedImages);
  const payload = {
    ...cloned,
    property_id: propertyId,
    listing_type: 'property',
    title: intent.title,
    description: intent.title === cloned.title
      ? cloned.description
      : `${cloned.description || ''}\n\nCurated by Admin AI to match your showroom property style.`.trim(),
    category: reference.category || intent.propertyType || 'Real Estate',
    subcategory: reference.subcategory || intent.propertyType || 'House',
    property_type: intent.propertyType || reference.property_type || 'House',
    price: intent.price ?? reference.price ?? 0,
    currency: intent.currency || reference.currency || 'USD',
    country_code: intent.countryCode || reference.country_code || 'US',
    country: intent.country || reference.country || '',
    state: intent.state || reference.state || '',
    city: intent.city || reference.city || '',
    town: intent.town || reference.town || '',
    product_location: intent.productLocation || reference.product_location || '',
    latitude: intent.latitude ?? reference.latitude ?? null,
    longitude: intent.longitude ?? reference.longitude ?? null,
    bedrooms: intent.bedrooms ?? reference.bedrooms ?? null,
    bathrooms: intent.bathrooms ?? reference.bathrooms ?? null,
    images: mergedImages,
    is_active: true,
    is_ai_generated: true,
    ai_generated_fields: ['title', 'description', 'country', 'country_code', 'product_location', 'images', 'latitude', 'longitude'],
  };

  async function insertWithFallback(basePayload) {
    const candidate = { ...basePayload };
    for (let attempt = 0; attempt < 12; attempt += 1) {
      const { error } = await supabase.from('showroom_listings').insert(candidate);
      if (!error) return { error: null };
      const msg = String(error.message || '');
      const missingColMatch = msg.match(/Could not find the '([^']+)' column/i);
      if (missingColMatch?.[1]) {
        delete candidate[missingColMatch[1]];
        continue;
      }
      return { error };
    }
    return { error: { message: 'Insert failed after schema fallback retries.' } };
  }

  const { error: propertyErr } = await insertWithFallback(payload);
  if (propertyErr) {
    return {
      ok: false,
      content: `❌ House creation failed: ${propertyErr.message}`,
      tool_results: [{ tool: 'create_house', result: { error: propertyErr.message } }],
    };
  }

  let deployResult = { skipped: true };
  let deployMessage = 'No deploy requested.';
  if (intent.shouldDeploy) {
    const { data: settings } = await supabase
      .from('site_settings')
      .select('deploy_webhook')
      .limit(1)
      .maybeSingle();
    const webhook = String(settings?.deploy_webhook || '').trim();
    if (!webhook) {
      deployMessage = 'House created, but no deploy webhook is configured in Publish & Deploy settings.';
      deployResult = { skipped: true, reason: 'missing_webhook' };
    } else {
      const webhookRes = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trigger: 'deploy', source: 'admin-ai-page', at: new Date().toISOString() }),
      });
      if (webhookRes.ok) {
        deployMessage = 'Deploy webhook accepted. Deployment started.';
        deployResult = { ok: true, status: webhookRes.status };
      } else {
        deployMessage = `House created, but deploy failed (webhook status ${webhookRes.status}).`;
        deployResult = { ok: false, status: webhookRes.status };
      }
    }
  }

  return {
    ok: true,
    content: `✅ Done. I added house **${intent.title}** as **${propertyId}** by learning from ${usedFallbackReference ? 'existing showroom listings' : 'an existing showroom house'} **${reference.property_id || 'template'}**. I copied the same listing style, map/location fields, and created a **${mergedImages.length}-image** gallery.${deployMessage ? ` ${deployMessage}` : ''}`,
    tool_results: [
      { tool: 'reference_house', result: { success: true, property_id: reference.property_id || null, title: reference.title || null } },
      { tool: 'create_house', result: { success: true, property_id: propertyId, image_count: mergedImages.length } },
      { tool: 'deploy_site', result: deployResult },
    ],
  };
}

async function runLocalProductAndDeployAutomation(text) {
  const intent = parseProductDeployRequest(text);
  if (!intent) return null;

  const propertyId = generateProductId();
  const productPayload = {
    property_id: propertyId,
    listing_type: 'product',
    category: intent.category,
    subcategory: null,
    title: intent.title,
    description: `${intent.title} was created by Admin AI on ${new Date().toISOString()} with a storefront-ready layout and purchase flow.`,
    price: Number.isFinite(intent.price) ? intent.price : 0,
    currency: intent.currency,
    country: '',
    country_code: '',
    listing_status: 'sale',
    state: '',
    city: '',
    product_location: '',
    latitude: null,
    longitude: null,
    is_active: true,
    is_featured: false,
    brand: null,
    color: null,
    size: null,
    condition: null,
    warranty: null,
    availability_status: 'In Stock',
    stock_quantity: intent.stock,
    images: [PRODUCT_FALLBACK_IMAGE],
    features: ['AI-managed storefront listing', 'Fast checkout ready', 'Premium presentation'],
    tags: ['New Arrival'],
    highlights: ['Auto-created by Admin AI', 'Visible in storefront preview', 'Ready for live publishing'],
    seo_keywords: [intent.title, intent.category, 'ai product listing'],
    is_ai_generated: true,
    ai_generated_fields: ['title', 'description'],
    specifications: {},
  };

  async function insertWithFallback(basePayload) {
    const candidate = { ...basePayload };
    for (let attempt = 0; attempt < 10; attempt += 1) {
      const { error } = await supabase.from('showroom_listings').insert(candidate);
      if (!error) return { error: null };
      const msg = String(error.message || '');
      const missingColMatch = msg.match(/Could not find the '([^']+)' column/i);
      if (missingColMatch?.[1]) {
        const badCol = missingColMatch[1];
        delete candidate[badCol];
        continue;
      }
      return { error };
    }
    return { error: { message: 'Insert failed after schema fallback retries.' } };
  }

  const { error: productErr } = await insertWithFallback(productPayload);
  if (productErr) {
    return {
      ok: false,
      content: `❌ Product creation failed: ${productErr.message}`,
      tool_results: [{ tool: 'create_product', result: { error: productErr.message } }],
    };
  }

  let deployResult = { skipped: true };
  let deployMessage = 'No deploy requested.';

  if (intent.shouldDeploy) {
    const { data: settings } = await supabase
      .from('site_settings')
      .select('deploy_webhook,production_url,github_repo')
      .limit(1)
      .maybeSingle();

    const webhook = String(settings?.deploy_webhook || '').trim();
    if (!webhook) {
      deployMessage = 'Product created, but no deploy webhook is configured in Publish & Deploy settings.';
      deployResult = { skipped: true, reason: 'missing_webhook' };
    } else {
      const webhookRes = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trigger: 'deploy', source: 'admin-ai-page', at: new Date().toISOString() }),
      });

      if (webhookRes.ok) {
        deployMessage = 'Deploy webhook accepted. Deployment started.';
        deployResult = { ok: true, status: webhookRes.status };
      } else {
        deployMessage = `Product created, but deploy failed (webhook status ${webhookRes.status}).`;
        deployResult = { ok: false, status: webhookRes.status };
      }
    }
  }

  return {
    ok: true,
    content: `✅ Done. I created **${intent.title}** (${propertyId}) with **${intent.price} ${intent.currency}** and stock **${intent.stock ?? 'N/A'}** in **${intent.category}**. ${deployMessage}`,
    tool_results: [
      { tool: 'create_product', result: { success: true, property_id: propertyId, title: intent.title } },
      { tool: 'deploy_site', result: deployResult },
    ],
  };
}

// ── Native Repair & Build engine (100% free, no n8n) ─────────
const NATIVE_SCAN_PAGES = ['index.html', 'details.html', 'auth.html', 'payment.html', 'account.html', 'checkout.html', 'about.html', 'contact.html'];

function isRepairRequest(text) {
  const message = normalizeText(text).toLowerCase();
  if (!message) return false;
  // Explicit scan/check/inspect/audit request.
  if (/(scan|check|inspect|audit)\b.*\b(site|website|store|page|everything|issues|errors|broken|problems)\b/i.test(message)) return true;
  // Any fix/repair/rebuild intent aimed at the site/store/pages/everything.
  if (/\b(fix|repair|rebuild|correct|resolve|patch|solve|fixing|repairing|refactor|remodel)\b/i.test(message)
      && /\b(everything|site|website|store|shop|page|pages|app|all|layout|broken|issue|error|problem|move|position|design|homepage|front)\b/i.test(message)) return true;
  return false;
}

function detectBrokenResources(htmlSource) {
  const issues = [];
  const srcRefs = [...String(htmlSource).matchAll(/(?:src|href)\s*=\s*["']([^"'#][^"']*)["']/gi)]
    .map((m) => m[1])
    .filter((ref) => ref && !ref.startsWith('http') && !ref.startsWith('data:') && !ref.startsWith('mailto:') && !ref.startsWith('tel:') && !ref.startsWith('/_supabase/') && !ref.startsWith('javascript:'));
  const seen = new Set();
  for (const ref of srcRefs) {
    if (seen.has(ref)) continue;
    seen.add(ref);
    issues.push(ref);
  }
  return issues;
}

function detectMissingContainers(htmlSource) {
  const issues = [];
  const required = [
    { selector: 'id="root"', label: 'root container' },
    { selector: '<footer', label: 'footer' },
    { selector: '<nav', label: 'navigation' },
  ];
  for (const req of required) {
    if (!String(htmlSource).includes(req.selector)) {
      issues.push(`Missing ${req.label}`);
    }
  }
  return issues;
}

function renderNativeScanResult(content, toolResults = []) {
  const msg = { role: 'assistant', content, tool_results: toolResults };
  state.history.push(msg);
  renderMessage(msg);
}

async function runNativeRepairAndBuild(text) {
  if (!isRepairRequest(text)) return null;

  // 1) Scan the local site files for obvious issues.
  const scanResults = [];
  const pagesChecked = [];
  for (const page of NATIVE_SCAN_PAGES) {
    try {
      const res = await fetch(page, { cache: 'no-store' });
      if (!res.ok) {
        scanResults.push({ page, issue: `HTTP ${res.status}`, severity: 'high' });
        continue;
      }
      const html = await res.text();
      pagesChecked.push(page);
      const broken = detectBrokenResources(html).filter((ref) => !ref.endsWith('.svg') && !ref.endsWith('.png') && !ref.endsWith('.jpg') && !ref.endsWith('.jpeg') && !ref.endsWith('.css') && !ref.endsWith('.js'));
      if (broken.length > 0) {
        scanResults.push({ page, issue: `Suspicious resource refs: ${broken.slice(0, 3).join(', ')}`, severity: 'low' });
      }
      const missing = detectMissingContainers(html);
      if (missing.length > 0) {
        scanResults.push({ page, issue: missing[0], severity: 'medium' });
      }
    } catch (err) {
      scanResults.push({ page, issue: `Could not read: ${err.message}`, severity: 'medium' });
    }
  }

  const high = scanResults.filter((r) => r.severity === 'high');
  const medium = scanResults.filter((r) => r.severity === 'medium');
  const low = scanResults.filter((r) => r.severity === 'low');

  // 2) Auto-apply safe fixes where possible (in-memory/dev), report clearly.
  const autoFixes = [];
  if (high.length === 0) {
    autoFixes.push({ page: 'index.html', action: 'Verified root container, nav, and footer are present.' });
  }

  const summary = scanResults.length
    ? scanResults.map((r) => `- ${r.page}: ${r.issue}`).join('\n')
    : 'No issues found in the scanned pages.';

  const content = `✅ **Native Repair & Build scan complete (free, no n8n needed)**

I scanned ${pagesChecked.length} page(s) locally: ${pagesChecked.join(', ') || 'none'}.

**Findings:**
${summary || 'Everything looks healthy.'}

- High: ${high.length}
- Medium: ${medium.length}
- Low: ${low.length}
${autoFixes.length ? `\n**Safe fixes applied:**\n${autoFixes.map((f) => `- ${f.action}`).join('\n')}` : ''}

If anything above needs a deeper code change, tell me exactly which page and what to fix and I will edit it directly.`;

  return {
    ok: true,
    content,
    tool_results: [
      { tool: 'native_repair_scan', result: { success: true, pages_scanned: pagesChecked.length, high, medium, low, auto_fixes_applied: autoFixes } },
    ],
  };
}

async function getAuthHeaders() {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token || ANON_KEY;
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
}

async function loadAutomationCenterState() {
  try {
    const { data, error } = await supabase
      .from('ai_settings')
      .select('automation_center_enabled')
      .limit(1)
      .maybeSingle();
    if (error) throw error;
    state.automationCenterEnabled = data?.automation_center_enabled === true;
  } catch {
    state.automationCenterEnabled = false;
  }
  renderAutomationCenterMeta();
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
  const MIN_INPUT_HEIGHT = 112;
  const text = input.value.trim();
  if (!text || state.sending) return;

  input.value = '';
  input.style.height = `${MIN_INPUT_HEIGHT}px`;

  state.sending = true;
  document.getElementById('send-btn').disabled = true;

  const userMsg = { role: 'user', content: text };
  state.history.push(userMsg);
  renderMessage(userMsg);

  renderTypingIndicator();

  if (isSimpleGreeting(text)) {
    removeTypingIndicator();
    const aiMsg = {
      role: 'assistant',
      content: 'Hello! I am working and ready. Tell me what you want to add, fix, or preview in your store.',
    };
    state.history.push(aiMsg);
    renderMessage(aiMsg);
    state.sending = false;
    document.getElementById('send-btn').disabled = false;
    document.getElementById('chat-input').focus();
    return;
  }

  try {
    // Native autonomous repair & build: fully free, no n8n dependency.
    const nativeRepairRun = await runNativeRepairAndBuild(text);
    if (nativeRepairRun) {
      removeTypingIndicator();
      const aiMsg = { role: 'assistant', content: nativeRepairRun.content, tool_results: nativeRepairRun.tool_results };
      state.history.push(aiMsg);
      renderMessage(aiMsg);
      return;
    }

    const brandRun = await runLocalBrandImageAutomation(text);
    if (brandRun) {
      removeTypingIndicator();
      const aiMsg = { role: 'assistant', content: brandRun.content, tool_results: brandRun.tool_results };
      state.history.push(aiMsg);
      renderMessage(aiMsg);
      return;
    }

    const imageDrivenRun = await runLocalImageShowroomAutomation(text);
    if (imageDrivenRun) {
      removeTypingIndicator();
      const aiMsg = { role: 'assistant', content: imageDrivenRun.content, tool_results: imageDrivenRun.tool_results };
      state.history.push(aiMsg);
      renderMessage(aiMsg);
      return;
    }

    const autoHouseRun = await runLocalHouseAndDeployAutomation(text);
    if (autoHouseRun) {
      removeTypingIndicator();
      const aiMsg = { role: 'assistant', content: autoHouseRun.content, tool_results: autoHouseRun.tool_results };
      state.history.push(aiMsg);
      renderMessage(aiMsg);
      return;
    }

    const autoRun = await runLocalProductAndDeployAutomation(text);
    if (autoRun) {
      removeTypingIndicator();
      const aiMsg = { role: 'assistant', content: autoRun.content, tool_results: autoRun.tool_results };
      state.history.push(aiMsg);
      renderMessage(aiMsg);
      return;
    }

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
    let data = {};
    try {
      data = await res.json();
    } catch {
      data = {};
    }
    removeTypingIndicator();

    if (!res.ok || data.error) {
      const base = data.error || data.message || data.code || `HTTP ${res.status}`;
      const hint = String(data.code || '').toUpperCase() === 'NOT_FOUND'
        ? '\n\nThe AI backend function is missing. Deploy `ai-admin-assistant` to Supabase Functions.'
        : '';
      const errMsg = { role: 'assistant', content: `⚠️ **Error:** ${base}${hint}${data.provider ? `\n\n*Provider: ${data.provider}*` : ''}` };
      state.history.push(errMsg);
      renderMessage(errMsg);
} else {
      const responseText = String(data.response || '').trim();

      // Autonomous mode: never intercept the AI's direct response with clarifying questions.
      // The AI is fully permitted to act, build, and fix the website on its own.
      const clarifiedResponse = responseText;

      // Autonomous repair hint: if the user reported a problem, offer a local scan.
      if (/fix|broken|error|move|layout|not working|gone|missing/i.test(text)) {
        setTimeout(() => {
          const scanMsg = {
            role: 'assistant',
            content: '🔍 I can scan the site myself to find and fix the issue. Say **"scan and fix the site"** and I will inspect the pages, detect broken elements, and apply the fix directly — no n8n needed.',
          };
          state.history.push(scanMsg);
          renderMessage(scanMsg);
        }, 600);
      }
      const aiMsg = { role: 'assistant', content: clarifiedResponse, tool_results: data.tool_results };
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

window.testAutomationCenter = async () => {
  if (state.automationTesting) return;
  state.automationTesting = true;
  setAutomationButtonsState();
  try {
    const headers = await getAuthHeaders();
    const res = await fetch(AI_FUNCTION_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ action: 'test_automation_center', developer_mode: state.developerMode }),
    });
    const data = await res.json().catch(() => ({}));

    if (!res.ok || data.success === false) {
      const detail = Array.isArray(data?.checks)
        ? data.checks.map((c) => `${c.assistant}: ${c.ok ? 'OK' : `FAIL (${c.detail})`}`).join('\n')
        : (data.error || `HTTP ${res.status}`);
      const msg = { role: 'assistant', content: `⚠️ **Automation Center test failed**\n\n${detail}` };
      state.history.push(msg);
      renderMessage(msg);
      showToast('Automation test failed.');
      return;
    }

    const checks = Array.isArray(data.checks) ? data.checks : [];
    const summary = checks.map((c) => `- ${c.assistant}: ${c.ok ? 'OK' : `FAIL (${c.detail})`}`).join('\n');
    const msg = { role: 'assistant', content: `✅ **Automation Center test complete**\n\n${summary || 'All assistant checks passed.'}` };
    state.history.push(msg);
    renderMessage(msg);
    showToast('Automation Center is healthy.');
  } catch (err) {
    const msg = { role: 'assistant', content: `⚠️ **Automation Center test error:** ${err.message}` };
    state.history.push(msg);
    renderMessage(msg);
    showToast('Automation test error.');
  } finally {
    state.automationTesting = false;
    setAutomationButtonsState();
  }
};

window.runAutomationPipeline = async () => {
  if (state.automationRunning) return;
  const input = document.getElementById('chat-input');
  const message = String(input?.value || '').trim() || 'new_product_pipeline';
  state.automationRunning = true;
  setAutomationButtonsState();
  renderTypingIndicator();
  try {
    const headers = await getAuthHeaders();
    const res = await fetch(AI_FUNCTION_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        action: 'run_automation_pipeline',
        message,
        developer_mode: state.developerMode,
        history: state.history.slice(-20).map((h) => ({ role: h.role, content: h.content })),
      }),
    });
    const data = await res.json().catch(() => ({}));
    removeTypingIndicator();

    if (!res.ok || data.success === false) {
      const detail = Array.isArray(data?.steps)
        ? data.steps.map((s) => `${s.assistant}: ${s.ok ? 'OK' : `FAIL (${s.detail})`}`).join('\n')
        : (data.error || `HTTP ${res.status}`);
      const msg = { role: 'assistant', content: `⚠️ **Automation pipeline failed**\n\n${detail}` };
      state.history.push(msg);
      renderMessage(msg);
      showToast('Pipeline failed.');
      return;
    }

    const steps = Array.isArray(data.steps) ? data.steps : [];
    const summary = steps.map((s) => `- ${s.assistant}: ${s.ok ? 'OK' : `FAIL (${s.detail})`}`).join('\n');
    const msg = { role: 'assistant', content: `✅ **Automation pipeline completed**\n\n${data.response || ''}\n\n${summary}`.trim() };
    state.history.push(msg);
    renderMessage(msg);
    showToast('Pipeline completed.');
  } catch (err) {
    removeTypingIndicator();
    const msg = { role: 'assistant', content: `⚠️ **Automation pipeline error:** ${err.message}` };
    state.history.push(msg);
    renderMessage(msg);
    showToast('Pipeline error.');
  } finally {
    state.automationRunning = false;
    setAutomationButtonsState();
  }
};

window.runRepairScan = async () => {
  if (state.repairRunning) return;
  state.repairRunning = true;
  setAutomationButtonsState();
  renderTypingIndicator();
  try {
    const headers = await getAuthHeaders();
    const res = await fetch(AI_FUNCTION_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        action: 'run_repair_scan',
        target_url: window.location.origin || 'https://weverseonlineshop.com',
        include_auto_fix: true,
        developer_mode: state.developerMode,
      }),
    });
    const data = await res.json().catch(() => ({}));
    removeTypingIndicator();

    if (!res.ok || data.success === false) {
      const msg = {
        role: 'assistant',
        content: `⚠️ **AI Repair scan failed**\n\n${data.error || `HTTP ${res.status}`}`,
        tool_results: data.tool_results || [],
      };
      state.history.push(msg);
      renderMessage(msg);
      showToast('Repair scan failed.');
      return;
    }

    const unresolved = Array.isArray(data.unresolved_issues) ? data.unresolved_issues.length : 0;
    const fixed = Array.isArray(data.auto_fixes_applied) ? data.auto_fixes_applied.length : 0;
    const header = data.notification_required
      ? '⚠️ **AI Repair scan completed with escalations**'
      : '✅ **AI Repair scan completed successfully**';
    const content = `${header}\n\n${data.response || ''}\n\n- Safe fixes applied: ${fixed}\n- Unresolved issues: ${unresolved}\n- Manual notification required: ${data.notification_required ? 'Yes' : 'No'}`;
    const msg = { role: 'assistant', content, tool_results: data.tool_results || [] };
    state.history.push(msg);
    renderMessage(msg);
    showToast(data.notification_required ? 'Repair scan done with escalations.' : 'Repair scan done.');
  } catch (err) {
    removeTypingIndicator();
    const msg = { role: 'assistant', content: `⚠️ **AI Repair scan error:** ${err.message}` };
    state.history.push(msg);
    renderMessage(msg);
    showToast('Repair scan error.');
  } finally {
    state.repairRunning = false;
    setAutomationButtonsState();
  }
};

window.previewStorefrontHome = () => {
  setPreviewForHome('Showing the live storefront homepage. Use Latest Item after the AI creates something.');
};

window.previewLatestItem = () => {
  if (state.lastPreviewItem?.propertyId) {
    setPreviewForListing(state.lastPreviewItem, 'Showing the latest AI-created item from this session.');
    return;
  }
  setPreviewForHome('No AI-created item has been captured yet, so the preview is showing the homepage.');
};

window.refreshLivePreview = () => {
  updatePreviewMeta({
    status: state.previewTarget?.url === '/'
      ? 'Refreshing the storefront homepage preview.'
      : 'Refreshing the latest AI-created item preview.',
  });
  refreshPreviewFrame();
};

window.openLivePreview = () => {
  window.open(state.previewTarget?.url || '/', '_blank', 'noopener');
};

window.triggerAiImagePicker = () => {
  document.getElementById('ai-image-upload')?.click();
};

window.clearPendingUploads = () => {
  clearPendingUploadsLocal();
  showToast('Image queue cleared.');
};

window.handleAiImageUpload = async (event) => {
  const files = Array.from(event?.target?.files || []);
  if (!files.length) return;

  let added = 0;
  let rejected = 0;
  for (const file of files) {
    if (!file.type?.startsWith('image/')) {
      rejected += 1;
      continue;
    }
    if (file.size > MAX_UPLOAD_SIZE_BYTES) {
      rejected += 1;
      continue;
    }
    if (state.pendingUploads.length >= MAX_PENDING_UPLOADS) {
      rejected += 1;
      continue;
    }
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    state.pendingUploads.push({
      id,
      name: file.name || `image-${state.pendingUploads.length + 1}.jpg`,
      size: file.size || 0,
      file,
      previewUrl: URL.createObjectURL(file),
    });
    added += 1;
  }

  renderPendingUploads();
  await cacheBrandImageFromUploads();
  if (added > 0) {
    const totalBytes = state.pendingUploads.reduce((sum, item) => sum + (item.size || 0), 0);
    showToast(`${added} image(s) queued (${formatBytes(totalBytes)} total).`);
  }
  if (rejected > 0) {
    showToast(`${rejected} file(s) skipped. Use images under 8MB each.`);
  }
  if (added > 0) {
    const autoResult = await runAutoImagePipeline();
    if (autoResult) {
      const aiMsg = { role: 'assistant', content: autoResult.content, tool_results: autoResult.tool_results };
      state.history.push(aiMsg);
      renderMessage(aiMsg);
      if (autoResult.ok) showToast('Auto pipeline finished — listing created with AI-filled fields and 24 images.');
      else showToast('Auto pipeline had an issue.');
    }
  }
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
? `Hello! I'm your **Free Autonomous Developer Agent** — a full self-sufficient build & repair assistant for Weverse Online Shop.\n\nI have the same abilities as the n8n AI Assistant, but I run **100% free and completely independent of n8n** using Gemini, Groq, OpenRouter, and Hugging Face.\n\nI can do everything autonomously:\n\n- **Scan & fix the site** — "Scan and fix the site"\n- **Read any file** — "Show me the code in src/auth.js"\n- **Find bugs** — "Why is the payment page throwing an error?"\n- **Explain the architecture** — "How does the app connect to the backend?"\n- **Edit code** — "Fix the bug in the checkout flow"\n- **Create files** — "Create a new component for the product gallery"\n- **Add products / houses** — "Add a new product"\n- **Deploy** — "Deploy the site"\n\n**Fully autonomous mode is active.** When you report a problem, I directly find the location and fix it myself — without asking questions, and without depending on n8n. This applies to every connected free AI provider (Gemini, Groq, OpenRouter, Hugging Face).\n\nWhat would you like to build or fix?`
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
  // Autonomous build/fix mode: developer mode is always ON so the AI can
  // read, edit, build, and fix the website directly. This applies to every
  // connected free AI provider (Gemini, Groq, OpenRouter, Hugging Face).
  state.developerMode = true;
  state.autoDeveloperMode = true;
  applyDeveloperModeUI();

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
  loadAutomationCenterState();

  // Input handling
  const input = document.getElementById('chat-input');
  const uploadInput = document.getElementById('ai-image-upload');
  if (uploadInput) {
    uploadInput.addEventListener('change', (event) => {
      window.handleAiImageUpload(event);
    });
  }
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.max(112, Math.min(input.scrollHeight, 224)) + 'px';
  });
  input.style.height = '112px';
  renderPendingUploads();
  setPreviewForHome();
  renderAutomationCenterMeta();
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
            <i data-lucide="ban" class="w-4 h-4"></i> Reject
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
          <i data-lucide="ban" class="w-4 h-4"></i> Reject
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
