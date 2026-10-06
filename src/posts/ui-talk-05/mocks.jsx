function WindowTop() {
  return (
    <div className="zm-top">
      <b /><b /><b /><span className="zm-url" />
    </div>
  );
}

function MiniHeader() {
  return (
    <div className="zm-head">
      <i className="zm-logo" />
      <span className="zm-bar zm-w50" />
      <span className="zm-grow" />
      <span className="zm-dot" />
    </div>
  );
}

function MiniFooter() {
  return (
    <div className="zm-foot">
      <span className="zm-ln zm-w60" />
    </div>
  );
}

function zoneClass(highlight, name, extra) {
  return `${highlight === name ? "zm-zone" : "zm-dim"} ${extra}`;
}

/* 03~07장이 같이 쓰는 한 페이지 뼈대. highlight만 바꿔서 그 구역 위치를 보여줍니다. */
function PageZones({ highlight }) {
  return (
    <div className={`zm-site zm-on-${highlight}`}>
      <div className="zm-win">
        <WindowTop />
        <div className="zm-dim">
          <MiniHeader />
        </div>
        <div className={zoneClass(highlight, "hero", "zm-hero")}>
          <div className="zm-hero-img" />
          <span className="zm-hero-msg">한 줄 메시지</span>
        </div>
        <div className={zoneClass(highlight, "cta", "zm-cta")}>
          <span className="zm-cta-btn">지금 시작하기</span>
        </div>
        <div className={zoneClass(highlight, "grid", "zm-grid")}>
          <div className="zm-cards"><i /><i /><i /><i /></div>
        </div>
        <div className={zoneClass(highlight, "banner", "zm-banner")}>
          <span className="zm-banner-txt">이벤트</span>
        </div>
        <div className={zoneClass(highlight, "faq", "zm-faq")}>
          <div className="zm-faq-row"><span className="zm-ln" /><span className="zm-plus">+</span></div>
          <div className="zm-faq-row"><span className="zm-ln zm-w70" /><span className="zm-plus">+</span></div>
          <div className="zm-faq-row"><span className="zm-ln zm-w80" /><span className="zm-plus">+</span></div>
        </div>
        <div className="zm-dim">
          <MiniFooter />
        </div>
      </div>
    </div>
  );
}

export function HeroMock() {
  return <PageZones highlight="hero" />;
}

export function CtaMock() {
  return <PageZones highlight="cta" />;
}

export function CardGridMock() {
  return <PageZones highlight="grid" />;
}

export function BannerMock() {
  return <PageZones highlight="banner" />;
}

export function FaqMock() {
  return <PageZones highlight="faq" />;
}

/* 02장. 말풍선 칸(66×124)에 맞춰 직접 그립니다. 0.22배로 줄이면 띠와 버튼이 안 보여요. */
export function WrongBannerMock() {
  return (
    <div className="zm-mini">
      <div className="zm-mini-band">
        <span className="zm-mini-ask">?</span>
      </div>
      <span className="zm-mini-ln" />
      <span className="zm-mini-ln zm-mini-w60" />
      <div className="zm-mini-cards"><i /><i /></div>
    </div>
  );
}

export function TinyButtonMock() {
  return (
    <div className="zm-mini">
      <span className="zm-mini-ln zm-mini-w70" />
      <div className="zm-mini-peach" />
      <span className="zm-mini-ln" />
      <div className="zm-mini-tiny">
        <span className="zm-mini-btn" />
        <span className="zm-mini-ask">?</span>
      </div>
    </div>
  );
}
