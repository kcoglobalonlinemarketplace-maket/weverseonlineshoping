// ── Video frame extraction ─────────────────────────────────────────────────
// Turns an uploaded video into a small set of representative JPEG frames so
// the existing image-based AI vision pipeline (Gemini/Groq edge function) can
// scan videos exactly like photos. Frames are sampled evenly across the
// duration (intro/outro trimmed), blank and duplicate-looking frames are
// dropped, and results are cached so repeated scans never re-decode the video.

export function looksLikeVideoUrl(src) {
  const s = String(src || '');
  if (!s) return false;
  if (/^data:video\//i.test(s)) return true;
  if (s.startsWith('blob:')) return false; // unknown type — resolved by sniffing
  return /\.(mp4|webm|mov|m4v|avi|mkv|ogv)([?#]|$)/i.test(s);
}

export function isVideoFile(file) {
  if (!file) return false;
  if (file.type && String(file.type).startsWith('video/')) return true;
  return /\.(mp4|webm|mov|m4v|avi|mkv|ogv)$/i.test(String(file.name || ''));
}

function waitForVideoMeta(video, timeoutMs = 20000) {
  return new Promise((resolve) => {
    let done = false;
    const finish = (ok) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      video.removeEventListener('loadedmetadata', onMeta);
      video.removeEventListener('error', onError);
      resolve(ok);
    };
    const onMeta = () => finish(true);
    const onError = () => finish(false);
    const timer = setTimeout(() => finish(video.readyState >= 1), timeoutMs);
    video.addEventListener('loadedmetadata', onMeta, { once: true });
    video.addEventListener('error', onError, { once: true });
  });
}

function seekVideo(video, time) {
  return new Promise((resolve) => {
    let done = false;
    const finish = (ok) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      video.removeEventListener('seeked', onSeeked);
      resolve(ok);
    };
    const onSeeked = () => finish(true);
    const timer = setTimeout(() => finish(video.readyState >= 2), 8000);
    video.addEventListener('seeked', onSeeked, { once: true });
    try {
      const max = (Number.isFinite(video.duration) && video.duration > 0) ? video.duration - 0.05 : time;
      video.currentTime = Math.max(0, Math.min(time, max));
    } catch { finish(false); }
  });
}

const sigCanvas = typeof document !== 'undefined' ? document.createElement('canvas') : null;
if (sigCanvas) { sigCanvas.width = 32; sigCanvas.height = 18; }

// Returns a short signature string for a frame, or null when the frame is
// blank (solid colour / black) and should be skipped.
function frameSignature(video) {
  if (!sigCanvas) return 'nocanvas';
  try {
    const ctx = sigCanvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(video, 0, 0, sigCanvas.width, sigCanvas.height);
    const { data } = ctx.getImageData(0, 0, sigCanvas.width, sigCanvas.height);
    let min = 255, max = 0, hash = 0;
    for (let i = 0; i < data.length; i += 4) {
      const luma = (data[i] * 299 + data[i + 1] * 587 + data[i + 2] * 114) / 1000;
      if (luma < min) min = luma;
      if (luma > max) max = luma;
      hash = ((hash * 31) + Math.round(luma / 8)) >>> 0;
    }
    if (max - min < 6) return null; // essentially a solid/blank frame
    return String(hash);
  } catch {
    return 'tainted'; // canvas unreadable — still usable, just not dedupable
  }
}

function drawFrameToDataUrl(video, maxDim, quality) {
  const w = video.videoWidth, h = video.videoHeight;
  if (!w || !h) return null;
  const scale = Math.min(1, maxDim / Math.max(w, h));
  const cw = Math.max(1, Math.round(w * scale));
  const ch = Math.max(1, Math.round(h * scale));
  const canvas = document.createElement('canvas');
  canvas.width = cw;
  canvas.height = ch;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, cw, ch);
  try {
    return canvas.toDataURL('image/jpeg', quality);
  } catch {
    return null; // tainted canvas (cross-origin) — skip this frame
  }
}


const frameCache = new Map();
const MAX_CACHE_ENTRIES = 24;

// Extract up to `maxFrames` representative frames from a video (http(s) URL,
// blob: URL, data: URL or File/Blob). Returns an array of JPEG data URLs.
export async function videoToFrameDataUrls(src, {
  maxFrames = 8, maxDim = 1024, quality = 0.72, trimEdges = 0.05, onProgress = () => {},
} = {}) {
  if (typeof document === 'undefined') return [];
  const key = (src instanceof Blob) ? `blob:${src.size}:${src.type}` : String(src);
  if (frameCache.has(key)) {
    const cached = await frameCache.get(key);
    return cached ? [...cached] : [];
  }

  const job = (async () => {
    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.setAttribute('playsinline', '');
    video.crossOrigin = 'anonymous';
    let revokeUrl = null;
    let srcUrl = src;
    if (src instanceof Blob) {
      srcUrl = URL.createObjectURL(src);
      revokeUrl = srcUrl;
    } else if (typeof src === 'string' && !/^(data:|blob:)/i.test(src)) {
      // Cross-origin http(s) videos (e.g. Supabase public URLs) taint the canvas
      // and make toDataURL throw, so drawing frames yields nothing. Fetch the
      // media into a same-origin blob and decode it from an object URL instead —
      // canvas reads always succeed, so video scans never silently return zero
      // frames because of the video host's missing CORS headers.
      try {
        const remote = await fetch(src, { signal: AbortSignal.timeout(30000) });
        if (remote && remote.ok) {
          const blob = await remote.blob();
          if (blob && blob.size) {
            srcUrl = URL.createObjectURL(blob);
            revokeUrl = srcUrl;
          }
        }
      } catch { /* fall through to decoding the URL directly */ }
    }
    try {
      video.src = srcUrl;
      if (!await waitForVideoMeta(video)) return [];

      const rawDur = Number(video.duration);
      const duration = (Number.isFinite(rawDur) && rawDur > 0) ? rawDur : 60;
      const count = Math.max(1, Math.min(maxFrames, 12));
      const trim = Math.min(trimEdges * duration, 0.5);
      const start = trim;
      const end = Math.max(start + 0.1, duration - trim);
      const times = (count === 1)
        ? [(start + end) / 2]
        : Array.from({ length: count }, (_, i) => start + ((end - start) * i) / (count - 1));

      const frames = [];
      let lastSig = null;
      for (let i = 0; i < times.length; i += 1) {
        if (!await seekVideo(video, times[i])) continue;
        const sig = frameSignature(video);
        if (sig === null) continue; // blank frame
        if (sig !== 'tainted' && sig === lastSig) continue; // same scene as before
        const dataUrl = drawFrameToDataUrl(video, maxDim, quality);
        if (!dataUrl) continue;
        lastSig = sig;
        frames.push(dataUrl);
        onProgress(frames.length, count);
        if (frames.length >= count) break;
      }
      return frames;
    } catch {
      return [];
    } finally {
      try { video.pause(); } catch { /* ignore */ }
      try { video.removeAttribute('src'); video.load(); } catch { /* ignore */ }
      if (revokeUrl) URL.revokeObjectURL(revokeUrl);
    }
  })();

  frameCache.set(key, job.then((frames) => {
    if (!frames.length) frameCache.delete(key);
    return frames;
  }).catch(() => {
    frameCache.delete(key);
    return [];
  }));
  // Keep the cache small — long sessions with many videos should not grow it.
  if (frameCache.size > MAX_CACHE_ENTRIES) {
    const oldest = frameCache.keys().next().value;
    frameCache.delete(oldest);
  }

  const frames = await job;
  return frames ? [...frames] : [];
}
