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

function pickTextFromUnknownResponse(data: any): string {
  if (!data) return '';
  if (typeof data === 'string') return data.trim();
  const candidates = [
    data.response,
    data.text,
    data.answer,
    data.output,
    data.message,
    data.result,
    data.data?.text,
    data.data?.response,
    data.outputs?.[0]?.outputs?.[0]?.results?.message?.text,
  ];
  for (const value of candidates) {
    if (typeof value === 'string' && value.trim()) return value.trim();
  }
  return '';
}

function normalizeModel(settings: Record<string, unknown>, developerMode = false) {
  const override = developerMode
    ? (settings.developer_model_override as string | null)
    : (settings.admin_model_override as string | null);
  const fallback = (settings.gemini_model as string | null) || 'gemini-2.5-flash';
  return (override || fallback || 'gemini-2.5-flash').trim();
}

function genPropertyId() {
  const tail = String(Date.now()).slice(-6);
  const rand = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `KCO-${tail}${rand}`;
}

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
}) {
  const { apiKey, model, message, history } = params;
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
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 1200,
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

async function callGeminiWithFallback(params: {
  apiKey: string;
  model: string;
  message: string;
  history: Array<{ role: string; content: string }>;
}) {
  const preferred = (params.model || '').trim();
  const fallbacks = ['gemini-2.5-flash', 'gemini-2.0-flash'];
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
  throw lastError || new Error('Gemini call failed.');
}

async function callOpenAICompatible(params: {
  endpoint: string;
  apiKey: string;
  model: string;
  message: string;
  history: Array<{ role: string; content: string }>;
  extraHeaders?: Record<string, string>;
}) {
  const { endpoint, apiKey, model, message, history, extraHeaders } = params;
  const messages = [
    ...(history || []).map((item) => ({
      role: item?.role === 'assistant' ? 'assistant' : 'user',
      content: String(item?.content || ''),
    })).filter((item) => item.content.trim()),
    { role: 'user', content: message },
  ];

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      ...(extraHeaders || {}),
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.3,
      max_tokens: 1200,
    }),
  });

  const raw = await res.text();
  const data = raw ? JSON.parse(raw) : {};
  if (!res.ok) {
    const err = data?.error?.message || raw || `Provider request failed (${res.status})`;
    throw new Error(err);
  }

  const text = String(data?.choices?.[0]?.message?.content || '').trim();
  if (!text) throw new Error('Provider returned an empty response.');
  return text;
}

async function callN8nWebhook(params: {
  endpoint: string;
  token?: string;
  message: string;
  history: Array<{ role: string; content: string }>;
  userId: string;
  mode: 'admin' | 'developer';
}) {
  const { endpoint, token, message, history, userId, mode } = params;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { 'X-Webhook-Token': token } : {}),
    },
    body: JSON.stringify({ message, history, user_id: userId, mode }),
  });

  const raw = await res.text();
  const data = raw ? JSON.parse(raw) : {};
  if (!res.ok) {
    throw new Error(data?.error || `n8n webhook failed (${res.status})`);
  }

  const text = pickTextFromUnknownResponse(data);
  if (!text) throw new Error('n8n webhook returned an empty response.');
  return text;
}

const AUTOMATION_ASSISTANTS = [
  'ai_repair_assistant',
  'product_ai',
  'writer_ai',
  'image_ai',
  'showroom_ai',
  'seo_ai',
  'customer_support_ai',
  'website_builder_ai',
] as const;

type AutomationAssistant = (typeof AUTOMATION_ASSISTANTS)[number];

const DEFAULT_REPAIR_PROVIDER = 'openrouter';
const DEFAULT_REPAIR_MODEL = 'google/gemini-2.0-flash-exp:free';

function getRepairAssistantConfig(settings: Record<string, unknown>) {
  const provider = String(settings.repair_ai_provider || DEFAULT_REPAIR_PROVIDER).trim().toLowerCase();
  const model = String(settings.repair_ai_model || DEFAULT_REPAIR_MODEL).trim() || DEFAULT_REPAIR_MODEL;
  const apiKey = String(settings.repair_ai_api_key || settings.openrouter_key || '').trim();
  const autoApplySafeFixes = settings.repair_auto_apply_safe_fixes === true;
  const scanIntervalMinutesRaw = Number(settings.repair_scan_interval_minutes || 15);
  const scanIntervalMinutes = Number.isFinite(scanIntervalMinutesRaw)
    ? Math.max(1, Math.min(1440, Math.round(scanIntervalMinutesRaw)))
    : 15;
  return {
    provider,
    model,
    apiKey,
    autoApplySafeFixes,
    scanIntervalMinutes,
  };
}

function getRepairChecklist() {
  return {
    website_runtime: [
      'broken_pages',
      'broken_buttons',
      'broken_links',
      'broken_images',
      'broken_forms',
      'frontend_js_errors',
      'ts_build_errors',
      'react_runtime_errors',
      'next_node_runtime_errors',
      'css_html_regressions',
    ],
    backend_and_data: [
      'api_health_checks',
      'database_connectivity',
      'database_schema_mismatches',
      'showroom_integrity',
      'product_integrity',
      'category_integrity',
      'price_integrity',
      'inventory_integrity',
    ],
    pre_release_quality: [
      'smoke_test_new_feature',
      'critical_flow_regression',
      'safe_autofix_candidate_detection',
    ],
  };
}

function parseAssistantToggles(settings: Record<string, unknown>) {
  const raw = settings.n8n_assistant_enabled;
  const defaults = Object.fromEntries(AUTOMATION_ASSISTANTS.map((name) => [name, true])) as Record<AutomationAssistant, boolean>;
  if (!raw || typeof raw !== 'object') return defaults;
  for (const key of AUTOMATION_ASSISTANTS) {
    const value = (raw as Record<string, unknown>)[key];
    if (typeof value === 'boolean') defaults[key] = value;
  }
  return defaults;
}

function parseAssistantHooks(settings: Record<string, unknown>) {
  const raw = settings.n8n_assistant_webhooks;
  const hooks: Record<string, string> = {};
  if (!raw || typeof raw !== 'object') return hooks;
  for (const key of AUTOMATION_ASSISTANTS) {
    const value = (raw as Record<string, unknown>)[key];
    if (typeof value === 'string' && value.trim()) hooks[key] = value.trim();
  }
  return hooks;
}

async function callN8nAssistant(params: {
  settings: Record<string, unknown>;
  assistant: AutomationAssistant;
  message: string;
  history: Array<{ role: string; content: string }>;
  userId: string;
  mode: 'admin' | 'developer';
  metadata?: Record<string, unknown>;
}) {
  const { settings, assistant, message, history, userId, mode, metadata } = params;
  const baseWebhook = String(settings.n8n_webhook_url || '').trim();
  const token = String(settings.n8n_webhook_token || '').trim();
  const repairConfig = getRepairAssistantConfig(settings);

  if (assistant === 'ai_repair_assistant' && !repairConfig.apiKey) {
    throw new Error('AI Repair Assistant API key is missing. Add repair_ai_api_key (or OpenRouter key) in AI settings.');
  }

  const toggles = parseAssistantToggles(settings);
  if (!toggles[assistant]) {
    throw new Error(`${assistant} is disabled in Automation Center settings.`);
  }

  const hookMap = parseAssistantHooks(settings);
  const endpoint = hookMap[assistant] || baseWebhook;
  if (!endpoint) {
    throw new Error('n8n webhook URL is not configured for Automation Center.');
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { 'X-Webhook-Token': token } : {}),
    },
    body: JSON.stringify({
      source: 'ai-admin-assistant',
      assistant,
      message,
      history,
      user_id: userId,
      mode,
      metadata: {
        ...(metadata || {}),
        ...(assistant === 'ai_repair_assistant'
          ? {
              repair_config: {
                provider: repairConfig.provider,
                model: repairConfig.model,
                api_key: repairConfig.apiKey,
                endpoint: 'https://openrouter.ai/api/v1/chat/completions',
                auto_apply_safe_fixes: repairConfig.autoApplySafeFixes,
                scan_interval_minutes: repairConfig.scanIntervalMinutes,
              },
              repair_checklist: getRepairChecklist(),
            }
          : {}),
      },
      at: new Date().toISOString(),
    }),
  });

  const raw = await res.text();
  const data = raw ? JSON.parse(raw) : {};
  if (!res.ok) {
    throw new Error(data?.error || `n8n assistant ${assistant} failed (${res.status})`);
  }
  return {
    response: pickTextFromUnknownResponse(data) || `${assistant} completed successfully.`,
    raw: data,
  };
}

async function runAutomationPipeline(params: {
  settings: Record<string, unknown>;
  message: string;
  history: Array<{ role: string; content: string }>;
  userId: string;
  mode: 'admin' | 'developer';
}) {
  const steps: Array<{ assistant: AutomationAssistant; ok: boolean; detail: string }> = [];
  const order: AutomationAssistant[] = [
    'ai_repair_assistant',
    'product_ai',
    'writer_ai',
    'image_ai',
    'showroom_ai',
    'seo_ai',
    'customer_support_ai',
    'website_builder_ai',
  ];

  for (const assistant of order) {
    try {
      const result = await callN8nAssistant({
        settings: params.settings,
        assistant,
        message: params.message,
        history: params.history,
        userId: params.userId,
        mode: params.mode,
        metadata: { pipeline: true },
      });
      steps.push({ assistant, ok: true, detail: result.response });
    } catch (err) {
      steps.push({ assistant, ok: false, detail: String(err?.message || err) });
      return {
        success: false,
        steps,
        response: `Pipeline stopped at ${assistant}: ${String(err?.message || err)}`,
      };
    }
  }

  return {
    success: true,
    steps,
    response: 'Automation pipeline completed: repair scan, product, content, image, showroom, SEO, support, and builder all ran successfully.',
  };
}

function summarizeRepairResult(data: Record<string, unknown>) {
  const report = (data.report && typeof data.report === 'object')
    ? (data.report as Record<string, unknown>)
    : null;
  const autoFixes = Array.isArray(data.auto_fixes_applied)
    ? data.auto_fixes_applied
    : (Array.isArray(report?.auto_fixes_applied) ? report?.auto_fixes_applied : []);
  const unresolvedIssues = Array.isArray(data.unresolved_issues)
    ? data.unresolved_issues
    : (Array.isArray(report?.unresolved_issues) ? report?.unresolved_issues : []);
  const recommendations = Array.isArray(data.recommendations)
    ? data.recommendations
    : (Array.isArray(report?.recommendations) ? report?.recommendations : []);
  const notificationRequired = unresolvedIssues.length > 0 || data.needs_manual_action === true || report?.needs_manual_action === true;

  return {
    report,
    autoFixes,
    unresolvedIssues,
    recommendations,
    notificationRequired,
  };
}

async function logAutomationRun(params: {
  serviceClient: ReturnType<typeof createClient>;
  userId: string;
  action: string;
  assistant?: string | null;
  requestPayload?: Record<string, unknown>;
  responsePayload?: Record<string, unknown>;
  status?: 'started' | 'success' | 'failed';
  errorMessage?: string | null;
}) {
  try {
    await params.serviceClient.from('ai_automation_runs').insert({
      user_id: params.userId,
      action: params.action,
      assistant: params.assistant || null,
      request_payload: params.requestPayload || {},
      response_payload: params.responsePayload || {},
      status: params.status || 'started',
      error_message: params.errorMessage || null,
      completed_at: params.status === 'success' || params.status === 'failed' ? new Date().toISOString() : null,
    });
  } catch {
    // Intentionally ignored to keep chat/automation paths resilient if migration is not yet applied.
  }
}

async function logRepairReport(params: {
  serviceClient: ReturnType<typeof createClient>;
  userId: string;
  targetUrl: string;
  releaseTag: string | null;
  reportData: Record<string, unknown>;
  autoFixesApplied: unknown[];
  unresolvedIssues: unknown[];
  recommendations: unknown[];
  notificationRequired: boolean;
}) {
  try {
    await params.serviceClient.from('ai_repair_reports').insert({
      user_id: params.userId,
      target_url: params.targetUrl,
      release_tag: params.releaseTag,
      report_data: params.reportData,
      auto_fixes_applied: params.autoFixesApplied,
      unresolved_issues: params.unresolvedIssues,
      recommendations: params.recommendations,
      notification_required: params.notificationRequired,
    });
  } catch {
    // Keep runtime resilient while migration catches up.
  }
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

  const selectedProvider = String(payload.provider_override || settings.active_provider || 'gemini').trim().toLowerCase();
  const automationEnabled = settings.automation_center_enabled === true;

  async function runProviderChat(message: string, history: Array<{ role: string; content: string }>) {
    if (selectedProvider === 'gemini') {
      const model = normalizeModel(settings as Record<string, unknown>, payload.developer_mode === true);
      const apiKey = String(settings.gemini_api_key || settings.gemini_key || '').trim();
      if (!apiKey) throw new Error('Gemini API key is not set in AI Settings.');
      const { response, modelUsed } = await callGeminiWithFallback({ apiKey, model, message, history });
      return { response, provider: 'gemini', model: modelUsed };
    }

    if (selectedProvider === 'groq') {
      const apiKey = String(settings.groq_key || '').trim();
      const model = String(settings.groq_model || 'llama-3.3-70b-versatile').trim();
      if (!apiKey) throw new Error('Groq API key is not set in AI Settings.');
      const response = await callOpenAICompatible({ endpoint: 'https://api.groq.com/openai/v1/chat/completions', apiKey, model, message, history });
      return { response, provider: 'groq', model };
    }

    if (selectedProvider === 'openrouter') {
      const apiKey = String(settings.openrouter_key || '').trim();
      const model = String(settings.openrouter_model || 'google/gemini-2.0-flash-exp:free').trim();
      if (!apiKey) throw new Error('OpenRouter API key is not set in AI Settings.');
      const response = await callOpenAICompatible({
        endpoint: 'https://openrouter.ai/api/v1/chat/completions',
        apiKey,
        model,
        message,
        history,
        extraHeaders: {
          'HTTP-Referer': 'https://weverseonlineshop.com',
          'X-Title': 'Weverse Admin AI',
        },
      });
      return { response, provider: 'openrouter', model };
    }

    if (selectedProvider === 'huggingface') {
      const apiKey = String(settings.hf_key || '').trim();
      const model = String(settings.hf_model || 'Qwen/Qwen2.5-Coder-32B-Instruct').trim();
      if (!apiKey) throw new Error('Hugging Face API key is not set in AI Settings.');
      const response = await callOpenAICompatible({ endpoint: 'https://router.huggingface.co/v1/chat/completions', apiKey, model, message, history });
      return { response, provider: 'huggingface', model };
    }

if (selectedProvider === 'n8n') {
      const result = await callN8nAssistant({
        settings: settings as Record<string, unknown>,
        assistant: 'ai_repair_assistant',
        message,
        history,
        userId: user.id,
        mode: payload.developer_mode ? 'developer' : 'admin',
      });
      return { response: result.response, provider: 'n8n', model: 'n8n-automation-center' };
    }

    throw new Error(`Unsupported provider: ${selectedProvider}`);
  }

  const isEnabled = settings.is_enabled !== false;
  if (!isEnabled && !['test_connection', 'test_automation_center', 'run_ai_assistant_task', 'run_automation_pipeline', 'run_repair_scan'].includes(action)) {
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
      return jsonResponse({ success: false, error: String(err?.message || err), provider: selectedProvider }, 400);
    }
  }

  if (action === 'test_automation_center') {
    if (!automationEnabled) {
      return jsonResponse({ success: false, error: 'Automation Center is disabled. Enable it in AI settings first.' }, 400);
    }
    const checks: Array<{ assistant: string; ok: boolean; detail: string }> = [];
    const toggles = parseAssistantToggles(settings as Record<string, unknown>);
    for (const assistant of AUTOMATION_ASSISTANTS) {
      if (!toggles[assistant]) {
        checks.push({ assistant, ok: true, detail: 'Skipped (disabled).' });
        continue;
      }
      try {
        const result = await callN8nAssistant({
          settings: settings as Record<string, unknown>,
          assistant,
          message: 'health_check',
          history: [],
          userId: user.id,
          mode: payload.developer_mode ? 'developer' : 'admin',
          metadata: { health_check: true },
        });
        checks.push({ assistant, ok: true, detail: result.response.slice(0, 120) || 'OK' });
      } catch (err) {
        checks.push({ assistant, ok: false, detail: String(err?.message || err) });
      }
    }
    const ok = checks.every((item) => item.ok);
    await logAutomationRun({
      serviceClient,
      userId: user.id,
      action,
      requestPayload: { check: 'all_assistants' },
      responsePayload: { checks },
      status: ok ? 'success' : 'failed',
      errorMessage: ok ? null : 'One or more assistant health checks failed.',
    });
    return jsonResponse({ success: ok, checks });
  }

  if (action === 'run_repair_scan') {
    if (!automationEnabled) return jsonResponse({ error: 'Automation Center is disabled.' }, 400);
    const targetUrl = String(payload.target_url || 'https://weverseonlineshop.com').trim();
    const releaseTag = String(payload.release_tag || '').trim() || null;
    const includeAutoFix = payload.include_auto_fix !== false;
    const repairConfig = getRepairAssistantConfig(settings as Record<string, unknown>);

    await logAutomationRun({
      serviceClient,
      userId: user.id,
      action,
      assistant: 'ai_repair_assistant',
      requestPayload: {
        target_url: targetUrl,
        release_tag: releaseTag,
        include_auto_fix: includeAutoFix,
      },
      status: 'started',
    });

    try {
      const result = await callN8nAssistant({
        settings: settings as Record<string, unknown>,
        assistant: 'ai_repair_assistant',
        message: `run_repair_scan target=${targetUrl}`,
        history: [],
        userId: user.id,
        mode: payload.developer_mode ? 'developer' : 'admin',
        metadata: {
          repair_scan: true,
          target_url: targetUrl,
          release_tag: releaseTag,
          include_auto_fix: includeAutoFix,
          continuous_monitoring: true,
          free_model: {
            provider: repairConfig.provider,
            model: repairConfig.model,
          },
          notification_policy: {
            notify_if_not_auto_fixable: true,
          },
        },
      });

      const summary = summarizeRepairResult((result.raw || {}) as Record<string, unknown>);
      await logRepairReport({
        serviceClient,
        userId: user.id,
        targetUrl,
        releaseTag,
        reportData: (result.raw || {}) as Record<string, unknown>,
        autoFixesApplied: summary.autoFixes,
        unresolvedIssues: summary.unresolvedIssues,
        recommendations: summary.recommendations,
        notificationRequired: summary.notificationRequired,
      });

      await logAutomationRun({
        serviceClient,
        userId: user.id,
        action,
        assistant: 'ai_repair_assistant',
        requestPayload: {
          target_url: targetUrl,
          release_tag: releaseTag,
          include_auto_fix: includeAutoFix,
        },
        responsePayload: {
          response: result.response,
          unresolved_issues_count: summary.unresolvedIssues.length,
          auto_fixes_count: summary.autoFixes.length,
          notification_required: summary.notificationRequired,
        },
        status: 'success',
      });

      return jsonResponse({
        success: true,
        assistant: 'ai_repair_assistant',
        response: result.response,
        report: summary.report,
        auto_fixes_applied: summary.autoFixes,
        unresolved_issues: summary.unresolvedIssues,
        recommendations: summary.recommendations,
        notification_required: summary.notificationRequired,
        message: summary.notificationRequired
          ? 'Repair scan completed with issues that require manual action. Notification required.'
          : 'Repair scan completed. Safe fixes were applied where possible.',
      });
    } catch (err) {
      await logAutomationRun({
        serviceClient,
        userId: user.id,
        action,
        assistant: 'ai_repair_assistant',
        requestPayload: {
          target_url: targetUrl,
          release_tag: releaseTag,
          include_auto_fix: includeAutoFix,
        },
        responsePayload: {},
        status: 'failed',
        errorMessage: String(err?.message || err),
      });
      return jsonResponse({ success: false, assistant: 'ai_repair_assistant', error: String(err?.message || err), notification_required: true }, 400);
    }
  }

  if (action === 'run_ai_assistant_task') {
    if (!automationEnabled) return jsonResponse({ error: 'Automation Center is disabled.' }, 400);
    const assistant = String(payload.assistant || '').trim() as AutomationAssistant;
    if (!AUTOMATION_ASSISTANTS.includes(assistant)) {
      return jsonResponse({ error: 'Invalid assistant. Use one of the configured assistant IDs.' }, 400);
    }
    const message = String(payload.message || '').trim();
    if (!message) return jsonResponse({ error: 'message is required' }, 400);
    const history = Array.isArray(payload.history)
      ? (payload.history as Array<{ role: string; content: string }>)
      : [];
    await logAutomationRun({
      serviceClient,
      userId: user.id,
      action,
      assistant,
      requestPayload: { message, history_count: history.length },
      status: 'started',
    });
    try {
      const result = await callN8nAssistant({
        settings: settings as Record<string, unknown>,
        assistant,
        message,
        history,
        userId: user.id,
        mode: payload.developer_mode ? 'developer' : 'admin',
        metadata: { manual_task: true },
      });
      await logAutomationRun({
        serviceClient,
        userId: user.id,
        action,
        assistant,
        requestPayload: { message, history_count: history.length },
        responsePayload: { response: result.response, raw: result.raw },
        status: 'success',
      });
      return jsonResponse({ success: true, assistant, response: result.response, raw: result.raw });
    } catch (err) {
      await logAutomationRun({
        serviceClient,
        userId: user.id,
        action,
        assistant,
        requestPayload: { message, history_count: history.length },
        responsePayload: {},
        status: 'failed',
        errorMessage: String(err?.message || err),
      });
      return jsonResponse({ success: false, assistant, error: String(err?.message || err) }, 400);
    }
  }

  if (action === 'run_automation_pipeline') {
    if (!automationEnabled) return jsonResponse({ error: 'Automation Center is disabled.' }, 400);
    const message = String(payload.message || '').trim() || 'new_product_pipeline';
    const history = Array.isArray(payload.history)
      ? (payload.history as Array<{ role: string; content: string }>)
      : [];
    await logAutomationRun({
      serviceClient,
      userId: user.id,
      action,
      requestPayload: { message, history_count: history.length },
      status: 'started',
    });
    const pipeline = await runAutomationPipeline({
      settings: settings as Record<string, unknown>,
      message,
      history,
      userId: user.id,
      mode: payload.developer_mode ? 'developer' : 'admin',
    });
    await logAutomationRun({
      serviceClient,
      userId: user.id,
      action,
      requestPayload: { message, history_count: history.length },
      responsePayload: { steps: pipeline.steps || [], response: pipeline.response },
      status: pipeline.success ? 'success' : 'failed',
      errorMessage: pipeline.success ? null : String(pipeline.response || 'Pipeline failed'),
    });
    return jsonResponse(pipeline, pipeline.success ? 200 : 400);
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
      const providerResult = await runProviderChat(message, history);

      await serviceClient.from('ai_chat_history').insert([
        {
          user_id: user.id,
          role: 'user',
          content: message,
          provider: providerResult.provider,
          mode: payload.developer_mode ? 'developer' : 'admin',
          metadata: { requested_provider: selectedProvider, model_used: providerResult.model },
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
      return jsonResponse({ error: String(err?.message || err), provider: selectedProvider }, 400);
    }
  }

  return jsonResponse({ error: 'Unsupported action.' }, 400);
});
