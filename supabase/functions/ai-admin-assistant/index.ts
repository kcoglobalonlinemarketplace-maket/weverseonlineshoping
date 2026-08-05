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
  const fallback = (settings.gemini_model as string | null) || 'gemini-2.5-flash';
  return (override || fallback || 'gemini-2.5-flash').trim();
}

function genPropertyId() {
  const tail = String(Date.now()).slice(-6);
  const rand = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `KCO-${tail}${rand}`;
}

function parseAddProductIntent(message: string) {
  const text = message.trim();
  const hasProductIntent = /(add|create)\s+(a\s+)?(new\s+)?product/i.test(text);
  if (!hasProductIntent) return null;

  const namedMatch = text.match(/named\s+["']([^"']+)["']/i) || text.match(/named\s+([^,\.]+?)(?:,|\sthen\s|\sprice\s|\sstock\s|\scategory\s|$)/i);
  const nameMatch = text.match(/name\s+["']([^"']+)["']/i) || text.match(/name\s*[:=]\s*([^,\.]+?)(?:,|\sthen\s|\sprice\s|\sstock\s|\scategory\s|$)/i);
  const title = (namedMatch?.[1] || nameMatch?.[1] || 'AI Product').trim();

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

  const isEnabled = settings.is_enabled !== false;
  if (!isEnabled && action !== 'test_connection') {
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

  const model = normalizeModel(settings as Record<string, unknown>, payload.developer_mode === true);
  const apiKey = String(settings.gemini_api_key || '').trim();

  if (action === 'test_connection') {
    if (!apiKey) return jsonResponse({ success: false, error: 'Gemini API key is not set in AI Settings.' }, 400);
    try {
      const { response, modelUsed } = await callGeminiWithFallback({
        apiKey,
        model,
        message: 'Reply with exactly: OK',
        history: [],
      });
      return jsonResponse({ success: true, provider: 'gemini', provider_label: 'Google Gemini', model: modelUsed, response_preview: response.slice(0, 80) });
    } catch (err) {
      return jsonResponse({ success: false, error: String(err?.message || err), provider: 'gemini', model }, 400);
    }
  }

  if (action === 'chat') {
    const message = String(payload.message || '').trim();
    if (!message) return jsonResponse({ error: 'message is required' }, 400);
    if (!apiKey) return jsonResponse({ error: 'Gemini API key is not set in AI Settings.', provider: 'gemini' }, 400);

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

      return jsonResponse({ response: autoAction.response, tool_results: autoAction.toolResults, provider: 'gemini', model: model, auto_action: true });
    }

    const history = Array.isArray(payload.history)
      ? (payload.history as Array<{ role: string; content: string }>)
      : [];

    try {
      const { response, modelUsed } = await callGeminiWithFallback({ apiKey, model, message, history });

      await serviceClient.from('ai_chat_history').insert([
        {
          user_id: user.id,
          role: 'user',
          content: message,
          provider: 'gemini',
          mode: payload.developer_mode ? 'developer' : 'admin',
          metadata: { requested_model: model, model_used: modelUsed },
        },
        {
          user_id: user.id,
          role: 'assistant',
          content: response,
          provider: 'gemini',
          mode: payload.developer_mode ? 'developer' : 'admin',
          metadata: { tool_results: [], model_used: modelUsed },
        },
      ]);

      return jsonResponse({ response, tool_results: [], provider: 'gemini', model: modelUsed });
    } catch (err) {
      return jsonResponse({ error: String(err?.message || err), provider: 'gemini', model }, 400);
    }
  }

  return jsonResponse({ error: 'Unsupported action.' }, 400);
});
