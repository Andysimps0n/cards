/* 넘기고 펼치는 UI 목업 5개. 공용 Phone은 export가 없어서 여기서 .phone/.scr/.notch만 씁니다. */

function PhoneFrame({ children }) {
  return (
    <div className="phone">
      <div className="scr">
        <div className="xm-screen">{children}</div>
      </div>
      <div className="notch" />
    </div>
  );
}

function Cursor({ style }) {
  return (
    <svg className="cursor" style={style} viewBox="0 0 44 54">
      <path
        d="M4 3 L4 42 L14 33 L21 50 L28 47 L21 30 L35 30 Z"
        fill="var(--white)"
        stroke="var(--ink)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TabMock() {
  return (
    <PhoneFrame>
      <span className="xm-ttl" />
      <span className="xm-ln xm-w80" />
      <div className="xm-tabs">
        <span className="xm-tab"><span className="xm-ln xm-w70" /></span>
        <span className="xm-tab xm-tab-on"><span className="xm-txt">상의</span></span>
        <span className="xm-tab"><span className="xm-ln xm-w60" /></span>
      </div>
      <div className="xm-tab-body" />
      <span className="xm-ln" />
      <span className="xm-ln xm-w80" />
    </PhoneFrame>
  );
}

function AccordionRow({ open, label }) {
  return (
    <div className={open ? "xm-acc xm-acc-on" : "xm-acc"}>
      <div className="xm-acc-head">
        {label ? <span className="xm-txt">{label}</span> : <span className="xm-ln" />}
        <span className="xm-chev">{open ? "⌄" : "›"}</span>
      </div>
      {open ? (
        <div className="xm-acc-body">
          <span className="xm-ln" />
          <span className="xm-ln xm-w80" />
        </div>
      ) : null}
    </div>
  );
}

export function AccordionMock() {
  return (
    <PhoneFrame>
      <span className="xm-ttl" />
      <span className="xm-txt xm-txt-22">FAQ</span>
      <AccordionRow />
      <AccordionRow open label="배송" />
      <AccordionRow />
    </PhoneFrame>
  );
}

export function CarouselMock() {
  return (
    <PhoneFrame>
      <span className="xm-ttl" />
      <div className="xm-slide-row">
        <div className="xm-banner" />
        <div className="xm-banner-next" />
        <Cursor style={{ right: 28, top: 96 }} />
      </div>
      <div className="xm-dots">
        <span className="xm-dot" />
        <span className="xm-dot xm-dot-on" />
        <span className="xm-dot" />
      </div>
      <span className="xm-ln xm-fade" />
      <span className="xm-ln xm-w80 xm-fade" />
    </PhoneFrame>
  );
}

export function PaginationMock() {
  return (
    <PhoneFrame>
      <span className="xm-ttl" />
      <span className="xm-ln xm-w80" />
      <div className="xm-list-row"><span className="xm-thumb" /><span className="xm-ln" /></div>
      <div className="xm-list-row"><span className="xm-thumb" /><span className="xm-ln" /></div>
      <div className="xm-list-row"><span className="xm-thumb" /><span className="xm-ln" /></div>
      <div className="xm-list-row"><span className="xm-thumb" /><span className="xm-ln" /></div>
      <div className="xm-pages">
        <span className="xm-page">‹</span>
        <span className="xm-page">1</span>
        <span className="xm-page xm-page-on">2</span>
        <span className="xm-page">3</span>
        <span className="xm-page">›</span>
      </div>
    </PhoneFrame>
  );
}

export function HamburgerMock() {
  return (
    <PhoneFrame>
      <div className="xm-appbar">
        <div className="xm-burger-hit">
          <span className="burger xm-burger" aria-hidden="true"><i /><i /><i /></span>
          <span className="ping xm-burger-ping" />
        </div>
        <span className="xm-ttl" />
      </div>
      <span className="xm-ln xm-w80" />
      <span className="xm-ln" />
      <div className="xm-fade-block" />
      <span className="xm-ln xm-fade" />
      <div className="scrim light" />
      <div className="panel drawer">
        <div className="me"><b /><span className="ln" /></div>
        <div className="item on"><b /><span className="ln" /></div>
        <div className="item"><b /><span className="ln" /></div>
        <div className="item"><b /><span className="ln" /></div>
      </div>
    </PhoneFrame>
  );
}
