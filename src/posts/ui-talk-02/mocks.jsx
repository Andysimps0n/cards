import { Icon } from "../../ui/Icon.jsx";

function WindowTop() {
  return (
    <div className="pm-top">
      <b /><b /><b /><span className="pm-url" />
    </div>
  );
}

function Pin({ n, corner = false }) {
  return <span className={corner ? "pm-pin pm-pin-corner" : "pm-pin"}>{n}</span>;
}

function Logo({ size = "md", onPaper = false }) {
  return (
    <span className={`pm-logo pm-logo-${size}${onPaper ? " pm-on-paper" : ""}`}>
      <i />
      <span className="pm-bar" />
    </span>
  );
}

function MiniIcon({ name, size }) {
  return (
    <div className="pm-icon" style={{ width: size, height: size }}>
      <Icon name={name} color="var(--ink)" stroke={8} />
    </div>
  );
}

/* 02장. 메뉴가 본문 한가운데 있고, 회사 정보는 그 바로 아래에 떠 있습니다. */
export function WrongNav() {
  return (
    <div className="phone">
      <div className="scr">
        <div className="app">
          <div className="hero" />
          <div className="ln m" />
          <div className="ln s" />
          <div className="pm-zone pm-wrong-menu">
            <i className="pm-logo-dot" />
            <span className="pm-wbar pm-w40" />
            <span className="pm-wbar pm-w40" />
            <span className="pm-wbar pm-w40" />
            <span className="pm-ask">?</span>
          </div>
          <div className="cards"><i /><i /></div>
          <div className="ln s pm-ink-line" />
          <div className="ln s pm-ink-line" />
        </div>
      </div>
      <div className="notch" />
    </div>
  );
}

/* 05장. Header 바로 아래 Breadcrumb 줄만 핑크로 강조합니다. */
export function BreadcrumbMock() {
  return (
    <div className="pm-site pm-site-side">
      <div className="pm-win">
        <WindowTop />
        <div className="pm-dim pm-bc-head">
          <i className="pm-bc-logo" />
          <span className="pm-bar" />
          <span className="pm-grow" />
          <span className="pm-ln" />
          <span className="pm-ln" />
        </div>
        <div className="pm-zone pm-bc-crumb">
          <span className="pm-bc-link">홈</span>
          <span className="pm-bc-sep">{">"}</span>
          <span className="pm-bc-link">상의</span>
          <span className="pm-bc-sep">{">"}</span>
          <span className="pm-bc-now">니트</span>
        </div>
        <div className="pm-dim pm-bc-body">
          <div className="pm-peach pm-peach-170" />
          <span className="pm-bar pm-bar-120" />
          <span className="pm-ln pm-w60" />
          <span className="pm-bc-btn" />
        </div>
      </div>
    </div>
  );
}

/* 03장. Header 띠를 강조하고, 로고를 누르면 홈으로 간다는 메모를 붙입니다. */
export function HeaderMock() {
  return (
    <div className="pm-site pm-site-side">
      <div className="pm-win">
        <WindowTop />
        <div className="pm-zone pm-hm-head">
          <span className="pm-logo pm-logo-sm">
            <span className="pm-logo-slot">
              <span className="ping pm-home-ping" />
              <i />
            </span>
            <span className="pm-bar" />
          </span>
          <span className="pm-grow" />
          <MiniIcon name="magnifier" size={30} />
          <i className="pm-avatar pm-avatar-24" />
        </div>
        <div className="pm-hmenu">
          <span className="pm-wbar pm-w44" />
          <span className="pm-wbar pm-w44" />
          <span className="pm-wbar pm-w44" />
          <span className="pm-wbar pm-w44" />
        </div>
        <div className="pm-dim pm-side-body">
          <div className="pm-peach pm-peach-120" />
          <span className="pm-ln pm-w80" />
          <span className="pm-ln pm-w60" />
          <div className="pm-cards2 pm-cards-90"><i /><i /></div>
          <span className="pm-ln" />
        </div>
        <div className="pm-call pm-hm-call">
          <div className="pm-point pm-point-up-left"><Icon name="arrow" color="var(--p-deep)" stroke={8} /></div>
          <div className="pm-note pm-home-note">누르면 홈!</div>
        </div>
      </div>
    </div>
  );
}

/* 04장. 데스크톱 헤더 ①~④, 모바일 헤더 ⑤. */
export function HeaderParts() {
  return (
    <div className="pm-parts">
      <div className="pm-tag">DESKTOP</div>
      <div className="pm-strip pm-strip-desk">
        <div className="pm-part">
          <Pin n="1" />
          <Logo size="lg" onPaper />
        </div>
        <div className="pm-part">
          <Pin n="2" />
          <div className="pm-gnb">
            <span className="pm-bar" />
            <span className="pm-bar" />
            <span className="pm-bar" />
            <span className="pm-bar" />
          </div>
        </div>
        <span className="pm-grow" />
        <div className="pm-part">
          <Pin n="3" />
          <div className="pm-searchbox">
            <MiniIcon name="magnifier" size={26} />
            <span className="pm-ln pm-w80px" />
          </div>
        </div>
        <div className="pm-part">
          <Pin n="4" />
          <div className="pm-login">로그인</div>
        </div>
      </div>

      <div className="pm-tag pm-tag-gap">MOBILE</div>
      <div className="pm-mobile-line">
        <div className="pm-strip pm-strip-mobile">
          <div className="pm-part">
            <Pin n="5" />
            <div className="burger"><i /><i /><i /></div>
          </div>
          <Logo size="mo" onPaper />
          <MiniIcon name="magnifier" size={30} />
        </div>
        <div className="pm-note pm-fold-note">메뉴는 여기 접혀 있어요</div>
      </div>
    </div>
  );
}

/* 06장. 본문은 흐리고, 맨 아래 Footer와 스크롤 막대만 또렷합니다. */
export function FooterMock() {
  return (
    <div className="pm-site pm-site-side">
      <div className="pm-win">
        <WindowTop />
        <div className="pm-dim pm-fm-body">
          <div className="pm-fake-head" />
          <span className="pm-ln pm-w80" />
          <div className="pm-cards2 pm-cards-80"><i /><i /></div>
          <span className="pm-ln" />
          <span className="pm-ln pm-w60" />
          <span className="pm-ln pm-w80" />
        </div>
        <div className="pm-zone pm-fm-foot">
          <div className="pm-fm-cols">
            <div className="pm-foot-col"><span className="pm-wbar" /><span className="pm-wbar pm-w70" /><span className="pm-wbar pm-w80" /></div>
            <div className="pm-foot-col"><span className="pm-wbar" /><span className="pm-wbar pm-w70" /><span className="pm-wbar pm-w80" /></div>
            <div className="pm-foot-col"><span className="pm-wbar" /><span className="pm-wbar pm-w70" /><span className="pm-wbar pm-w80" /></div>
          </div>
          <div className="pm-fm-meta">
            <span className="pm-wbar pm-w60" />
            <span className="pm-sns-mini"><i /><i /><i /></span>
          </div>
        </div>
        <div className="pm-scroll"><i /></div>
        <div className="pm-call pm-fm-call">
          <div className="pm-note pm-foot-note">끝까지 내려오면…</div>
          <div className="pm-point pm-point-down"><Icon name="arrow" color="var(--p-deep)" stroke={8} /></div>
        </div>
      </div>
    </div>
  );
}

function SiteCol() {
  return (
    <div className="pm-site-col">
      <span className="pm-bar" />
      <span className="pm-ln pm-faint" />
      <span className="pm-ln pm-faint pm-w75" />
      <span className="pm-ln pm-faint pm-w85" />
    </div>
  );
}

/* 07장. Footer 안에 자주 들어가는 다섯 덩어리. */
export function FooterParts() {
  return (
    <div className="pm-parts pm-foot-parts">
      <div className="pm-strip pm-warm pm-foot-strip">
        <div className="pm-foot-top">
          <div className="pm-part pm-sitemap">
            <Pin n="1" corner />
            <div className="pm-site-cols">
              <SiteCol />
              <SiteCol />
              <SiteCol />
            </div>
          </div>
          <span className="pm-grow" />
          <div className="pm-part pm-news">
            <Pin n="5" corner />
            <span className="pm-bar pm-bar-120" />
            <div className="pm-news-row">
              <span className="pm-field" />
              <span className="pm-subscribe">구독</span>
            </div>
          </div>
        </div>
        <div className="pm-dash" />
        <div className="pm-foot-bot">
          <div className="pm-part pm-company">
            <Pin n="2" corner />
            <span className="pm-ln pm-faint pm-w300" />
            <span className="pm-ln pm-faint pm-w240" />
          </div>
          <div className="pm-part">
            <Pin n="3" corner />
            <span className="pm-terms">이용약관 · 개인정보처리방침</span>
          </div>
          <span className="pm-grow" />
          <div className="pm-part">
            <Pin n="4" corner />
            <span className="pm-sns-row">
              <i />
              <i />
              <i />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
