import"./modulepreload-polyfill-B5Qt9EMX.js";import{supabase as x,SUPABASE_URL as v}from"./supabase-client-DSkAnHxH.js";import{getCurrentUser as S}from"./auth-CtTDfG3h.js";/* empty css                                       */const j=180*1024*1024,U=["video/mp4","video/quicktime","video/webm","video/m4v","video/x-m4v","video/x-msvideo","video/x-matroska","application/octet-stream"];let t={user:null,file:null,objectUrl:null,phase:"idle",progress:0,stageText:"",result:null,error:null,question:""};function f(e){const s=document.getElementById("toast");document.getElementById("toast-msg").textContent=e,s.classList.remove("translate-y-20","opacity-0"),clearTimeout(s._t),s._t=setTimeout(()=>s.classList.add("translate-y-20","opacity-0"),3500),window.lucide&&lucide.createIcons()}function E(e){const s=String(e?.name||"").toLowerCase(),n=s.includes(".")?s.split(".").pop():"";return U.includes(e?.type)?!0:["mp4","mov","webm","m4v","avi","mkv"].includes(n)}function h(e,s){const n=document.getElementById("admin-root");n.innerHTML=`
    <div class="flex items-center justify-center py-20">
      <div class="text-center max-w-md">
        <div class="w-14 h-14 mx-auto bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mb-4">
          <i data-lucide="shield-alert" class="w-7 h-7 text-red-400"></i>
        </div>
        <h2 class="text-white font-black text-xl mb-2">${e}</h2>
        <p class="text-gray-400 text-sm mb-6">${s}</p>
        <a href="/auth.html?redirect=/admin-video-scanner.html" class="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold py-2.5 px-5 rounded-xl text-sm btn-press">Sign In</a>
      </div>
    </div>`,window.lucide&&lucide.createIcons()}function _(){window.lucide&&lucide.createIcons()}function $(e){if(!e)return"0 MB";const s=e/(1024*1024);return s>=1024?`${(e/(1024*1024*1024)).toFixed(2)} GB`:`${s.toFixed(1)} MB`}function m(){const e=document.getElementById("admin-root");e.innerHTML=`
    <div class="max-w-5xl mx-auto space-y-6" id="scanner-app">
      ${B()}
      ${M()}
      ${I()}
    </div>`,_(),R()}function B(){return`
    <div class="glass rounded-2xl border border-violet-500/15 p-5 fade-in" id="hero">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div class="flex items-center gap-2 text-violet-300">
            <i data-lucide="clapperboard" class="w-4 h-4"></i>
            <span class="text-[11px] font-bold uppercase tracking-widest">Video-only analysis</span>
          </div>
          <h2 class="text-white font-black text-2xl mt-1">AI Video Scanner</h2>
          <p class="text-gray-400 text-sm mt-1">Upload one real video clip (mp4, mov or webm). Gemini watches the motion and listens to the audio, then reports exactly what the video shows.</p>
        </div>
        <div class="flex flex-col items-center gap-1 bg-violet-500/10 border border-violet-500/20 rounded-xl px-5 py-3">
          <i data-lucide="film" class="w-5 h-5 text-violet-300"></i>
          <span class="text-[10px] text-gray-400 uppercase tracking-wider">Max size</span>
          <span class="text-white font-bold text-sm">180 MB</span>
        </div>
      </div>
    </div>`}function M(){const e=t.phase==="uploading"||t.phase==="scanning",s=t.file?`
    <div class="flex items-center gap-4">
      <div class="relative w-36 h-24 rounded-xl overflow-hidden bg-black border border-white/10 shrink-0">
        <video src="${t.objectUrl}" class="w-full h-full object-cover" muted playsinline></video>
      </div>
      <div class="min-w-0 flex-1">
        <p class="text-white font-bold text-sm truncate">${o(t.file.name)}</p>
        <p class="text-gray-400 text-xs mt-0.5">${$(t.file.size)} • ${t.file.type||"video"}</p>
        <div class="mt-3 flex items-center gap-2">
          <button id="btn-scan" class="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:pointer-events-none text-white font-bold py-2.5 px-5 rounded-xl text-sm btn-press">
            <i data-lucide="${t.phase==="scanning"?"loader-2":"scan-line"}" class="${t.phase==="scanning"?"animate-spin ":""}w-4 h-4"></i>
            ${t.phase==="scanning"?"Analyzing…":"Upload & Scan Video"}
          </button>
          <button id="btn-clear" class="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition text-xs font-semibold py-2.5 px-3 rounded-lg">
            <i data-lucide="x" class="w-4 h-4"></i> Remove
          </button>
        </div>
      </div>
    </div>`:"";return`
    <div class="glass rounded-2xl border border-violet-500/15 p-5 fade-in">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-white font-bold text-sm flex items-center gap-2"><i data-lucide="upload-cloud" class="w-4 h-4 text-violet-400"></i> Upload Video</h3>
        <span class="text-[10px] text-gray-500 uppercase tracking-wider">Step 1 · Choose file</span>
      </div>

      ${t.error?`
        <div class="mb-4 rounded-xl border border-red-500/25 bg-red-500/10 p-3 text-xs text-red-300 flex items-start gap-2">
          <i data-lucide="circle-alert" class="w-4 h-4 text-red-400 mt-0.5 shrink-0"></i>
          <span>${o(t.error)}</span>
        </div>`:""}

      <input type="file" id="file-input" accept="video/mp4,video/quicktime,video/webm,video/x-m4v,video/x-msvideo,video/x-matroska,.mp4,.mov,.webm,.m4v" class="hidden">

      ${t.file?s:`
      <label for="file-input" id="drop-zone" class="block cursor-pointer rounded-xl border-2 border-dashed border-violet-500/30 hover:border-violet-500/60 transition bg-violet-500/5 hover:bg-violet-500/10 p-10 text-center ${e?"pointer-events-none opacity-40":""}">
        <div class="w-14 h-14 mx-auto rounded-2xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center mb-4">
          <i data-lucide="video" class="w-7 h-7 text-violet-400"></i>
        </div>
        <p class="text-white font-bold text-sm">Drag a video here, or <span class="text-violet-400 underline">browse</span></p>
        <p class="text-gray-500 text-xs mt-2">MP4, MOV or WebM up to 180&nbsp;MB — video only, photos are ignored.</p>
      </label>`}

      ${t.phase==="uploading"||t.phase==="scanning"?k():""}
    </div>`}function k(){t.phase==="uploading"&&t.progress;const e=t.phase==="scanning"||t.progress>=100;return`
    <div id="prog-holder" class="mt-4">
      <div class="flex items-center justify-between text-xs mb-1.5">
        <span id="stage-text" class="text-gray-300 flex items-center gap-1.5">
          <i data-lucide="${e?"sparkles":"loader-2"}" class="${e?"":"animate-spin"} w-3.5 h-3.5 text-violet-400"></i>
          ${o(t.stageText||(e?"Analyzing video…":`Uploading… ${Math.round(t.progress)}%`))}
        </span>
        <span class="text-gray-500 font-mono">${e?"—":Math.round(t.progress)+"%"}</span>
      </div>
      <div class="h-2 rounded-full bg-white/5 overflow-hidden">
        <div class="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full progress-stripes transition-all duration-300" style="width:${e?100:Math.max(3,t.progress)}%"></div>
      </div>
    </div>`}function I(){if(t.phase!=="done"||!t.result)return"";const e=t.result,s=e.status==="ok",n=s?'<span class="inline-flex items-center gap-1.5 bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"><i data-lucide="check-circle" class="w-3.5 h-3.5"></i> Analyzed</span>':'<span class="inline-flex items-center gap-1.5 bg-amber-500/15 text-amber-300 border border-amber-500/25 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"><i data-lucide="help-circle" class="w-3.5 h-3.5"></i> Could not determine</span>',i=e.confidence||0,a=i>=70?"bg-emerald-500":i>=35?"bg-amber-500":"bg-red-500",l=i>=70?"text-emerald-400":i>=35?"text-amber-400":"text-red-400",g=(e.observations||[]).map(r=>`
    <div class="flex items-start gap-3 py-2.5 border-b border-white/5 last:border-0">
      <span class="shrink-0 text-[10px] font-mono font-bold bg-violet-500/15 text-violet-300 border border-violet-500/20 rounded px-2 py-1 mt-0.5">${o(r.time||"00:00")}</span>
      <span class="text-sm text-gray-300">${o(r.note||"")}</span>
    </div>`).join(""),b=(e.sections||[]).map(r=>`
    <div class="flex items-start gap-3 py-2.5 border-b border-white/5 last:border-0">
      <span class="shrink-0 text-[10px] font-mono font-bold bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-500/20 rounded px-2 py-1 mt-0.5">${o(r.time||"00:00")}</span>
      <div>
        <p class="text-sm font-semibold text-white">${o(r.title||"")}</p>
        ${r.description?`<p class="text-xs text-gray-400 mt-0.5">${o(r.description)}</p>`:""}
      </div>
    </div>`).join(""),p=(e.warnings||[]).map(r=>`
    <div class="flex items-start gap-2 text-xs text-amber-300 py-1">
      <i data-lucide="triangle-alert" class="w-3.5 h-3.5 mt-0.5 shrink-0"></i><span>${o(r)}</span>
    </div>`).join("");return`
    <div class="glass rounded-2xl border border-violet-500/15 p-5 fade-in">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h3 class="text-white font-bold text-sm flex items-center gap-2"><i data-lucide="clipboard-list" class="w-4 h-4 text-violet-400"></i> Scan Result</h3>
        ${n}
      </div>

      ${e.reason_if_cannot_determine&&!s?`
        <div class="rounded-xl border border-amber-500/25 bg-amber-500/10 p-4 mb-4">
          <p class="text-sm text-amber-200">${o(e.reason_if_cannot_determine)}</p>
        </div>`:""}

      <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div>${L(i,a,l)}</div>
        <div>${C(e)}</div>
      </div>

      ${e.overall_analysis?`
        <div class="rounded-xl bg-white/[.03] border border-white/10 p-4 mb-4">
          <p class="text-sm text-gray-200 leading-relaxed">${o(e.overall_analysis)}</p>
        </div>`:""}

      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 flex items-center gap-1.5"><i data-lucide="eye" class="w-3.5 h-3.5 text-violet-400"></i> What I saw</h4>
          ${g||'<p class="text-xs text-gray-500 py-2">No timestamped observations were returned.</p>'}
        </div>
        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 flex items-center gap-1.5"><i data-lucide="camera" class="w-3.5 h-3.5 text-fuchsia-400"></i> Sections</h4>
          ${b||'<p class="text-xs text-gray-500 py-2">No sections were returned.</p>'}
        </div>
      </div>

      ${e.audio_notes?`
        <div class="mt-4 rounded-xl bg-white/[.03] border border-white/10 p-4 flex items-start gap-3">
          <i data-lucide="ear" class="w-4 h-4 text-violet-400 mt-0.5 shrink-0"></i>
          <div>
            <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Audio</p>
            <p class="text-xs text-gray-300">${o(e.audio_notes)}</p>
          </div>
        </div>`:""}

      ${p?`
        <div class="mt-4 rounded-xl border border-amber-500/25 bg-amber-500/10 p-4">
          <p class="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-2">Warnings</p>
          ${p}
        </div>`:""}
    </div>`}function L(e,s,n){return`
    <div class="rounded-xl bg-white/[.03] border border-white/10 p-4">
      <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Confidence</p>
      <div class="flex items-center gap-3">
        <span class="text-3xl font-black ${n}">${e}</span>
        <span class="text-gray-500 text-xs mt-1.5">/ 100</span>
      </div>
      <div class="h-2.5 rounded-full bg-white/5 overflow-hidden mt-3">
        <div class="h-full ${s} rounded-full transition-all duration-500" style="width:${e}%"></div>
      </div>
      <p class="text-[10px] ${n} font-bold mt-2 uppercase tracking-wide">${A(e)}</p>
    </div>`}function A(e){return e>=70?"High confidence":e>=35?"Moderate confidence":"Low confidence"}function C(e){return`
    <div class="rounded-xl bg-white/[.03] border border-white/10 p-4">
      <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Subject</p>
      <p class="text-lg font-bold text-white leading-snug">${o(e.label||"—")}</p>
      <div class="mt-3 flex items-center gap-2">
        <span class="inline-flex items-center gap-1.5 ${e.detected?"bg-emerald-500/15 text-emerald-300 border border-emerald-500/25":"bg-gray-500/15 text-gray-400 border border-gray-500/25"} rounded-full px-3 py-1 text-[11px] font-bold">
          <i data-lucide="${e.detected?"check":"x"}" class="w-3.5 h-3.5"></i>
          ${e.detected?"Subject detected":"No clear subject"}
        </span>
      </div>
    </div>`}function o(e){return String(e??"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s])}function u(e,s={}){Object.assign(t,{phase:e,...s}),m()}async function P(e){const n=String(e.name||"clip.mp4").slice(0,120).replace(/[^\w.\-]+/g,"_"),i=`scans/${Date.now()}-${Math.random().toString(36).slice(2,8)}-${n}`,a=`${v.replace(/\/+$/,"")}/functions/v1/video-scanner`,{data:{session:l}}=await x.auth.getSession(),g=l?.access_token||"",b=await T(a,{method:"POST",headers:{Authorization:`Bearer ${g}`,"Content-Type":"application/json"},body:JSON.stringify({action:"upload_token",path:i,content_type:e.type||"video/mp4"})});return await new Promise((p,r)=>{const d=new XMLHttpRequest;d.open("PUT",b.url,!0),d.setRequestHeader("Content-Type",e.type||"video/mp4"),d.upload.onprogress=c=>{c.lengthComputable&&c.total&&(t.progress=15+Math.round(c.loaded/c.total*75),document.querySelector("#scanner-app")&&w())},d.onload=()=>{d.status>=200&&d.status<300?(t.progress=90,t.stageText="Video uploaded. Asking Gemini…",w(),p()):r(new Error(`Upload failed (HTTP ${d.status}).`))},d.onerror=()=>r(new Error("Upload failed — check your connection.")),d.onabort=()=>r(new Error("Upload aborted.")),d.send(e)}),i}function w(){const e=document.getElementById("prog-holder");e&&(e.innerHTML=k());const s=document.getElementById("stage-text");s&&(s.textContent=t.stageText)}async function T(e,s){let n;try{n=await fetch(e,s)}catch{throw new Error("Could not reach the scanner service.")}let i={};try{i=await n.json()}catch{}if(!n.ok||i.error)throw new Error(i.error||`Request failed (${n.status}).`);return i}async function O(){if(!t.file||t.phase==="uploading"||t.phase==="scanning")return;t.error=null,u("uploading",{progress:5,stageText:"Preparing upload…",result:null});let e;try{e=await P(t.file),u("scanning",{progress:92,stageText:"Analyzing video with AI…",result:null});const s=`${v.replace(/\/+$/,"")}/functions/v1/video-scanner`,{data:{session:n}}=await x.auth.getSession(),i=n?.access_token||"",a=await T(s,{method:"POST",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"},body:JSON.stringify({action:"scan",path:e,model:"gemini-flash-latest",question:t.question.trim()||void 0})});u("done",{result:a.result||{status:"cannot_determine"},progress:100,stageText:"Done"})}catch(s){if(t.error=s.message,u(t.file?"ready":"idle",{error:s.message}),e)try{await fetch(`${v.replace(/\/+$/,"")}/functions/v1/video-scanner`,{method:"POST",headers:{Authorization:`Bearer ${(await x.auth.getSession()).data.session?.access_token||""}`,"Content-Type":"application/json"},body:JSON.stringify({action:"cleanup",path:e})})}catch{}}}function z(){t.objectUrl&&URL.revokeObjectURL(t.objectUrl),t.file=null,t.objectUrl=null,t.phase="idle",t.progress=0,t.stageText="",t.result=null,t.error=null,m()}function y(e){if(!(!e||t.phase==="uploading"||t.phase==="scanning")){if(!E(e)){f("Please choose a video file (MP4, MOV or WebM).");return}if(e.size>j){f(`Video is too large (${$(e.size)}). Max is 180 MB.`);return}t.objectUrl&&URL.revokeObjectURL(t.objectUrl),t.file=e,t.objectUrl=URL.createObjectURL(e),t.phase="ready",t.error=null,t.result=null,m()}}function R(){const e=document.getElementById("file-input");e&&e.addEventListener("change",a=>y(a.target.files?.[0]));const s=document.getElementById("drop-zone");s&&(["dragenter","dragover"].forEach(a=>s.addEventListener(a,l=>{l.preventDefault()})),s.addEventListener("drop",a=>{a.preventDefault();const l=a.dataTransfer?.files?.[0];l&&y(l)}));const n=document.getElementById("btn-scan");n&&n.addEventListener("click",O);const i=document.getElementById("btn-clear");i&&i.addEventListener("click",z)}async function q(){if(t.user=await S(),!t.user){h("Access denied","Please sign in to use the video scanner.");return}const{data:e}=await x.rpc("is_current_user_admin");if(!e){h("Admins only","This account does not have administrator privileges.");return}m()}q();
