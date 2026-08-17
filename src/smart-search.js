import { getSupabase } from './supabase-lazy.js';

// ── Session key ────────────────────────────────────────────────
function getSessionKey() {
  let key = localStorage.getItem('kco_search_session');
  if (!key) {
    key = 'sess_' + Date.now() + '_' + Math.random().toString(36).slice(2);
    localStorage.setItem('kco_search_session', key);
  }
  return key;
}

// ── LRU cache (TTL: 3 min, max 300 entries) ───────────────────
const CACHE_TTL = 180000;
const _cache = new Map();
function cacheGet(key) {
  const entry = _cache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.ts > CACHE_TTL) { _cache.delete(key); return null; }
  // Move to end (most recently used)
  _cache.delete(key);
  _cache.set(key, entry);
  return entry.data;
}
function cacheSet(key, data) {
  if (_cache.size > 300) {
    const oldest = _cache.keys().next().value;
    _cache.delete(oldest);
  }
  _cache.set(key, { data, ts: Date.now() });
}

// ── Request deduplication ─────────────────────────────────────
const _inflight = new Map();
function dedupe(key, fn) {
  if (_inflight.has(key)) return _inflight.get(key);
  const promise = fn().finally(() => _inflight.delete(key));
  _inflight.set(key, promise);
  return promise;
}

// ── Synonyms for query expansion ──────────────────────────────
const SYNONYMS = {
  phone: ['smartphone', 'mobile', 'cellphone'],
  laptop: ['notebook', 'computer', 'macbook'],
  car: ['vehicle', 'auto', 'sedan', 'suv'],
  house: ['home', 'property', 'apartment', 'villa'],
  tv: ['television', 'monitor'],
  headphones: ['earphones', 'earbuds', 'headset'],
  shoes: ['sneakers', 'footwear', 'boots'],
  watch: ['smartwatch', 'timepiece'],
  bag: ['handbag', 'purse', 'backpack'],
  camera: ['dslr', 'mirrorless'],
  motorhome: ['camper', 'rv', 'diesel pusher', 'class a', 'class b', 'class c'],
  truck: ['pickup', 'lorry', 'semi'],
  suv: ['crossover', 'jeep'],
  villa: ['mansion', 'estate'],
  apartment: ['condo', 'flat', 'studio'],
  furniture: ['chair', 'table', 'sofa', 'desk'],
  jewellery: ['jewelry', 'ring', 'necklace', 'bracelet'],
  fashion: ['clothing', 'apparel', 'clothes'],
  electronics: ['gadget', 'device', 'tech'],
  samsung: ['galaxy'],
  apple: ['iphone', 'macbook', 'ipad', 'airpods'],
  mercedes: ['benz', 'amg'],
  bmw: ['bimmer'],
  toyota: ['camry', 'corolla', 'hilux'],
  honda: ['civic', 'accord'],
};

function expandQuery(query) {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const expanded = [...words];
  for (const word of words) {
    const singular = word.endsWith('s') ? word.slice(0, -1) : word;
    if (SYNONYMS[word]) expanded.push(...SYNONYMS[word].slice(0, 3));
    if (SYNONYMS[singular] && singular !== word) expanded.push(...SYNONYMS[singular].slice(0, 2));
    if (singular !== word) expanded.push(singular);
  }
  return [...new Set(expanded)].join(' ');
}

// ── Local catalog search ─────────────────────────────────────────
// The marketplace RPC only searches database rows, but most of the
// showroom is the built-in catalog (products, trucks, motorhomes, homes),
// so we also search it locally and merge the matches. This makes search
// feel instant and complete — every product on the site is findable.
let _catalogIndex = null;
let _catalogIndexPromise = null;

function catalogHaystack(p) {
  return [
    p.title || '', p.brand || '', p.category || '', p.subcategory || '',
    Array.isArray(p.features) ? p.features.join(' ') : '',
    Array.isArray(p.tags) ? p.tags.join(' ') : '',
    (p.description || '').slice(0, 300),
  ].join(' ').toLowerCase();
}

function getCatalogIndex() {
  if (_catalogIndex) return Promise.resolve(_catalogIndex);
  if (_catalogIndexPromise) return _catalogIndexPromise;
  _catalogIndexPromise = Promise.all([
    import('./showroom-data.js'),
    import('./products-data.js'),
    import('./products-extra.js'),
    import('./truck-data.js'),
    import('./motorhome-data.js'),
  ]).then(([sd, pd, pe, td, md]) => {
    _catalogIndex = [...(sd.SHOWROOM_LISTINGS || []), ...(pd.PRODUCT_LISTINGS || []), ...(pe.PRODUCT_EXTRA_LISTINGS || []), ...(td.TRUCK_LISTINGS || []), ...(md.MOTORHOME_LISTINGS || [])]
      .filter(p => p && p.property_id)
      .map(p => ({ p, hay: catalogHaystack(p) }));
    return _catalogIndex;
  }).catch(() => { _catalogIndex = []; return _catalogIndex; });
  return _catalogIndexPromise;
}

// Warm up the catalog index in the background so the first search/suggestion
// feels instant instead of waiting for the large data chunks to download.
export function preloadCatalogIndex() {
  getCatalogIndex().catch(() => {});
}

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((resolve) => setTimeout(() => resolve(null), ms)),
  ]);
}

function toCatalogResult(p) {
  const images = Array.isArray(p.images) ? p.images : [];
  return {
    listing_id: p.property_id,
    property_id: p.property_id,
    title: p.title || 'Untitled',
    brand: p.brand,
    description: p.description,
    category: p.category,
    subcategory: p.subcategory,
    images,
    thumbnail: images[0] || null,
    price: Number(p.price) || 0,
    currency: p.currency || 'USD',
    entity_type: p.listing_type || 'product',
    is_special_order: false,
  };
}

function localCatalogSearch(query, limit) {
  if (!_catalogIndex || _catalogIndex.length === 0) return [];
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const words = q.split(/\s+/).filter(Boolean);
  const scored = [];
  for (const { p, hay } of _catalogIndex) {
    const title = (p.title || '').toLowerCase();
    const matchTitle = title.includes(q);
    const matchAny = hay.includes(q);
    const allWords = words.every(w => title.includes(w) || hay.includes(w));
    const someWords = words.some(w => title.includes(w) || hay.includes(w));
    let s = 0;
    if (title === q) s += 200;
    if (title.startsWith(q)) s += 150;
    if (matchTitle) s += 100;
    if (matchAny) s += 60;
    if (allWords) s += 50;
    else if (someWords) s += 25;
    if (s > 0) scored.push({ s, r: toCatalogResult(p) });
  }
  scored.sort((a, b) => b.s - a.s);
  return scored.slice(0, limit).map(x => x.r);
}

// ── Core search: fast marketplace + background supplier ──────
export async function smartSearch(query, limit = 30, onPartialResults) {
  if (!query || query.trim().length < 1) return { results: [], count: 0, marketplaceCount: 0, supplierCount: 0 };

  const trimmed = query.trim();
  const cacheKey = `search:${trimmed}:${limit}`;
  const cached = cacheGet(cacheKey);
  if (cached) {
    if (onPartialResults) onPartialResults(cached.results, cached);
    return cached;
  }

  return dedupe(cacheKey, async () => {
    const supabase = await getSupabase();
    const searchQuery = expandQuery(trimmed);
    const fuzzyQuery = trimmed.toLowerCase();

    // INSTANT built-in catalog matches — rendered immediately while the
    // database query is still in flight, so typing feels instant.
    getCatalogIndex().then(() => {
      const instant = localCatalogSearch(trimmed, limit);
      if (instant.length > 0 && onPartialResults) {
        onPartialResults(instant, { count: instant.length, marketplaceCount: instant.length, supplierCount: 0 });
      }
    }).catch(() => {});

    // Single fast RPC call: FTS + fuzzy + partial combined
    const { data: marketplaceResults, error } = await supabase.rpc('smart_search_quick', {
      p_query: searchQuery, p_limit: limit,
    });

    let results = [];
    if (!error && marketplaceResults && marketplaceResults.length > 0) {
      results = marketplaceResults;
    }

    // Merge built-in catalog matches (site products not stored in the DB).
    // Database rows win on duplicate ids.
    await getCatalogIndex().catch(() => {});
    const local = localCatalogSearch(trimmed, limit);
    const seenIds = new Set(results.map(r => r.property_id || r.listing_id));
    for (const r of local) {
      if (!seenIds.has(r.property_id)) { seenIds.add(r.property_id); results.push(r); }
    }

    // Deliver marketplace results immediately if callback provided
    if (onPartialResults && results.length > 0) {
      onPartialResults(results, { count: results.length, marketplaceCount: results.length, supplierCount: 0 });
    }

    // ── Background supplier search (non-blocking) ──
    let supplierResults = [];
    if (results.length < limit) {
      try {
        const { data: supplierData, error: supplierError } = await supabase.rpc('search_supplier_catalogue', {
          p_query: trimmed, p_limit: limit - results.length,
        });
        if (!supplierError && supplierData && supplierData.length > 0) {
          supplierResults = supplierData.map(item => ({
            listing_id: null,
            supplier_item_id: item.id,
            title: item.title,
            brand: item.brand,
            description: item.description,
            category: item.category,
            images: item.images,
            thumbnail: Array.isArray(item.images) && item.images.length > 0 ? item.images[0] : null,
            price: item.selling_price,
            currency: item.supplier_currency,
            entity_type: 'special_order',
            available_quantity: item.available_quantity,
            estimated_delivery_days: item.estimated_delivery_days,
            shipping_cost: item.shipping_cost,
            supplier_name: item.supplier_name,
            is_special_order: true,
          }));

          // Deliver supplier results as they arrive
          if (onPartialResults && supplierResults.length > 0) {
            onPartialResults([...results, ...supplierResults], {
              count: results.length + supplierResults.length,
              marketplaceCount: results.length,
              supplierCount: supplierResults.length,
            });
          }
        }
      } catch {}
    }

    // Record analytics (fire-and-forget)
    try {
      const sessionKey = getSessionKey();
      supabase.rpc('record_search', {
        p_query: trimmed,
        p_result_count: results.length + supplierResults.length,
        p_session_key: sessionKey,
      }).then(() => {}, () => {});
    } catch {}

    const result = {
      results: [...results, ...supplierResults],
      count: results.length + supplierResults.length,
      marketplaceCount: results.length,
      supplierCount: supplierResults.length,
      _final: true,
    };
    cacheSet(cacheKey, result);

    // Preload likely next searches (fire-and-forget)
    preloadRelatedSearches(trimmed, limit);

    return result;
  });
}

// ── Preload related searches in background ────────────────────
async function preloadRelatedSearches(query, limit) {
  const supabase = await getSupabase();
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length < 2) return;
  // Preload singular/plural variant
  const variants = new Set();
  for (const word of words) {
    if (word.endsWith('s')) variants.add(word.slice(0, -1));
    else variants.add(word + 's');
  }
  for (const v of variants) {
    const key = `search:${v}:${limit}`;
    if (!cacheGet(key) && !_inflight.has(key)) {
      dedupe(key, () =>
        supabase.rpc('smart_search_quick', { p_query: v, p_limit: limit })
          .then(({ data, error }) => { if (!error && data) cacheSet(key, data); })
          .catch(() => {})
      );
    }
  }
}

// ── Live suggestions (cached, deduped, fast) ────────────────
export async function getLiveSuggestions(query, limit = 8) {
  if (!query || query.trim().length < 1) return [];
  const trimmed = query.trim();
  const cacheKey = `sugg:${trimmed}:${limit}`;
  const cached = cacheGet(cacheKey);
  if (cached) return cached;

  return dedupe(cacheKey, async () => {
    const supabase = await getSupabase();
    const searchQuery = expandQuery(trimmed);

    // Merge built-in catalog suggestions first so every site product is
    // suggestable even if the database RPC is slow or empty.
    await getCatalogIndex().catch(() => {});
    const mapped = localCatalogSearch(trimmed, limit).map(r => ({
      id: r.property_id,
      title: r.title,
      category: r.category,
      price: r.price,
      currency: r.currency,
      entity_type: r.entity_type,
      thumbnail: r.thumbnail,
    }));
    const seenIds = new Set(mapped.map(m => m.id || m.title));

    // Database suggestions via RPC, but never block on a slow DB — local
    // catalog results are already ready.
    const rpc = await withTimeout(supabase.rpc('smart_search_quick', {
      p_query: searchQuery, p_limit: limit,
    }), 2000);

    let results = [];
    if (rpc && !rpc.error && rpc.data && rpc.data.length > 0) {
      results = rpc.data;
    } else if (rpc && rpc.error) {
      // Fallback to fuzzy
      const fuzzy = await withTimeout(supabase.rpc('smart_search_fuzzy', {
        p_query: trimmed.toLowerCase(), p_limit: limit,
      }), 1500);
      if (fuzzy && fuzzy.data) results = fuzzy.data;
    }

    for (const r of results) {
      if (!seenIds.has(r.listing_id) && !seenIds.has(r.title)) {
        seenIds.add(r.listing_id);
        mapped.push({
          id: r.listing_id,
          title: r.title,
          category: r.category,
          price: r.price,
          currency: r.currency,
          entity_type: r.entity_type,
          thumbnail: r.thumbnail,
        });
      }
    }
    cacheSet(cacheKey, mapped);
    return mapped;
  });
}

// ── Recent searches ───────────────────────────────────────────
export async function getRecentSearches(limit = 5) {
  const sessionKey = getSessionKey();
  try {
    const supabase = await getSupabase();
    const { data, error } = await supabase
      .from('search_history')
      .select('query, created_at')
      .eq('session_key', sessionKey)
      .order('created_at', { ascending: false })
      .limit(limit);
    if (!error && data) {
      const seen = new Set();
      return data.filter(d => {
        if (seen.has(d.query.toLowerCase())) return false;
        seen.add(d.query.toLowerCase());
        return true;
      });
    }
  } catch {}
  const local = JSON.parse(localStorage.getItem('kco_recent_searches') || '[]');
  return local.map(q => ({ query: q, created_at: null }));
}

export async function saveRecentSearch(query) {
  if (!query || query.trim().length < 1) return;
  const trimmed = query.trim();
  const sessionKey = getSessionKey();
  try {
    const supabase = await getSupabase();
    supabase.from('search_history').insert({ session_key: sessionKey, query: trimmed }).then(() => {}, () => {});
  } catch {}
  const local = JSON.parse(localStorage.getItem('kco_recent_searches') || '[]');
  const filtered = local.filter(q => q.toLowerCase() !== trimmed.toLowerCase());
  filtered.unshift(trimmed);
  localStorage.setItem('kco_recent_searches', JSON.stringify(filtered.slice(0, 10)));
}

export async function clearRecentSearches() {
  const sessionKey = getSessionKey();
  try {
    const supabase = await getSupabase();
    await supabase.from('search_history').delete().eq('session_key', sessionKey);
  } catch {}
  localStorage.removeItem('kco_recent_searches');
}

// ── Trending searches ────────────────────────────────────────
export async function getTrendingSearches(limit = 8) {
  try {
    const supabase = await getSupabase();
    const { data, error } = await supabase.rpc('smart_search_trending', { p_limit: limit });
    if (!error && data) return data.map(d => d.query);
  } catch {}
  return ['Samsung Galaxy', 'iPhone', 'Mercedes', 'Real Estate', 'Laptop', 'Villa', 'Beach House', 'Motorhome'];
}

// ── Voice search ─────────────────────────────────────────────
let voiceRecognition = null;
let isListening = false;

export function toggleVoiceSearch(onResult, onStateChange) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return { supported: false };
  if (isListening && voiceRecognition) { voiceRecognition.stop(); return { supported: true }; }
  voiceRecognition = new SR();
  voiceRecognition.continuous = false;
  voiceRecognition.interimResults = true;
  voiceRecognition.lang = 'en-US';
  voiceRecognition.onstart = () => { isListening = true; onStateChange?.(true); };
  voiceRecognition.onresult = (e) => {
    let transcript = '';
    for (let i = 0; i < e.results.length; i++) transcript += e.results[i][0].transcript;
    onResult?.(transcript);
  };
  voiceRecognition.onerror = () => { onStateChange?.(false); };
  voiceRecognition.onend = () => { isListening = false; onStateChange?.(false); };
  voiceRecognition.start();
  return { supported: true };
}

export function isVoiceListening() { return isListening; }

export { getSessionKey };
