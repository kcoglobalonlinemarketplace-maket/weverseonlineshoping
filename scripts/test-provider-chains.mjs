// Node tests for src/ollama-vision.js — mock global.fetch, no network needed.
// Run: node scripts/test-provider-chains.mjs
import assert from 'node:assert/strict';
import {
  DEFAULT_OLLAMA_URL,
  DEFAULT_OLLAMA_VISION_MODEL,
  ollamaHealth,
  ollamaVision,
  resolveOllamaVisionModel,
  pickInstalledVisionModel,
  extractJson,
} from '../src/ollama-vision.js';

let passed = 0;
let failed = 0;
const originalFetch = globalThis.fetch;

function mockFetch(fn) { globalThis.fetch = fn; }
function restore() { globalThis.fetch = originalFetch; }
function ok(name) { passed++; console.log(`  ✓ ${name}`); }
function bad(name, err) { failed++; console.error(`  ✖ ${name}: ${err && err.message}`); }

async function test(name, fn) {
  try { await fn(); ok(name); }
  catch (e) { bad(name, e); }
  finally { restore(); }
}

console.log('ollama-vision tests');

await test('ollamaHealth ok returns models list', async () => {
  mockFetch(async () => ({ ok: true, status: 200, json: async () => ({ models: [{ name: 'qwen2.5vl:7b' }, { name: 'llama3:8b' }] }) }));
  const h = await ollamaHealth('http://localhost:11434');
  assert.equal(h.ok, true);
  assert.deepEqual(h.models, ['qwen2.5vl:7b', 'llama3:8b']);
});

await test('ollamaHealth unreachable gives actionable error (no throw)', async () => {
  mockFetch(async () => { throw new TypeError('fetch failed'); });
  const h = await ollamaHealth('http://localhost:11434');
  assert.equal(h.ok, false);
  assert.match(h.error, /not reachable|ollama serve/i);
});

await test('ollamaVision posts /api/chat with stripped base64 and returns text', async () => {
  let captured = null;
  mockFetch(async (url, opts) => {
    captured = { url, body: JSON.parse(opts.body) };
    return { ok: true, status: 200, json: async () => ({ message: { content: '{"title":"Test Item"}' }, model: 'qwen2.5vl:7b' }) };
  });
  const r = await ollamaVision({ baseUrl: 'http://localhost:11434/', model: 'qwen2.5vl:7b', prompt: 'identify', images: ['data:image/jpeg;base64,QUJD'] });
  assert.equal(captured.url, 'http://localhost:11434/api/chat');
  assert.equal(captured.body.model, 'qwen2.5vl:7b');
  assert.equal(captured.body.stream, false);
  assert.equal(captured.body.messages[0].content, 'identify');
  assert.equal(captured.body.messages[0].images[0], 'QUJD'); // data: prefix stripped
  assert.equal(r.text, '{"title":"Test Item"}');
  assert.match(r.provider, /Ollama local/);
});

await test('ollamaVision throws descriptive error when server is down (no provider switch)', async () => {
  mockFetch(async () => { throw new TypeError('fetch failed'); });
  await assert.rejects(
    () => ollamaVision({ model: 'x', prompt: 'p', images: ['data:image/png;base64,AAA'] }),
    /not reachable|ollama serve|No cloud fallback was used/i,
  );
});

await test('ollamaVision surfaces "model not installed" hint', async () => {
  mockFetch(async () => ({ ok: false, status: 404, text: async () => JSON.stringify({ error: 'model "nope" not found, try pulling it first' }) }));
  await assert.rejects(
    () => ollamaVision({ model: 'nope', prompt: 'p', images: ['data:image/png;base64,AAA'] }),
    /ollama pull nope/,
  );
});

await test('ollamaVision rejects when images carry no usable base64', async () => {
  mockFetch(async () => { throw new Error('should not be called'); });
  await assert.rejects(() => ollamaVision({ model: 'm', prompt: 'p', images: ['not-base64!!!'] }), /No readable image data/);
});

await test('resolveOllamaVisionModel auto-picks qwen2.5vl among installed models', async () => {
  mockFetch(async () => ({ ok: true, status: 200, json: async () => ({ models: [{ name: 'llava:13b' }, { name: 'qwen2.5vl:7b' }] }) }));
  const r = await resolveOllamaVisionModel(DEFAULT_OLLAMA_URL, '', {});
  assert.equal(r.ok, true);
  assert.equal(r.model, 'qwen2.5vl:7b');
  assert.equal(r.autoPicked, true);
});

await test('resolveOllamaVisionModel honors configured model with tag suffix matching', async () => {
  mockFetch(async () => ({ ok: true, status: 200, json: async () => ({ models: [{ name: 'qwen2.5vl:7b' }] }) }));
  const r = await resolveOllamaVisionModel(DEFAULT_OLLAMA_URL, 'qwen2.5vl', {});
  assert.equal(r.ok, true);
  assert.equal(r.model, 'qwen2.5vl:7b');
});

await test('resolveOllamaVisionModel errors clearly when NO vision model is installed', async () => {
  mockFetch(async () => ({ ok: true, status: 200, json: async () => ({ models: [{ name: 'llama3:8b' }] }) }));
  const r = await resolveOllamaVisionModel(DEFAULT_OLLAMA_URL, '', {});
  assert.equal(r.ok, false);
  assert.match(r.error, /no vision model is installed.*ollama pull/i);
});

await test('pickInstalledVisionModel preference order', () => {
  assert.equal(pickInstalledVisionModel(['moondream:latest', 'llava:13b']), 'llava:13b');
  assert.equal(pickInstalledVisionModel(['moondream:latest']), 'moondream:latest');
  assert.equal(pickInstalledVisionModel(['llama3:8b']), null);
});

await test('extractJson handles fenced and prose-wrapped JSON', () => {
  assert.deepEqual(extractJson('```json\n{"a":1}\n```'), { a: 1 });
  assert.deepEqual(extractJson('Sure! {"a":{"b":2}} hope that helps'), { a: { b: 2 } });
  assert.equal(extractJson('no json here'), null);
});

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
