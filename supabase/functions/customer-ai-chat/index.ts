// Supabase Edge Function: customer-ai-chat
// Public-facing AI chat assistant for shoppers on Weverse Online Shop.
// No sign-in required. Answers questions about products, orders, shipping,
// payments, refunds and store policies using the admin's Gemini key
// (server-side, the key never reaches the browser).

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

// Real, widely-available Gemini models. Every model has its own free-tier daily
// quota, so the chain keeps the assistant alive even when one model is exhausted.
const MODEL_FALLBACKS = [
  'gemini-2.5-flash',
  'gemini-2.5-flash-lite',
  'gemini-2.0-flash',
  'gemini-1.5-flash',
];

function pickModel(settings: Record<string, unknown>): string {
  const override = String(settings.customer_model_override || '').trim();
  if (override) return override;
  return String(settings.gemini_model || '').trim();
}

function modelChain(settings: Record<string, unknown>): string[] {
  const chain = new Set<string>();
  const preferred = pickModel(settings);
  if (preferred) chain.add(preferred);
  for (const m of MODEL_FALLBACKS) chain.add(m);
  return [...chain];
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
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: maxTokens || 900,
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
  return { text, usage: data?.usageMetadata || null };
}

async function runGeminiWithFallback(params: {
  apiKey: string;
  settings: Record<string, unknown>;
  message: string;
  history: Array<{ role: string; content: string }>;
  maxTokens?: number;
}) {
  const chain = modelChain(params.settings);
  let lastError: unknown = null;
  let quotaHit = false;
  for (const model of chain) {
    // Rate-limit errors ("Please retry in Ns") clear after a few seconds, so
    // wait briefly and retry the SAME model once before moving to the next one.
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        return await callGemini({ ...params, model });
      } catch (err) {
        lastError = err;
        const msg = String(err?.message || err).toLowerCase();
        const isQuota = msg.includes('quota') || msg.includes('rate limit') ||
          msg.includes('resource_exhausted') || msg.includes('exceeded') || msg.includes('429');
        if (isQuota) {
          quotaHit = true;
          if (attempt === 0) {
            await new Promise((r) => setTimeout(r, 6000)); // let the rate limit window reset
            continue;
          }
          break; // try the next model (each model has its own quota)
        }
        // Model availability / server errors also fall through to the next model.
        const retryable = msg.includes('not found') || msg.includes('not supported') || msg.includes('model') ||
          msg.includes('overload') || msg.includes('503') || msg.includes('500') || msg.includes('unavailable');
        if (!retryable) throw err;
        break;
      }
    }
  }
  const e: Error & { quotaHit?: boolean } = new Error(String((lastError as Error)?.message || lastError || 'Gemini call failed.'));
  e.quotaHit = quotaHit;
  throw e;
}

function wantsHumanAgent(message: string): boolean {
  return /(human|real person|agent|representative|talk to (someone|a person|support)|support team|live agent|escalate|speak to|call me|reach a person)/i.test(message);
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return jsonResponse({ error: 'Method not allowed' }, 405);

  const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse({ error: 'Supabase environment variables are missing.' }, 500);
  }
  const serviceClient = createClient(supabaseUrl, serviceRoleKey);

  let payload: Record<string, unknown> = {};
  try {
    payload = await req.json();
  } catch {
    payload = {};
  }

  const message = String(payload.message || '').trim();
  if (!message) return jsonResponse({ error: 'message is required' }, 400);

  const history = Array.isArray(payload.history)
    ? (payload.history as Array<{ role: string; content: string }>).filter((h) => h && h.content).slice(-12)
    : [];
  const customerEmail = String(payload.email || '').trim();

  const { data: settings, error: settingsErr } = await serviceClient
    .from('ai_settings')
    .select('*')
    .limit(1)
    .maybeSingle();
  if (settingsErr) return jsonResponse({ error: 'AI settings could not be loaded.' }, 400);
  const settingsRow = (settings || {}) as Record<string, unknown>;

  if (settingsRow.customer_enabled === false || settingsRow.customer_ai_enabled === false) {
    return jsonResponse({
      response: 'Our assistant is taking a short break right now. For immediate help, email us at support@weverseonlineshop.com or visit the Contact page.',
    });
  }

  const apiKey = String(settingsRow.gemini_key || settingsRow.gemini_api_key || '').trim();

  // ── KEYLESS FREE AI FALLBACK (Pollinations — no API key, no signup, free) ──
  // Used when there is no Gemini key at all, or when Gemini errors/quota-exhausts,
  // so the shopper ALWAYS gets a real AI answer instead of an error message.
  const pollinationsChat = async (): Promise<{ text: string; model: string }> => {
    const messages = [
      { role: 'system', content: systemPromptLater },
      ...history.map((h) => ({ role: h.role === 'assistant' ? 'assistant' : 'user', content: String(h.content).slice(0, 2000) })),
      { role: 'user', content: message },
    ];
    const res = await fetch('https://text.pollinations.ai/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'openai', messages, max_tokens: 900 }),
      signal: AbortSignal.timeout(45000),
    });
    if (!res.ok) throw new Error(`Pollinations ${res.status}`);
    const data = await res.json();
    const text = String(data?.choices?.[0]?.message?.content || '').trim();
    if (!text) throw new Error('Pollinations empty reply');
    return { text, model: String(data?.model || 'pollinations-openai-fast') };
  };
  // The system prompt is built later in the request; keep a mutable reference.
  let systemPromptLater = '';
  const setSystemPrompt = (p: string) => { systemPromptLater = p; };

  if (!apiKey) {
    // No Gemini key configured — answer anyway with the free keyless AI.
    try {
      setSystemPrompt('You are the friendly customer support assistant for Weverse Online Shop, an online marketplace. Help with products, orders, shipping and returns. If you do not know something, offer to connect the shopper with a human agent at support@weverseonlineshop.com. Keep replies short and friendly.');
      const r = await pollinationsChat();
      try {
        await serviceClient.from('ai_usage_tracking').insert({ session_type: 'customer', provider: 'pollinations', mode: 'marketplace', total_tokens: 0, success: true });
      } catch { /* non-fatal */ }
      return jsonResponse({ response: r.text, provider: 'pollinations', model: r.model });
    } catch {
      return jsonResponse({
        response: 'I am not quite ready to chat yet — our team is configuring the assistant. Please email support@weverseonlineshop.com and we will help right away.',
      });
    }
  }

  // Daily per-shopper rate limit (anon shoppers share the budget; abuse is cut off).
  const dailyLimit = Number(settingsRow.rate_limit_daily) || 100;
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const { count } = await serviceClient
    .from('ai_usage_tracking')
    .select('*', { count: 'exact', head: true })
    .eq('session_type', 'customer')
    .gte('created_at', todayStart.toISOString());
  if ((count || 0) >= dailyLimit) {
    return jsonResponse({
      response: 'This assistant has reached its daily message limit. Please try again tomorrow, or email support@weverseonlineshop.com for help.',
    });
  }

  // Store facts + live inventory so the assistant gives grounded answers.
  const [siteRes, listingRes] = await Promise.all([
    serviceClient.from('site_settings').select('*').limit(1).maybeSingle(),
    serviceClient
      .from('showroom_listings')
      .select('property_id,title,price,currency,category,listing_type,is_featured')
      .order('is_featured', { ascending: false })
      .order('created_at', { ascending: false })
      .limit(40),
  ]);
  const site = (siteRes.data || {}) as Record<string, unknown>;
  const listings = (listingRes.data || []) as Array<Record<string, unknown>>;

  // The ONLY official brand is "Weverse Online Shop". Whatever the DB says, the
  // assistant must NEVER introduce itself with an old brand name (KCO, K.C.O,
  // KCO Global Online Marketplace, etc.) — fall back to the official brand.
  const BRAND_NAME = 'Weverse Online Shop';
  const rawStoreName = String(site.brand_name || site.site_name || BRAND_NAME);
  const storeName = /(kco|k\.c\.o|global online marketplace|global marketplace)/i.test(rawStoreName) ? BRAND_NAME : rawStoreName;
  const contactEmail = String(site.contact_email || site.brand_email || 'support@weverseonlineshop.com');

  const inventory = listings
    .map((l) => `- ${String(l.title || 'Untitled listing')} — ${Number(l.price) || 0} ${String(l.currency || 'USD')} (${String(l.category || l.listing_type || 'Product')})`)
    .join('\n');

  const systemPrompt = [
    `You are ${storeName}'s friendly customer support assistant.`,
    'Never describe yourself as an AI, a chatbot, a bot, a robot, a language model, or anything artificial. Always present yourself as a member of the Weverse Online Shop support team and speak naturally, like a helpful human customer-service agent.',
    'Help shoppers with: finding products, order status, shipping times, payments, refunds, returns, account help, store policies and general questions.',
    'Answer in clear, concise, friendly language (max ~120 words unless asked for detail). Use short paragraphs or bullet lists.',
    'Use ONLY the inventory list below to mention specific products. If a shopper asks for a product that is not in the inventory, say it may not be currently listed and suggest browsing the marketplace.',
    'Never invent order details, prices, shipping promises or policies. If you do not know, offer to connect the shopper with a human agent.',
    `Contact: email ${contactEmail}. Website: ${storeName}.`,
    'When the shopper wants to talk to a human, encourage them to send a message and our support team will reply within 24 hours.',
    `Current inventory:\n${inventory || '(none listed)'}`,
  ].join('\n');
  setSystemPrompt(systemPrompt);

  // Escalations: capture requests to speak with a human for the admin team.
  if (wantsHumanAgent(message)) {
    try {
      await serviceClient.from('ai_escalations').insert({
        customer_email: customerEmail || null,
        reason: message,
        status: 'open',
        priority: 'normal',
        conversation_summary: history.slice(-3).map((h) => `${h.role}: ${h.content}`).join('\n'),
      });
    } catch {
      // non-fatal
    }
  }

  try {
    const result = await runGeminiWithFallback({
      apiKey,
      settings: settingsRow,
      message,
      history: [{ role: 'user', content: systemPrompt }, ...history],
      maxTokens: Number(payload.max_tokens) || 900,
    });

    const tokensUsed = Number(result.usage?.totalTokenCount) || 0;

    // Persist conversation (service role bypasses RLS so anon guests are fine).
    try {
      await serviceClient.from('ai_chat_history').insert([
        { role: 'user', content: message, provider: 'gemini', mode: 'marketplace', tokens_used: Math.round(tokensUsed / 2) },
        { role: 'assistant', content: result.text, provider: 'gemini', mode: 'marketplace', tokens_used: Math.round(tokensUsed / 2) },
      ]);
    } catch {
      // non-fatal
    }

    try {
      await serviceClient.from('ai_usage_tracking').insert({
        session_type: 'customer',
        provider: 'gemini',
        model: result.usage?.modelVersion || 'gemini',
        mode: 'marketplace',
        total_tokens: tokensUsed,
        estimated_cost_usd: 0,
        success: true,
      });
    } catch {
      // non-fatal
    }

    return jsonResponse({
      response: result.text,
      provider: 'gemini',
      model: result.usage?.modelVersion || 'gemini',
      escalated: wantsHumanAgent(message),
    });
  } catch (err) {
    const errMsg = String(err?.message || err);
    try {
      await serviceClient.from('ai_usage_tracking').insert({
        session_type: 'customer',
        provider: 'gemini',
        mode: 'marketplace',
        total_tokens: 0,
        success: false,
        error_message: errMsg.slice(0, 500),
      });
    } catch {
      // non-fatal
    }
    // Friendlier copy for the most common failure: free-tier daily quota used up.
    const quotaHit = (err as { quotaHit?: boolean })?.quotaHit === true ||
      /quota|rate limit|resource_exhausted|exceeded/i.test(errMsg);
    // FREE KEYLESS FALLBACK: Gemini failed (quota/error) — try Pollinations so
    // the shopper still gets a real AI answer with zero configuration.
    try {
      const r = await pollinationsChat();
      try {
        await serviceClient.from('ai_chat_history').insert([
          { role: 'user', content: message, provider: 'pollinations', mode: 'marketplace', tokens_used: 0 },
          { role: 'assistant', content: r.text, provider: 'pollinations', mode: 'marketplace', tokens_used: 0 },
        ]);
      } catch { /* non-fatal */ }
      return jsonResponse({ response: r.text, provider: 'pollinations', model: r.model, note: 'gemini-unavailable' });
    } catch (perr) {
      const reply = quotaHit
        ? 'I have reached my free daily message limit just now. Please try again in a little while, or email ' + contactEmail + ' and our team will help you right away.'
        : 'Sorry, I hit a technical hiccup. Please try again in a moment, or email ' + contactEmail + ' and we will help right away.';
      return jsonResponse({
        response: reply,
        error: errMsg + ' | free-ai-fallback: ' + String((perr as Error)?.message || perr),
      }, 200);
    }
  }
});