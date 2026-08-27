// LOCAL OLLAMA VISION CLIENT (shared, DOM-free — works in browser and node tests).
//
// Used ONLY by the General AI Scanner. Images NEVER go to a cloud provider:
// every request goes to the local Ollama server (default http://localhost:11434).
// No API key exists or is needed. If Ollama is unreachable, callers must show a
// clear error and MUST NOT fall back to Gemini/Groq or any other provider.

export const DEFAULT_OLLAMA_URL = 'http://localhost:11434';
export const DEFAULT_OLLAMA_VISION_MODEL = 'qwen2.5vl:7b';

// Preference order when auto-picking among locally installed vision models.
const VISION_MODEL_PREFERENCE = [
  'qwen2.5vl',
  'qwen2-vl',
  'llava',
  'moondream',
  'minicpm-v',
  'llama3.2-vision',
];

function normalizeUrl(url) {
  let u = String(url || '').trim() || DEFAULT_OLLAMA_URL;
  if (!/^https?:\/\//i.test(u)) u = `http://${u}`;
  return u.replace(/\/+$/, '');
}

function stripToBase64(dataUrl) {
  const m = String(dataUrl || '').match(/^data:[^;,]*;base64,(.+)$/s);
  if (m) return m[1].replace(/\s+/g, '');
  const s = String(dataUrl || '').trim();
  return /^[A-Za-z0-9+/=\r\n]+$/.test(s) ? s.replace(/\s+/g, '') : '';
}

// GET /api/tags — is the server reachable and which models are installed?
export async function ollamaHealth(baseUrl, { timeoutMs = 5000 } = {}) {
  const url = `${normalizeUrl(baseUrl)}/api/tags`;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(timeoutMs) });
    if (!res.ok) {
      return { ok: false, error: `Ollama answered with HTTP ${res.status} at ${url}`, models: [] };
    }
    const data = await res.json().catch(() => ({}));
    const models = (Array.isArray(data?.models) ? data.models : [])
      .map(m => String(m?.name || m?.model || '').trim())
      .filter(Boolean);
    return { ok: true, url: normalizeUrl(baseUrl), models, error: null };
  } catch (err) {
    const msg = String((err && err.message) || err);
    const hint = /abort|timeout/i.test(msg)
      ? `Ollama did not answer within ${timeoutMs}ms at ${url}`
      : `Ollama is not reachable at ${url} — start it with "ollama serve" (and allow CORS: OLLAMA_ORIGINS=*)`;
    return { ok: false, error: hint, models: [] };
  }
}

// Pick the best installed vision model, preferring qwen2.5vl.
export function pickInstalledVisionModel(models) {
  const list = (Array.isArray(models) ? models : []).map(m => String(m).toLowerCase());
  for (const pref of VISION_MODEL_PREFERENCE) {
    const hit = list.find(name => name.includes(pref));
    if (hit) return hit;
  }
  return null;
}

// Resolve which model to use: explicit > configured-installed > auto-pick.
export async function resolveOllamaVisionModel(baseUrl, configuredModel, { timeoutMs } = {}) {
  const health = await ollamaHealth(baseUrl, { timeoutMs });
  if (!health.ok) return health; // { ok:false, error }
  const wanted = String(configuredModel || '').trim().toLowerCase();
  if (wanted) {
    const exact = health.models.find(n => n.toLowerCase() === wanted);
    if (exact) return { ok: true, model: exact, models: health.models };
    const partial = health.models.find(n => n.toLowerCase().startsWith(`${wanted}:`));
    if (partial) return { ok: true, model: partial, models: health.models };
  }
  const auto = pickInstalledVisionModel(health.models);
  if (auto) return { ok: true, model: auto, models: health.models, autoPicked: !wanted };
  return {
    ok: false,
    error: `Ollama is running but no vision model is installed. Pull one first: "ollama pull ${DEFAULT_OLLAMA_VISION_MODEL}"`,
    models: health.models,
  };
}

// POST /api/chat with images (base64, no data: prefix). Returns { text, model }.
// Never retries against another provider — local only by contract.
export async function ollamaVision({ baseUrl, model, prompt, images, maxTokens = 4096, timeoutMs = 180000 } = {}) {
  const b64Images = (Array.isArray(images) ? images : [])
    .map(stripToBase64)
    .filter(Boolean)
    .slice(0, 4);
  if (!b64Images.length) throw new Error('No readable image data was provided to the local scanner.');
  const url = `${normalizeUrl(baseUrl)}/api/chat`;
  let res;
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: String(model || DEFAULT_OLLAMA_VISION_MODEL),
        stream: false,
        messages: [{ role: 'user', content: String(prompt || ''), images: b64Images }],
        options: { temperature: 0.2, num_predict: maxTokens },
      }),
      signal: AbortSignal.timeout(timeoutMs),
    });
  } catch (err) {
    const msg = String((err && err.message) || err);
    throw new Error(/abort|timeout/i.test(msg)
      ? `Local Ollama took longer than ${Math.round(timeoutMs / 1000)}s to answer (model: ${model}). Try fewer/smaller photos.`
      : `Local Ollama is not reachable at ${normalizeUrl(baseUrl)} — start it with "ollama serve". No cloud fallback was used.`);
  }
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    let reason = body.slice(0, 200);
    try { reason = String(JSON.parse(body)?.error || reason); } catch {}
    if (/model .*not found/i.test(reason)) {
      throw new Error(`Model "${model}" is not installed in Ollama. Run: ollama pull ${model}`);
    }
    throw new Error(`Local Ollama vision failed (HTTP ${res.status}): ${reason}`);
  }
  const data = await res.json().catch(() => ({}));
  const text = String(data?.message?.content || '').trim();
  if (!text) throw new Error('Local Ollama returned an empty response.');
  return { text, model: String(data?.model || model || DEFAULT_OLLAMA_VISION_MODEL), provider: `Ollama local (${data?.model || model || ''})`.replace(/ \( *\)$/, '') };
}

// Minimal JSON extraction (handles ```json fences / prose around the object).
export function extractJson(text) {
  if (!text) return null;
  let t = String(text).trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) t = fence[1].trim();
  const start = t.indexOf('{');
  const end = t.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) return null;
  try { return JSON.parse(t.slice(start, end + 1)); } catch { return null; }
}
