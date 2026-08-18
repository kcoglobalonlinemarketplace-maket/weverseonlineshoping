// Shared 100% FREE, keyless, in-browser vision engine.
// Runs a small vision-language model (SmolVLM-256M-Instruct) directly in the
// browser via Transformers.js (ONNX / WebGPU / WASM). No API key, no install,
// no data leaves the computer. The first run downloads the model once
// (~350MB-1GB, cached after that); afterwards it works fully offline.

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

let _pipePromise = null;

async function _getPipeline() {
  if (_pipePromise) return _pipePromise;
  _pipePromise = (async () => {
    try {
      const mod = await import(/* @vite-ignore */ 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.2.0');
      const pipeline = mod?.pipeline;
      if (typeof pipeline !== 'function') return null;
      try { mod.env.allowLocalModels = false; } catch { /* optional */ }
      const attempts = [
        { device: 'webgpu', dtype: 'fp32' },
        { device: 'wasm', dtype: 'q8' },
        { device: 'wasm', dtype: 'fp32' },
      ];
      for (const opts of attempts) {
        if (opts.device === 'webgpu') {
          try { if (!navigator.gpu || !(await navigator.gpu.requestAdapter())) continue; } catch { continue; }
        }
        try {
          const pipe = await pipeline('image-text-to-text', 'HuggingFaceTB/SmolVLM-256M-Instruct', opts);
          if (pipe) return pipe;
        } catch { /* try next backend */ }
      }
    } catch { /* import failed */ }
    return null;
  })();
  const pipe = await _pipePromise;
  if (!pipe) _pipePromise = null;
  return pipe;
}

// Short, neutral prompt tuned for the small on-device model. The big cloud
// prompt (badge reading, vehicle design cues, etc.) is too complex for it.
const LOCAL_VISION_PROMPT = `Look at this product photo and tell me exactly what it is.
Carefully read any visible text: brand name, logo, badge, model number.
Reply with ONLY this JSON (no markdown, no extra words):
{"title":"real product name, include the brand and model if you can read them","brand":"brand name read from the product or empty string","model":"model name read from the product or empty string","category":"best category from: Electronics, Phones, Computers & Laptops, Fashion, Shoes, Bags & Accessories, Watches, Cameras & Photography, Home & Kitchen, Toys & Games, Sports & Fitness, Cars, Luxury Cars, Other","description":"short honest 1-2 sentence description of what you actually see"}`;

// Returns the parsed JSON (with _aiProvider/_aiModel), a { description } object,
// or null when the free local vision engine cannot run. Never fabricates — if
// the model cannot identify the item it returns only what it actually saw.
export async function tryLocalBrowserVision(prompt, images) {
  try {
    const pipe = await _getPipeline();
    if (!pipe) return null;
    const content = [
      { type: 'text', text: LOCAL_VISION_PROMPT },
      ...(images || []).slice(0, 1).map(url => ({ type: 'image', image: url })),
    ];
    const out = await pipe(
      [{ role: 'user', content }],
      { max_new_tokens: 400, do_sample: false, temperature: 0.2 }
    );
    const text = String(out?.[0]?.generated_text || '').trim();
    if (!text) return null;
    const meta = { _aiProvider: 'Free local AI (browser)', _aiModel: 'SmolVLM-256M-Instruct', _aiLowConfidence: true };
    const parsed = extractJsonFromAiText(text);
    return parsed ? { ...parsed, ...meta } : { description: text, ...meta };
  } catch { return null; }
}