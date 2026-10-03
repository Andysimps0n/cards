function AppChrome({ burger }) {
  return (
    <div className="app">
      <div className="bar">
        {burger && (
          <div className="burger"><i /><i /><i /></div>
        )}
        <span className="ttl" />
        <span className="sp" />
        <span className="dot" />
      </div>
      <div className="hero" />
      <div className="ln m" />
      <div className="ln s" />
      <div className="cards"><i /><i /></div>
      <div className="ln m" />
      <div className="ln" />
      <div className="ln s" />
    </div>
  );
}

function Phone({ burger, children }) {
  return (
    <div className="phone">
      <div className="scr">
        <AppChrome burger={burger} />
        {children}
      </div>
      <div className="notch" />
    </div>
  );
}

function Modal() {
  return (
    <Phone>
      <div className="scrim" />
      <div className="panel dialog">
        <span className="ttl" />
        <span className="ln" />
        <span className="ln" style={{ width: "75%" }} />
        <div className="btns"><i /><i /></div>
      </div>
    </Phone>
  );
}

function Sheet() {
  return (
    <Phone>
      <div className="scrim light" />
      <div className="panel sheet">
        <span className="grab" />
        <span className="ttl" style={{ width: "45%" }} />
        <div className="opt"><b className="on" /><span className="ln" /></div>
        <div className="opt"><b /><span className="ln" style={{ maxWidth: "70%" }} /></div>
        <div className="opt"><b className="on" /><span className="ln" style={{ maxWidth: "80%" }} /></div>
        <div className="go" />
      </div>
    </Phone>
  );
}

function Drawer() {
  return (
    <Phone burger>
      <div className="scrim" />
      <div className="panel drawer">
        <div className="me"><b /><span className="ttl" style={{ width: "70%" }} /></div>
        <div className="item on"><b /><span className="ln" /></div>
        <div className="item"><b /><span className="ln" style={{ maxWidth: "70%" }} /></div>
        <div className="item"><b /><span className="ln" style={{ maxWidth: "85%" }} /></div>
        <div className="item"><b /><span className="ln" style={{ maxWidth: "60%" }} /></div>
        <div className="item"><b /><span className="ln" style={{ maxWidth: "75%" }} /></div>
      </div>
    </Phone>
  );
}

function Toast() {
  return (
    <Phone>
      <div className="toast"><span className="ck">✓</span>저장되었습니다</div>
      <div className="timer"><i /></div>
    </Phone>
  );
}

function Tooltip() {
  return (
    <div className="browser">
      <div className="win">
        <div className="top"><b /><b /><b /><span className="url" /></div>
        <div className="form">
          <div className="lb"><span className="ln" /><span className="q">?</span></div>
          <div className="inp" />
          <div className="inp" />
        </div>
        <div className="tip">8자 이상 입력해주세요</div>
        <svg className="cursor" style={{ left: 168, top: 196 }} viewBox="0 0 44 54">
          <path d="M4 3 L4 42 L14 33 L21 50 L28 47 L21 30 L35 30 Z" fill="var(--white)" stroke="var(--ink)" strokeWidth="4" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

const KINDS = { modal: Modal, sheet: Sheet, drawer: Drawer, toast: Toast, tooltip: Tooltip };

export function Mock({ kind = "modal" }) {
  const View = KINDS[kind] || Modal;
  return <View />;
}
