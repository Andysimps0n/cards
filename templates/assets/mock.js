/* 크레파스 미니 목업: Mock.render("modal"|"sheet"|"drawer"|"toast"|"tooltip") */
(function () {
  const app = (burger) => `<div class="app">
      <div class="bar">${burger ? '<div class="burger"><i></i><i></i><i></i></div>' : ''}<span class="ttl"></span><span class="sp"></span><span class="dot"></span></div>
      <div class="hero"></div><div class="ln m"></div><div class="ln s"></div>
      <div class="cards"><i></i><i></i></div><div class="ln m"></div><div class="ln"></div><div class="ln s"></div></div>`;
  const phone = (inner, burger) => `<div class="phone"><div class="scr">${app(burger)}${inner}</div><div class="notch"></div></div>`;
  const M = {
    modal: () => phone(`<div class="scrim"></div>
      <div class="panel dialog"><span class="ttl"></span><span class="ln"></span><span class="ln" style="width:75%"></span>
      <div class="btns"><i></i><i></i></div></div>`),
    sheet: () => phone(`<div class="scrim light"></div>
      <div class="panel sheet"><span class="grab"></span><span class="ttl" style="width:45%"></span>
      <div class="opt"><b class="on"></b><span class="ln"></span></div><div class="opt"><b></b><span class="ln" style="max-width:70%"></span></div>
      <div class="opt"><b class="on"></b><span class="ln" style="max-width:80%"></span></div><div class="go"></div></div>`),
    drawer: () => phone(`<div class="scrim"></div>
      <div class="panel drawer"><div class="me"><b></b><span class="ttl" style="width:70%"></span></div>
      <div class="item on"><b></b><span class="ln"></span></div><div class="item"><b></b><span class="ln" style="max-width:70%"></span></div>
      <div class="item"><b></b><span class="ln" style="max-width:85%"></span></div><div class="item"><b></b><span class="ln" style="max-width:60%"></span></div>
      <div class="item"><b></b><span class="ln" style="max-width:75%"></span></div></div>`, true),
    toast: () => phone(`<div class="toast"><span class="ck">✓</span>저장되었습니다</div><div class="timer"><i></i></div>`),
    tooltip: () => `<div class="browser"><div class="win"><div class="top"><b></b><b></b><b></b><span class="url"></span></div>
      <div class="form"><div class="lb"><span class="ln"></span><span class="q">?</span></div><div class="inp"></div><div class="inp"></div></div>
      <div class="tip">8자 이상 입력해주세요</div>
      <svg class="cursor" style="left:168px; top:196px" viewBox="0 0 44 54"><path d="M4 3 L4 42 L14 33 L21 50 L28 47 L21 30 L35 30 Z" fill="var(--white)" stroke="var(--ink)" stroke-width="4" stroke-linejoin="round"/></svg>
      </div></div>`
  };
  window.Mock = { render: (k) => (M[k] || M.modal)() };
})();
