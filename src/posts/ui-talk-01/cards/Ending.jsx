import { Post } from "../../../ui/Post.jsx";

const LOOT = ["Modal", "Bottom Sheet", "Drawer", "Toast", "Tooltip"];

export function Ending() {
  return (
    <Post name="Ending" pillar="ui" page="09">
      <svg className="layer ending-doodle" viewBox="0 0 140 140" aria-hidden="true">
        <g transform="rotate(-6 70 74)">
          <rect x="38" y="28" width="78" height="92" rx="10" fill="var(--white)" filter="url(#wax)" />
          <rect x="38" y="28" width="78" height="92" rx="10" fill="none" stroke="var(--p-deep)" strokeWidth="6" filter="url(#wax-stroke)" />
          <circle cx="38" cy="48" r="6" fill="var(--paper)" stroke="var(--p-deep)" strokeWidth="4" filter="url(#wax-stroke)" />
          <circle cx="38" cy="68" r="6" fill="var(--paper)" stroke="var(--p-deep)" strokeWidth="4" filter="url(#wax-stroke)" />
          <circle cx="38" cy="88" r="6" fill="var(--paper)" stroke="var(--p-deep)" strokeWidth="4" filter="url(#wax-stroke)" />
          <circle cx="38" cy="108" r="6" fill="var(--paper)" stroke="var(--p-deep)" strokeWidth="4" filter="url(#wax-stroke)" />
          <path d="M54 50h48M54 66h48M54 82h40" fill="none" stroke="var(--ink-faint)" strokeWidth="4" strokeLinecap="round" filter="url(#wax-stroke)" />
          <path d="M62 58 l14 16 28-30" fill="none" stroke="var(--sun-deep)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" filter="url(#wax-stroke)" />
        </g>
      </svg>

      <div className="ending-clear">
        <div className="ending-stamp">
          <svg viewBox="0 0 210 210" width="230" height="230">
            <circle cx="105" cy="105" r="92" fill="var(--sun)" filter="url(#wax)" />
            <circle cx="105" cy="105" r="78" fill="none" stroke="var(--sun-deep)" strokeWidth="5" filter="url(#wax-stroke)" />
          </svg>
          <span><small>QUEST #<b>01</b></small>클리어!</span>
        </div>
        <div>
          <h1 className="display ending-title-main">오늘의 정리</h1>
          <p className="ending-sub">저장해두고<br />AI한테 써먹어보세요</p>
        </div>
      </div>

      <div className="ending-loot">
        <h3>
          ✦ 오늘 얻은 단어 5개
          <svg className="ending-tick" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M8 26 l10 12 22-24" fill="none" stroke="var(--p-deep)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" filter="url(#wax-stroke)" />
          </svg>
        </h3>
        <ul>
          {LOOT.map((name) => <li key={name}><span className="chip">{name}</span></li>)}
        </ul>
      </div>

      <div className="ending-next">
        <div className="card warm">
          <svg className="ending-pencil" viewBox="0 0 84 84" aria-hidden="true">
            <g transform="rotate(-35 42 42)">
              <rect x="32" y="14" width="20" height="12" rx="3" fill="var(--p)" filter="url(#wax)" />
              <rect x="32" y="24" width="20" height="36" fill="var(--sun)" filter="url(#wax)" />
              <path d="M32 60 L42 76 L52 60 Z" fill="var(--paper-warm)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
              <path d="M32 14 h20 v46 h-20 z" fill="none" stroke="var(--p-deep)" strokeWidth="5" filter="url(#wax-stroke)" />
              <path d="M32 24 h20" stroke="var(--p-deep)" strokeWidth="4" filter="url(#wax-stroke)" />
            </g>
          </svg>
          <div className="ending-label">다음 편</div>
          <div className="ending-title">Header와 Footer</div>
          <div className="ending-desc">로그인 버튼, 프로필 버튼, 연락처, SNS 링크가 담기는 곳</div>
        </div>
      </div>

      <div className="ending-cta">
        <span className="chip">🔖 저장하고 써먹기</span>
        <span className="chip alt">🧭 팔로우하고 같이 탐험</span>
      </div>
    </Post>
  );
}
