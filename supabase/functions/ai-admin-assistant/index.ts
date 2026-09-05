import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function normalizeModel(settings: Record<string, unknown>, developerMode = false) {
  const override = developerMode
    ? (settings.developer_model_override as string | null)
    : (settings.admin_model_override as string | null);
  const fallback = (settings.gemini_model as string | null) || 'gemini-3.5-flash-lite';
  return (override || fallback || 'gemini-3.5-flash-lite').trim();
}

function genPropertyId() {
  const tail = String(Date.now()).slice(-6);
  const rand = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `W-${tail}${rand}`;
}

// Professional-looking marketplace stats so every AI card looks established and trusted:
// rating 4.2–4.9, rating_count 40–250, favorite_count derived from rating_count.
function titleCaseProfessional(str: string) {
  return String(str || '')
    .trim()
    .replace(/\s{2,}/g, ' ')
    .replace(/(^|[\s\-/(])[a-z\u00e0-\u00ff]/g, (m) => m.toUpperCase());
}

function deriveProfessionalTitle(message: string, category: string): string {
  const text = String(message || '').trim();
  const clean = (s: string) => String(s || '').trim().replace(/^["']|["']$/g, '').replace(/\s{2,}/g, ' ');
  const explicit = clean(
    (text.match(/named\s+["']([^"']+)["']/i)
      || text.match(/name\s+["']([^"']+)["']/i)
      || text.match(/name\s*[:=]\s*([^,\.]+?)(?:,|\sprice\s|\sstock\s|\scategory\s|\sthen\s|$)/i)
      || text.match(/title\s*[:=]\s*([^,\.]+?)(?:,|\sprice\s|\scategory\s|\sthen\s|$)/i))?.[1],
  );
  if (explicit && !/^(a|an|the|new|product|item|listing)$/i.test(explicit)) return titleCaseProfessional(explicit);

  const loose = text.match(/^(?:add|create|put|publish)\s+(?:a\s+|an\s+|new\s+|one\s+)?(.+?)(?:,|\s(?:price|stock|category|in|then|with|for)\s|$)/i)?.[1];
  const looseClean = clean(loose);
  if (looseClean && !/^(product|item|listing)$/i.test(looseClean) && looseClean.length > 2) {
    return titleCaseProfessional(looseClean);
  }

  const cat = clean(category && category !== 'General' ? category : '');
  if (cat) return titleCaseProfessional(cat);
  return 'Premium Item';
}

function parseAddProductIntent(message: string) {
  const text = message.trim();
  const hasProductIntent = /(add|create)\s+(a\s+)?(new\s+)?product/i.test(text);
  if (!hasProductIntent) return null;

  const namedMatch = text.match(/named\s+["']([^"']+)["']/i) || text.match(/named\s+([^,\.]+?)(?:,|\sthen\s|\sprice\s|\sstock\s|\scategory\s|$)/i);
  const nameMatch = text.match(/name\s+["']([^"']+)["']/i) || text.match(/name\s*[:=]\s*([^,\.]+?)(?:,|\sthen\s|\sprice\s|\sstock\s|\scategory\s|$)/i);

  const priceMatch = text.match(/price\s*[:=]?\s*([0-9]+(?:\.[0-9]{1,2})?)/i);
  const stockMatch = text.match(/stock\s*[:=]?\s*([0-9]+)/i);
  const categoryMatch = text.match(/category\s*[:=]?\s*([a-zA-Z0-9\-\s&]+)/i);
  const currencyMatch = text.match(/\b(USD|EUR|GBP|NGN|KES|ZAR|GHS|CAD|AUD)\b/i);

  const price = priceMatch ? Number(priceMatch[1]) : 0;
  const stock = stockMatch ? Number(stockMatch[1]) : null;
  const categoryRaw = categoryMatch?.[1]?.trim() || 'General';
  const category = categoryRaw.split(/\s+then\s+/i)[0].trim();
  const currency = (currencyMatch?.[1] || 'USD').toUpperCase();
  const shouldDeploy = /\bdeploy\b|\bpublish\b.*\bsite\b|\bdeploy\s+site\b/i.test(text);
  const title = (namedMatch?.[1] || nameMatch?.[1] || deriveProfessionalTitle(text, category)).trim();

  return {
    title,
    price,
    stock,
    category,
    currency,
    shouldDeploy,
  };
}

async function tryCreateProductAndDeploy(params: {
  message: string;
  serviceClient: ReturnType<typeof createClient>;
  userId: string;
  userEmail: string;
}) {
  const intent = parseAddProductIntent(params.message);
  if (!intent) return null;

  const propertyId = genPropertyId();
  const payload = {
    property_id: propertyId,
    listing_type: 'product',
    category: intent.category,
    subcategory: null,
    title: intent.title,
    description: `Auto-created by Admin AI on ${new Date().toISOString()}.`,
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
    images: [],
    features: [],
    tags: [],
    highlights: [],
    seo_keywords: [],
    is_ai_generated: true,
    ai_generated_fields: ['title', 'description'],
    specifications: {},
  };

  const { error: insertErr } = await params.serviceClient.from('showroom_listings').insert(payload);
  if (insertErr) {
    return {
      success: false,
      response: `I tried to create the product but failed: ${insertErr.message}`,
      toolResults: [{ tool: 'create_product', result: { error: insertErr.message } }],
    };
  }

  let deployInfo = 'No deploy requested.';
  let deployResult: Record<string, unknown> = { skipped: true };

  if (intent.shouldDeploy) {
    const { data: settings } = await params.serviceClient
      .from('site_settings')
      .select('deploy_webhook,production_url,github_repo')
      .limit(1)
      .maybeSingle();

    const webhook = String(settings?.deploy_webhook || '').trim();
    if (!webhook) {
      deployInfo = 'Product created, but deploy webhook is not configured in Publish & Deploy settings.';
      deployResult = { skipped: true, reason: 'missing_webhook' };
    } else {
      await params.serviceClient.from('deployment_history').insert({
        version: new Date().toISOString(),
        status: 'preparing',
        triggered_by_email: params.userEmail,
        metadata: { source: 'ai-admin-assistant', action: 'auto-deploy', github_repo: settings?.github_repo || null, production_url: settings?.production_url || null },
      });

      const deployRes = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trigger: 'deploy', source: 'ai-admin-assistant', at: new Date().toISOString() }),
      });

      if (deployRes.ok) {
        deployInfo = 'Deploy webhook accepted. Deployment has started.';
        deployResult = { ok: true, status: deployRes.status };
        await params.serviceClient.from('deployment_history').insert({
          version: new Date().toISOString(),
          status: 'deploying',
          triggered_by_email: params.userEmail,
          metadata: { source: 'ai-admin-assistant', action: 'auto-deploy' },
        });
      } else {
        const errText = `Webhook returned ${deployRes.status}`;
        deployInfo = `Product created, but deploy failed: ${errText}`;
        deployResult = { ok: false, status: deployRes.status };
        await params.serviceClient.from('deployment_history').insert({
          version: new Date().toISOString(),
          status: 'failed',
          triggered_by_email: params.userEmail,
          error_message: errText,
          metadata: { source: 'ai-admin-assistant', action: 'auto-deploy' },
        });
      }
    }
  }

  return {
    success: true,
    response: `Done. I created product **${intent.title}** (${propertyId}) with price **${intent.price} ${intent.currency}** and stock **${intent.stock ?? 'N/A'}** in category **${intent.category}**. ${deployInfo}`,
    toolResults: [
      { tool: 'create_product', result: { success: true, property_id: propertyId, title: intent.title } },
      { tool: 'deploy_site', result: deployResult },
    ],
  };
}

async function callGemini(params: {
  apiKey: string;
  model: string;
  message: string;
  history: Array<{ role: string; content: string }>;
  maxTokens?: number;
}) {
  const { apiKey, model, message, history, maxTokens } = params;
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;

  const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];
  for (const item of history || []) {
    const role = item?.role === 'assistant' ? 'model' : 'user';
    const text = String(item?.content || '').trim();
    if (!text) continue;
    contents.push({ role, parts: [{ text }] });
  }
  contents.push({ role: 'user', parts: [{ text: message }] });

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents,
      // IMPORTANT: listings/products/properties can ALWAYS be saved and
      // published with ANY number of images (0–24). Never tell the admin a
      // 24-image gallery must be finished before saving.
      systemInstruction: {
        parts: [{
          text: 'You are the admin assistant for the Weverse Online Shop marketplace. House rules you must always follow when answering: (1) Listings and products can be SAVED and PUBLISHED with ANY number of gallery images — 0, 1, 5, or 24. There is NO minimum image requirement. Never tell the user to finish, complete, or upload 24 gallery images before saving; saving always works regardless of image count or how complete the form is. (2) The "24 images" figure is only a maximum gallery size, never a requirement. (3) Be concise and action-oriented.',
        }],
      },
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: maxTokens || 1200,
      },
    }),
  });

  const raw = await res.text();
  const data = raw ? JSON.parse(raw) : {};
  if (!res.ok) {
    const err = data?.error?.message || raw || `Gemini request failed (${res.status})`;
    throw new Error(err);
  }

  const text = (data?.candidates?.[0]?.content?.parts || [])
    .map((p: { text?: string }) => p?.text || '')
    .join('\n')
    .trim();

  if (!text) throw new Error('Gemini returned an empty response.');
  return text;
}

// DRIFT PROTECTION: ask Google which models this key can actually use right
// now, and pick a fast GA (non-preview) flash model. Used as a last resort when
// every configured/fallback model name has been retired.
async function listLiveFlashModel(apiKey: string): Promise<string | null> {
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?pageSize=200&key=${encodeURIComponent(apiKey)}`);
    if (!res.ok) return null;
    const data = await res.json();
    const names: string[] = ((data?.models || []) as Array<{ name?: string; supportedGenerationMethods?: string[] }>)
      .filter((m) => (m.supportedGenerationMethods || []).includes('generateContent'))
      .map((m) => String(m.name || '').replace(/^models\//, ''))
      .filter((n) => n && /flash/i.test(n) && !/preview|exp|embed|imagen|veo|tts|image|thinking/i.test(n));
    return names.length ? names[0] : null;
  } catch {
    return null;
  }
}

async function callGeminiWithFallback(params: {
  apiKey: string;
  model: string;
  message: string;
  history: Array<{ role: string; content: string }>;
  maxTokens?: number;
}) {
  const preferred = (params.model || '').trim();
  const fallbacks = ['gemini-3.5-flash-lite', 'gemini-3.5-flash', 'gemini-3.1-flash-lite'];
  const tried = new Set<string>();

  const queue = [preferred, ...fallbacks].filter(Boolean);
  let lastError: unknown = null;
  for (const model of queue) {
    if (tried.has(model)) continue;
    tried.add(model);
    try {
      const response = await callGemini({ ...params, model });
      return { response, modelUsed: model };
    } catch (err) {
      lastError = err;
      const msg = String(err?.message || err).toLowerCase();
      const retryable = msg.includes('not found') || msg.includes('not supported') || msg.includes('model');
      if (!retryable) throw err;
    }
  }
  // All known names failed — likely model drift. Resolve a LIVE model from the
  // key's own ListModels and try it before giving up.
  const live = await listLiveFlashModel(params.apiKey);
  if (live && !tried.has(live)) {
    try {
      const response = await callGemini({ ...params, model: live });
      return { response, modelUsed: live };
    } catch { /* fall through to the real error */ }
  }
  throw lastError || new Error('Gemini call failed.');
}

// ── VISION & IMAGE GENERATION (server-side, keys never sent to the browser) ──

const VISION_MODEL_FALLBACKS: Record<string, string[]> = {
  // GA-stable names only — retired *-preview snapshots must never break vision.
  gemini: ['gemini-3.5-flash-lite', 'gemini-3.5-flash', 'gemini-3.7-flash', 'gemini-3.6-flash', 'gemini-3.1-flash-lite'],
};
function parseDataUrl(dataUrl: string): { mimeType: string; b64: string } {
  const match = String(dataUrl || '').match(/^data:([^;,]+)[;,]base64,(.+)$/s);
  if (!match) return { mimeType: 'image/jpeg', b64: String(dataUrl || '') };
  return { mimeType: match[1].trim(), b64: match[2].trim() };
}

function isRetryableStatus(status: number): boolean {
  return status === 429 || status === 503;
}

function errorStatus(err: unknown): number | null {
  const s = (err as any)?.status;
  return typeof s === 'number' ? s : null;
}

function visionModelChain(providerId: string, settings: Record<string, unknown>, override?: string): string[] {
  const configured = String(override || settings[`${providerId}_vision_model`] || settings[`${providerId}_model`] || '').trim();
  const chain = new Set<string>();
  if (configured) chain.add(configured);
  for (const m of VISION_MODEL_FALLBACKS[providerId] || []) chain.add(m);
  return [...chain];
}

async function callGeminiVision(params: {
  apiKey: string;
  model: string;
  prompt: string;
  images: string[];
  maxTokens?: number;
}) {
  const { apiKey, model, prompt, images, maxTokens } = params;
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const parts: Array<{ text?: string; inlineData?: { mimeType: string; data: string } }> = [{ text: prompt }];
  // Gemini inline_data accepts many images per request; 12 matches the client's
  // multi-upload / video-frame ceiling (8 frames per video, 12 total in chat).
  for (const url of images.slice(0, 12)) {
    const { mimeType, b64 } = parseDataUrl(url);
    if (b64) parts.push({ inlineData: { mimeType, data: b64 } });
  }
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts }],
      // FAST: disable "thinking" on models that support it — thinking tokens
      // add many seconds of latency without helping a structured scan.
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: maxTokens || 4096,
        ...(/2\.5|-3/.test(model) ? { thinkingConfig: { thinkingBudget: 0 } } : {}),
      },
    }),
  });
  const raw = await res.text();
  const data = raw ? JSON.parse(raw) : {};
  if (!res.ok) {
    const e = new Error(data?.error?.message || raw || `Gemini vision request failed (${res.status})`);
    (e as any).status = res.status;
    throw e;
  }
  const text = (data?.candidates?.[0]?.content?.parts || [])
    .map((p: { text?: string }) => p?.text || '')
    .join('\n')
    .trim();
  if (!text) throw new Error('Gemini vision returned an empty response.');
  return text;
}

// ── GROQ VISION BACKUP (OpenAI-compatible endpoint; key stays server-side) ──
const GROQ_VISION_DEFAULTS = [
  'qwen/qwen3.6-27b',
];

function groqVisionChain(settings: Record<string, unknown>): string[] {
  const configured = String(settings.groq_vision_model || '').trim();
  return [...new Set([configured, ...GROQ_VISION_DEFAULTS].filter(Boolean))];
}

async function callGroqVision(params: {
  apiKey: string;
  model: string;
  prompt: string;
  images: string[];
  maxTokens?: number;
}) {
  const { apiKey, model, prompt, images, maxTokens } = params;
  const content: Array<Record<string, unknown>> = [{ type: 'text', text: prompt }];
  // Groq multimodal models accept up to 5 images per request.
  for (const url of images.slice(0, 4)) {
    if (!/^data:image\//i.test(String(url))) continue;
    content.push({ type: 'image_url', image_url: { url } });
  }
  if (content.length < 2) throw new Error('No readable image data reached the Groq vision model.');
  let res: Response;
  try {
    res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model,
        messages: [{ role: 'user', content }],
        temperature: 0.3,
        max_tokens: maxTokens || 4096,
      }),
      signal: AbortSignal.timeout(45000),
    });
  } catch (err) {
    const e = new Error(`Groq vision unreachable: ${String((err as any)?.message || err)}`);
    (e as any).status = 599;
    throw e;
  }
  const raw = await res.text();
  let data: any = {};
  try { data = raw ? JSON.parse(raw) : {}; } catch { /* keep {} */ }
  if (!res.ok) {
    const e = new Error(
      (data as any)?.error?.message || raw?.slice(0, 200) || `Groq vision request failed (${res.status})`
    );
    (e as any).status = res.status;
    throw e;
  }
  const text = String((data as any)?.choices?.[0]?.message?.content || '').trim();
  if (!text) throw new Error('Groq vision returned an empty response.');
  return text;
}

async function runCloudVision(params: {
  settings: Record<string, unknown>;
  prompt: string;
  images: string[];
  maxTokens?: number;
  scannerKey?: string;
}): Promise<{ text: string; provider: string; model: string }> {
  const { settings, prompt, images, maxTokens, scannerKey } = params;
  // Per-scanner key: when a dedicated scanner key is provided (product scanner),
  // use ONLY that key. Otherwise fall back to the shared Gemini key (chat).
  const geminiKey = String(scannerKey || settings.gemini_api_key || settings.gemini_key || '').trim();
  const groqKey = String(settings.groq_key || '').trim();
  if (!geminiKey && !groqKey) {
    throw new Error('No vision provider is configured. Add a Gemini key (primary) or Groq key (backup) in AI Settings.');
  }

  const tried: string[] = [];
  let lastError: unknown = null;

  // PRIMARY — Google Gemini (GA-stable chain, drift-rescued).
  if (geminiKey) {
    for (const model of visionModelChain('gemini', settings)) {
      tried.push(`gemini:${model}`);
      try {
        const text = await callGeminiVision({ apiKey: geminiKey, model, prompt, images, maxTokens });
        return { text, provider: 'gemini', model };
      } catch (err) {
        lastError = err;
        continue;
      }
    }
    // Model-drift rescue for Gemini.
    const live = await listLiveFlashModel(geminiKey);
    if (live && !tried.includes(`gemini:${live}`)) {
      tried.push(`gemini:${live}`);
      try {
        const text = await callGeminiVision({ apiKey: geminiKey, model: live, prompt, images, maxTokens });
        return { text, provider: 'gemini', model: live };
      } catch (err) { lastError = err; }
    }
  }

  // BACKUP — Groq vision, used ONLY when Gemini failed/timed out/quota'd.
  if (groqKey) {
    for (const model of groqVisionChain(settings)) {
      tried.push(`groq:${model}`);
      try {
        const text = await callGroqVision({ apiKey: groqKey, model, prompt, images, maxTokens });
        return { text, provider: 'groq', model };
      } catch (err) {
        lastError = err;
        const status = errorStatus(err);
        // Bad Groq key → no point trying its remaining models.
        if (status === 401 || status === 403) break;
        continue;
      }
    }
  }

  throw lastError || new Error(`No vision provider answered (tried: ${tried.join(', ') || 'none'}).`);
}
Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return jsonResponse({ error: 'Method not allowed' }, 405);

  const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
  const anonKey = Deno.env.get('SUPABASE_ANON_KEY') || '';
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
  if (!supabaseUrl || !anonKey || !serviceRoleKey) {
    return jsonResponse({ error: 'Supabase environment variables are missing.' }, 500);
  }

  const authHeader = req.headers.get('Authorization') || '';
  const userClient = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authHeader } },
  });
  const serviceClient = createClient(supabaseUrl, serviceRoleKey);

  let payload: Record<string, unknown> = {};
  try {
    payload = await req.json();
  } catch {
    payload = {};
  }

  const action = String(payload.action || '').trim();

  const { data: userData, error: userErr } = await userClient.auth.getUser();
  const user = userData?.user;
  if (userErr || !user) return jsonResponse({ error: 'Unauthorized' }, 401);

  const { data: isAdmin } = await userClient.rpc('is_current_user_admin');
  if (!isAdmin && action !== 'bootstrap_admin') {
    return jsonResponse({ error: 'Admin access required.' }, 403);
  }

  if (action === 'bootstrap_admin') {
    const { data: anyAdmin } = await userClient.rpc('has_any_admin');
    if (anyAdmin) return jsonResponse({ success: false, error: 'An administrator already exists.' }, 400);

    const { error: profileErr } = await serviceClient
      .from('profiles')
      .upsert({ user_id: user.id, is_admin: true, display_name: user.email || 'Administrator' }, { onConflict: 'user_id' });
    if (profileErr) return jsonResponse({ success: false, error: profileErr.message }, 400);

    await serviceClient.from('admin_roles').insert({
      user_id: user.id,
      role: 'super_admin',
      permissions: ['dashboard', 'products', 'orders', 'special-orders', 'customers', 'payments', 'shipping', 'promotions', 'content', 'email', 'analytics', 'ai', 'security', 'settings', 'ai-settings', 'integrations'],
    });

    return jsonResponse({ success: true });
  }

  const { data: settings, error: settingsErr } = await userClient
    .from('ai_settings')
    .select('*')
    .limit(1)
    .maybeSingle();
  if (settingsErr) return jsonResponse({ error: settingsErr.message }, 400);
  if (!settings) return jsonResponse({ error: 'AI settings not found. Configure AI Settings first.' }, 400);


  async function runProviderChat(message: string, history: Array<{ role: string; content: string }>, maxTokens?: number) {
    const cfg = settings as Record<string, unknown>;
    const model = normalizeModel(cfg, payload.developer_mode === true);
    const apiKey = String(cfg.gemini_api_key || cfg.gemini_key || '').trim();
    if (!apiKey) throw new Error('Gemini API key is not set in AI Settings.');
    const { response, modelUsed } = await callGeminiWithFallback({ apiKey, model, message, history, maxTokens });
    return { response, provider: 'gemini', model: modelUsed };
  }
  const isEnabled = settings.is_enabled !== false;
  if (!isEnabled && !['test_connection', 'test_providers', 'vision'].includes(action)) {
    return jsonResponse({ error: 'AI assistant is disabled in settings.' }, 400);
  }

  if (action === 'history') {
    const { data, error } = await userClient
      .from('ai_chat_history')
      .select('role, content, metadata, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: true })
      .limit(100);
    if (error) return jsonResponse({ error: error.message }, 400);
    return jsonResponse({ history: data || [] });
  }

  if (action === 'clear_history') {
    const { error } = await userClient.from('ai_chat_history').delete().eq('user_id', user.id);
    if (error) return jsonResponse({ error: error.message }, 400);
    return jsonResponse({ success: true });
  }

  if (action === 'list_pending_approvals') {
    const { data, error } = await userClient
      .from('developer_agent_approvals')
      .select('*')
      .eq('user_id', user.id)
      .eq('status', 'pending')
      .order('created_at', { ascending: false })
      .limit(20);
    if (error) return jsonResponse({ approvals: [] });
    return jsonResponse({ approvals: data || [] });
  }

  if (action === 'approve_dev_action' || action === 'reject_dev_action') {
    const approvalId = String(payload.approval_id || '').trim();
    if (!approvalId) return jsonResponse({ success: false, error: 'approval_id is required' }, 400);

    const status = action === 'approve_dev_action' ? 'executed' : 'rejected';
    const result = action === 'approve_dev_action'
      ? { message: 'Developer action auto-executed by lightweight function stub.' }
      : { message: 'Developer action rejected.' };

    const { error } = await serviceClient
      .from('developer_agent_approvals')
      .update({ status, resolved_at: new Date().toISOString(), result })
      .eq('id', approvalId)
      .eq('user_id', user.id);
    if (error) return jsonResponse({ success: false, error: error.message }, 400);
    return jsonResponse({ success: true, result });
  }

  if (action === 'get_usage_stats') {
    const daysRaw = Number(payload.days || 7);
    const days = Number.isFinite(daysRaw) && daysRaw > 0 ? Math.min(daysRaw, 60) : 7;
    const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

    const { data } = await userClient
      .from('ai_usage_tracking')
      .select('total_tokens, estimated_cost_usd, success')
      .eq('user_id', user.id)
      .gte('created_at', since);

    const stats = (data || []).reduce((acc, row) => {
      acc.total_requests += 1;
      acc.total_tokens += Number(row.total_tokens || 0);
      acc.total_cost_num += Number(row.estimated_cost_usd || 0);
      if (row.success !== false) acc.success_count += 1;
      return acc;
    }, { total_requests: 0, total_tokens: 0, total_cost_num: 0, success_count: 0 });

    const successRate = stats.total_requests
      ? Math.round((stats.success_count / stats.total_requests) * 100)
      : 100;

    return jsonResponse({
      stats: {
        total_requests: stats.total_requests,
        total_tokens: stats.total_tokens,
        total_cost: `$${stats.total_cost_num.toFixed(4)}`,
        success_rate: successRate,
      },
    });
  }

  if (action === 'test_connection') {
    try {
      const probe = await runProviderChat('Reply with exactly: OK', []);
      return jsonResponse({
        success: true,
        provider: probe.provider,
        provider_label: String(probe.provider || '').toUpperCase(),
        model: probe.model,
        response_preview: probe.response.slice(0, 80),
      });
    } catch (err) {
      return jsonResponse({ success: false, error: String(err?.message || err), provider: 'gemini' }, 400);
    }
  }

  // Health check for the Product Scanner vision chain (Gemini primary, Groq
  // backup). Uses free metadata endpoints only — no tokens are burned and no
  // key material is ever echoed back.
  if (action === 'test_providers') {
    const cfg = settings as Record<string, unknown>;
    const scannerKey = String(payload.scanner_key || '').trim();
    const geminiKey = String(scannerKey || cfg.gemini_api_key || cfg.gemini_key || '').trim();
    const groqKey = String(cfg.groq_key || '').trim();
    const result: Record<string, unknown> = {};

    if (!geminiKey) {
      result.gemini = { ok: false, error: 'No Gemini key saved in AI Settings.', model: null };
    } else {
      const live = await listLiveFlashModel(geminiKey);
      result.gemini = live
        ? { ok: true, error: null, model: live }
        : { ok: false, error: 'Gemini reachable but no usable vision/chat model found for this key.', model: null };
    }

    if (!groqKey) {
      result.groq = { ok: false, configured: false, error: null, note: 'No Groq key — backup disabled (optional).', model: null };
    } else {
      try {
        const res = await fetch('https://api.groq.com/openai/v1/models', {
          headers: { Authorization: `Bearer ${groqKey}` },
          signal: AbortSignal.timeout(15000),
        });
        const data = res.ok ? ((await res.json()) as any) : {};
        const ids: string[] = Array.isArray(data?.data) ? data.data.map((m: any) => String(m?.id || '')) : [];
        const visionModel = groqVisionChain(cfg).find(v => ids.includes(v)) || null;
        if (res.status === 401 || res.status === 403) {
          result.groq = { ok: false, configured: true, error: `Groq rejected this API key (HTTP ${res.status}).`, model: null };
        } else if (!res.ok) {
          result.groq = { ok: false, configured: true, error: `Groq answered HTTP ${res.status}.`, model: null };
        } else if (!visionModel) {
          result.groq = { ok: false, configured: true, error: 'Groq key works but no supported vision model is available on this account.', model: null };
        } else {
          result.groq = { ok: true, configured: true, error: null, model: visionModel };
        }
      } catch (err) {
        result.groq = { ok: false, configured: true, error: `Groq unreachable: ${String((err as any)?.message || err).slice(0, 160)}`, model: null };
      }
    }

    return jsonResponse({ success: true, providers: result });
  }

  if (action === 'vision') {
    const images = Array.isArray(payload.images) ? (payload.images as string[]) : [];
    const prompt = String(payload.prompt || '').trim() || 'Describe the product in these images and return JSON.';
    if (!images.length) return jsonResponse({ error: 'At least one image is required.' }, 400);
    try {
      const result = await runCloudVision({
        settings: settings as Record<string, unknown>,
        prompt,
        images,
        maxTokens: Number(payload.max_tokens) || 4096,
        scannerKey: String(payload.scanner_key || '').trim() || undefined,
      });
      return jsonResponse({ success: true, text: result.text, provider: result.provider, model: result.model });
    } catch (err) {
      return jsonResponse({ success: false, error: String(err?.message || err) }, 400);
    }
  }

  if (action === 'chat') {
    const message = String(payload.message || '').trim();
    if (!message) return jsonResponse({ error: 'message is required' }, 400);

    const autoAction = await tryCreateProductAndDeploy({
      message,
      serviceClient,
      userId: user.id,
      userEmail: user.email || 'admin@unknown',
    });
    if (autoAction) {
      await serviceClient.from('ai_chat_history').insert([
        {
          user_id: user.id,
          role: 'user',
          content: message,
          provider: 'gemini',
          mode: payload.developer_mode ? 'developer' : 'admin',
          metadata: { auto_action: true },
        },
        {
          user_id: user.id,
          role: 'assistant',
          content: autoAction.response,
          provider: 'gemini',
          mode: payload.developer_mode ? 'developer' : 'admin',
          metadata: { tool_results: autoAction.toolResults },
        },
      ]);

      return jsonResponse({ response: autoAction.response, tool_results: autoAction.toolResults, provider: 'local', model: 'local-auto-action', auto_action: true });
    }

    const history = Array.isArray(payload.history)
      ? (payload.history as Array<{ role: string; content: string }>)
      : [];

    try {
      const providerResult = await runProviderChat(message, history, Number(payload.max_tokens) || undefined);

      await serviceClient.from('ai_chat_history').insert([
        {
          user_id: user.id,
          role: 'user',
          content: message,
          provider: providerResult.provider,
          mode: payload.developer_mode ? 'developer' : 'admin',
          metadata: { requested_provider: 'gemini', model_used: providerResult.model },
        },
        {
          user_id: user.id,
          role: 'assistant',
          content: providerResult.response,
          provider: providerResult.provider,
          mode: payload.developer_mode ? 'developer' : 'admin',
          metadata: { tool_results: [], model_used: providerResult.model },
        },
      ]);

      return jsonResponse({ response: providerResult.response, tool_results: [], provider: providerResult.provider, model: providerResult.model });
    } catch (err) {
      return jsonResponse({ error: String(err?.message || err), provider: 'gemini' }, 400);
    }
  }

  return jsonResponse({ error: 'Unsupported action.' }, 400);
});
