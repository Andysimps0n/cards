import { Post } from "../../../ui/Post.jsx";
import { QuestTag } from "../../../ui/QuestTag.jsx";
import { Icon } from "../../../ui/Icon.jsx";

export function Cover() {
  return (
    <Post name="Cover" pillar="ui" page="01">
      <svg className="layer in-cover-blob" viewBox="0 0 640 560">
        <path d="M330 30c150-10 290 90 300 230 10 150-120 280-290 290C170 560 20 450 10 290 0 150 160 40 330 30z" fill="var(--p)" filter="url(#wax)" />
      </svg>
      <svg className="layer in-cover-route" viewBox="0 0 1080 470" fill="none">
        <path d="M-20 420 C 180 380, 260 250, 430 300 S 700 420, 860 250" stroke="var(--p-deep)" strokeWidth="9" strokeDasharray="4 26" strokeLinecap="round" filter="url(#wax-stroke)" />
      </svg>
      <div className="layer in-cover-dest"><Icon name="x" color="var(--p-deep)" stroke={11} /></div>
      <div className="layer in-cover-spark" style={{ left: 930, top: 560 }}><Icon name="star" color="var(--sun-deep)" stroke={6} /></div>
      <div className="layer in-cover-spark" style={{ left: 860, top: 470, width: 36, height: 36 }}><Icon name="star" color="var(--sun-deep)" stroke={7} /></div>

      <div className="card-head">
        <QuestTag series="talk" />
        <div className="in-cover-compass"><Icon name="compass" color="var(--ink-soft)" stroke={5} /></div>
      </div>

      <div className="hf-cover-copy">
        <h1 className="display hf-cover-title">
          AI가 알아먹는<br /><span className="hl">UI 용어집</span> 3탄
        </h1>
        <div className="hf-cover-sub">
          <p className="hand hf-cover-agenda-label">오늘의 내용</p>
          <ul className="hf-cover-agenda">
            <li>Dropdown : 여러 옵션을 펼쳐주고 싶을 때</li>
            <li>Toggle, Radio, CheckBox : 다양한 버튼을 마련할 때</li>
          </ul>
        </div>
      </div>
    </Post>
  );
}
