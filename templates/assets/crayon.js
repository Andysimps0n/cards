/* 크레파스 모험일지 — 공용 스크립트
   1) 크레파스 SVG 필터 주입  2) 손그림 아이콘  3) 시리즈(퀘스트) 데이터
   4) URL 쿼리 → data-field 바인딩  (예: cover.html?series=talk&no=1&title=...) */
(function () {
  const NS = "http://www.w3.org/2000/svg";

  /* ---------- 1. Filters ---------- */
  const defs = `
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <!-- 면(fill)용: 울퉁불퉁한 가장자리 + 왁스 입자 -->
    <filter id="wax" x="-15%" y="-15%" width="130%" height="130%">
      <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="4" result="warp"/>
      <feDisplacementMap in="SourceGraphic" in2="warp" scale="9" xChannelSelector="R" yChannelSelector="G" result="rough"/>
      <feTurbulence type="fractalNoise" baseFrequency="0.9 0.35" numOctaves="2" seed="11" result="grain"/>
      <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.6 2.05" result="mask"/>
      <feComposite in="rough" in2="mask" operator="in"/>
    </filter>
    <!-- 선(stroke)용: 가는 흔들림 + 끊기는 왁스 -->
    <filter id="wax-stroke" x="-15%" y="-15%" width="130%" height="130%">
      <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="2" result="warp"/>
      <feDisplacementMap in="SourceGraphic" in2="warp" scale="5" xChannelSelector="R" yChannelSelector="G" result="rough"/>
      <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="1" seed="5" result="grain"/>
      <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.2 1.95" result="mask"/>
      <feComposite in="rough" in2="mask" operator="in"/>
    </filter>
    <!-- 질감 없이 흔들림만 (박스 테두리 등) -->
    <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="8" result="warp"/>
      <feDisplacementMap in="SourceGraphic" in2="warp" scale="5" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <!-- 종이 질감 -->
    <filter id="paper-grain"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" seed="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.55  0 0 0 0 0.47  0 0 0 0 0.38  0 0 0 0.32 0"/></filter>
  </defs></svg>`;

  /* ---------- 2. Icons (viewBox 0 0 100 100, stroke 기반) ---------- */
  const ICON = {
    scroll:   '<path d="M28 22h44c6 0 9 4 9 9v4H37"/><path d="M28 22c-6 0-9 4-9 9s3 9 9 9h9v38c0 5-4 8-9 8"/><path d="M37 40v38c0 5 4 8 9 8h26c5 0 9-3 9-8V35"/><path d="M48 54h22M48 66h16"/>',
    magnifier:'<circle cx="43" cy="43" r="22"/><path d="M59 59l20 20"/><path d="M33 38c2-5 6-8 11-8"/>',
    cloud:    '<path d="M28 70c-9 0-15-6-15-14s7-14 15-13c2-10 10-17 21-17 11 0 19 8 20 18 8 0 14 6 14 13s-6 13-14 13z"/><path d="M50 44l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/>',
    telescope:'<path d="M18 52l52-22 7 16-52 22z"/><path d="M70 30l8-4 7 16-8 4"/><path d="M44 58l-10 26M50 56l10 28"/><path d="M14 54l4 9"/>',
    key:      '<circle cx="34" cy="50" r="15"/><circle cx="34" cy="50" r="5"/><path d="M49 50h36M72 50v12M82 50v9"/>',
    flag:     '<path d="M28 88V14"/><path d="M28 18c12-6 22 6 34 0s16-2 20 0v30c-4-2-8-6-20 0s-22-6-34 0"/>',
    dice:     '<rect x="20" y="20" width="60" height="60" rx="14"/><circle cx="37" cy="37" r="4"/><circle cx="63" cy="63" r="4"/><circle cx="50" cy="50" r="4"/><circle cx="63" cy="37" r="4"/><circle cx="37" cy="63" r="4"/>',
    compass:  '<circle cx="50" cy="50" r="34"/><path d="M50 22l9 28-9 28-9-28z"/><path d="M50 10v6M50 84v6M10 50h6M84 50h6"/>',
    star:     '<path d="M50 14l10 23 25 2-19 16 6 25-22-14-22 14 6-25-19-16 25-2z"/>',
    x:        '<path d="M30 30l40 40M70 30L30 70"/>',
    pin:      '<path d="M50 88s-26-26-26-46a26 26 0 0 1 52 0c0 20-26 46-26 46z"/><circle cx="50" cy="42" r="9"/>',
    map:      '<path d="M14 24l22-8 28 10 22-8v58l-22 8-28-10-22 8z"/><path d="M36 16v58M64 26v58"/>',
    arrow:    '<path d="M14 52c20-6 46-6 66-2"/><path d="M66 36l16 14-18 12"/>'
  };
  function icon(name, opt = {}) {
    const c = opt.color || "var(--ink)", w = opt.width || 6;
    return `<svg viewBox="0 0 100 100" class="${opt.cls || ''}" style="${opt.style || ''}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" filter="url(#wax-stroke)">${ICON[name] || ''}</svg>`;
  }

  /* ---------- 3. Series (퀘스트 타입) ---------- */
  const SERIES = {
    talk:   { pillar: "ui",  name: "AI한테 이렇게 말해", type: "주문서 퀘스트", code: "SPELL",  icon: "scroll" },
    why:    { pillar: "ui",  name: "이 디자인 왜 예쁨?",   type: "탐사 퀘스트",   code: "SCOUT",  icon: "magnifier" },
    whatif: { pillar: "ui",  name: "만약에 UI",           type: "상상 퀘스트",   code: "DREAM",  icon: "cloud" },
    weekly: { pillar: "ai",  name: "이번 주 AI",          type: "소식 퀘스트",   code: "NEWS",   icon: "telescope" },
    cando:  { pillar: "ai",  name: "이것도 AI로 돼?",      type: "발견 퀘스트",   code: "LOOT",   icon: "key" },
    log:    { pillar: "dev", name: "개발 모험일지",        type: "메인 퀘스트",   code: "MAIN",   icon: "flag" },
    silly:  { pillar: "dev", name: "주간 쓸모없는 앱",      type: "챌린지 퀘스트", code: "CHALLENGE", icon: "dice" }
  };

  /* 배지: 크레파스로 칠한 스탬프 원 + 이중 테두리 + 아이콘 */
  function badge(key) {
    const s = SERIES[key] || SERIES.talk;
    return `<svg viewBox="0 0 140 140">
      <path d="M70 8c30 0 60 22 62 58 2 36-26 66-62 66S6 106 8 70 38 8 70 8z" fill="var(--p)" filter="url(#wax)"/>
      <path d="M70 18c26 0 51 20 52 50 1 30-22 55-52 55S17 100 18 70 44 18 70 18z" fill="none" stroke="var(--p-deep)" stroke-width="4" stroke-dasharray="2 9" stroke-linecap="round" filter="url(#wax-stroke)"/>
      <g transform="translate(22 22) scale(.96)">${'<g fill="none" stroke="var(--ink)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" filter="url(#wax-stroke)">' + ICON[s.icon] + '</g>'}</g>
    </svg>`;
  }

  /* root: document(카드 한 장) 또는 ShadowRoot(작업판의 카드 하나).
     작업판은 글자가 HTML에 이미 있으므로 쿼리로 덮어쓰지 않는다. */
  function mount(root, opt) {
    const bindQuery = !opt || opt.bindQuery !== false;
    const q = bindQuery ? new URLSearchParams(location.search) : new URLSearchParams();
    const all = (sel) => root.querySelectorAll(sel);
    const holder = document.createElement("template");
    holder.innerHTML = defs;
    (root === document ? document.body : root).prepend(holder.content);
    all(".post").forEach(p => {
      if (!p.querySelector(".grain")) p.insertAdjacentHTML("afterbegin",
        '<svg class="grain" width="100%" height="100%"><rect width="100%" height="100%" filter="url(#paper-grain)"/></svg>');
    });
    const post = root.querySelector(".post");
    const sKey = q.get("series") || (root === document ? document.body.dataset.series : post && post.dataset.series);
    if (sKey && SERIES[sKey]) {
      const s = SERIES[sKey];
      all(".post").forEach(p => p.dataset.pillar = (q.get("series") ? s.pillar : (p.dataset.pillar || s.pillar)));
      all("[data-series-name]").forEach(e => e.textContent = s.name);
      all("[data-series-type]").forEach(e => e.textContent = s.type);
      all("[data-series-code]").forEach(e => e.textContent = s.code);
      all("[data-badge]").forEach(e => e.innerHTML = badge(sKey));
    }
    all("[data-badge-key]").forEach(e => e.innerHTML = badge(e.dataset.badgeKey));
    all("[data-icon]").forEach(e => e.innerHTML = icon(e.dataset.icon, { color: e.dataset.color, width: e.dataset.w }));
    const no = q.get("no");
    if (no) all("[data-no]").forEach(e => e.textContent = String(no).padStart(2, "0"));
    if (bindQuery) q.forEach((v, k) => all(`[data-field="${k}"]`).forEach(e => e.innerHTML = v));
    if (root === document) document.fonts.ready.then(() => document.body.classList.add("ready"));
  }

  window.Crayon = { icon, badge, SERIES, ICON, mount };

  document.addEventListener("DOMContentLoaded", () => {
    if (document.body.dataset.board) return;
    if (document.querySelector(".post")) mount(document);
  });
})();
