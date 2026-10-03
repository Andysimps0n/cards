import { Post } from "../../../ui/Post.jsx";

const LOOT = ["Dropdown", "Toggle", "Checkbox", "Radio Button", "Date Picker"];

export function Ending() {
  return (
    <Post name="Ending" pillar="ui" page="09">
      <svg className="layer in-ending-doodle" viewBox="0 0 140 140" aria-hidden="true">
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
      <div className="layer hand in-ending-note">다음 편에서 만나요!</div>

      <div className="in-ending-clear">
        <div className="in-ending-stamp">
          <svg viewBox="0 0 210 210" width="230" height="230">
            <circle cx="105" cy="105" r="92" fill="var(--sun)" filter="url(#wax)" />
            <circle cx="105" cy="105" r="78" fill="none" stroke="var(--sun-deep)" strokeWidth="5" filter="url(#wax-stroke)" />
          </svg>
          <span>오늘 배운<br />단어 5개</span>
        </div>
        <div>
          <h1 className="display in-ending-title">오늘의 정리</h1>
          <p className="in-ending-sub">저장해두고<br />AI한테 써먹어보세요</p>
        </div>
      </div>

      <div className="in-ending-loot">
        <h3>
          ✦ 이제 이렇게 말해요
          <svg className="in-ending-tick" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M8 26 l10 12 22-24" fill="none" stroke="var(--p-deep)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" filter="url(#wax-stroke)" />
          </svg>
        </h3>
        <ul>
          {LOOT.map((name) => <li key={name}><span className="chip">{name}</span></li>)}
        </ul>
      </div>

      <div className="in-ending-next">
        <div className="card warm">
          <svg className="in-ending-pencil" viewBox="0 0 84 84" aria-hidden="true">
            <g transform="rotate(-35 42 42)">
              <rect x="32" y="14" width="20" height="12" rx="3" fill="var(--p)" filter="url(#wax)" />
              <rect x="32" y="24" width="20" height="36" fill="var(--sun)" filter="url(#wax)" />
              <path d="M32 60 L42 76 L52 60 Z" fill="var(--paper-warm)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
              <path d="M32 14 h20 v46 h-20 z" fill="none" stroke="var(--p-deep)" strokeWidth="5" filter="url(#wax-stroke)" />
              <path d="M32 24 h20" stroke="var(--p-deep)" strokeWidth="4" filter="url(#wax-stroke)" />
            </g>
          </svg>
          <div className="in-ending-label">다음 편</div>
          <div className="in-ending-next-title">?? 편</div>
        </div>
      </div>

      <div className="in-ending-cta">
        <span className="chip">🔖 저장하고 써먹기</span>
        <span className="chip alt">👀 팔로우하고 다음 편 보기</span>
      </div>
    </Post>
  );
}
