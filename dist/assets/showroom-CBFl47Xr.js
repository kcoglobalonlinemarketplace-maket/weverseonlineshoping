import"./modulepreload-polyfill-B5Qt9EMX.js";import{h as y,g as $,a as b,b as w,v as L,c as H}from"./showroom-hero-Bu9B-LtQ.js";import{h as B,l as S}from"./showroom-data-DP8yT9VT.js";import"./motorhome-data-CPe8TkO3.js";import"./catalog-hidden-store-BUe_sEAx.js";const C=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","House","Homes","Duplex","Penthouse","Bungalow","Cottage","Chalet","Studio","Loft"];function p(s){return String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function E(s){return`<i data-lucide="${s}" class="w-5 h-5"></i>`}function u(){try{return new URLSearchParams(window.location.search).get("cat")||"real-estate"}catch{return"real-estate"}}function M(s,o,n){const e=document.getElementById("kco-catbar");e&&(e.innerHTML=`<a class="kco-cat ${o?"":"active"} ${n?"veh":""}" href="#" data-type="">All Types</a>`+s.map(r=>`<a class="kco-cat ${o===r?"active":""} ${n?"veh":""}" href="#" data-type="${p(r)}">${p(r)}</a>`).join(""),e.querySelectorAll(".kco-cat").forEach(r=>{r.addEventListener("click",c=>{c.preventDefault(),h(u(),r.dataset.type||"")})}))}function A(s,o){const n=document.getElementById("kco-brand-mast")||document.querySelector(".kco-head");if(!n)return;const e=s?"re":"veh";n.innerHTML=`
    <span class="kco-eyebrow"><i data-lucide="layout-grid" class="w-3.5 h-3.5"></i> ${s?"Property Brief — Houses &amp; Real Estate":"Auto Brief — Cars &amp; Trucks"}</span>
    <h1 id="kco-cat-title">${s?"🏡 Houses &amp; Real Estate":"🚗 Cars &amp; Trucks"}</h1>
    <p id="kco-cat-sub">${s?`Your dream home started here. ${o.length} professional listings — every house, apartment, villa and more, grouped by type.`:`Your next ride starts here. ${o.length} professional listings — every car, truck, bus, motorhome and more, grouped by type.`}</p>
    <div class="kco-mast-stats">
      <span class="kco-mast-stat ${e}">${o.length} Live Listings</span>
      <span class="kco-mast-stat ${e}">✓ AI-Scanned Specs</span>
      <span class="kco-mast-stat ${e}">⚡ Updated Live</span>
    </div>`}function h(s,o){const n=document.getElementById("kco-results");if(!n)return;y();const e=s==="real-estate",r=e?$():b();A(e,r),document.querySelectorAll(".kco-tab").forEach(t=>t.classList.toggle("active",t.dataset.cat===s));const c=new Map,i=[];for(const t of r){const a=e?w(t):L(t);c.has(a)||(c.set(a,[]),i.push(a)),c.get(a).push(t)}const m=e?C:["Car","Truck","Bus","Motorhome / RV","Motorcycle","Boat / Marine"];i.sort((t,a)=>{const l=m.indexOf(t),d=m.indexOf(a),f=l===-1?1e3:l,v=d===-1?1e3:d;return f!==v?f-v:c.get(a).length-c.get(t).length});const g=!e;M(i,o||"",g);const k=(o?i.filter(t=>t===o):i).map(t=>{const a=c.get(t),l=a.map(d=>H(d,e?"house":"vehicle","kco-card")).join("");return`
      <section class="kco-group">
        <div class="kco-group-head ${g?"veh":""}">
          <span class="kco-gh-ic">${E(e?"home":"car-front")}</span>
          <h2>${p(t)}</h2>
          <span>${a.length} listing${a.length===1?"":"s"}</span>
        </div>
        <div class="kco-grid">${l}</div>
      </section>`}).join("");n.innerHTML=k||'<div class="kco-empty">No items in this group yet.</div>',window.lucide&&lucide.createIcons()}function O(){B(),h(u(),""),S().then(()=>h(u(),"")).catch(()=>{}),window.addEventListener("showroom-categories-ready",()=>h(u(),""))}O();
