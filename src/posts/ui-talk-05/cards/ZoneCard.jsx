import { Post } from "../../../ui/Post.jsx";
import { QuestTag } from "../../../ui/QuestTag.jsx";
import { Icon } from "../../../ui/Icon.jsx";

/* 03~07장이 같이 쓰는 레이아웃. mock은 JSX, 아래쪽에 tip을 둡니다. */
export function ZoneCard({
  name, page, mock, stage, term, pron, mean, when, tip, before, after, wrapName = false,
}) {
  return (
    <Post name={name} pillar="ui" page={page}>
      <div className="card-head"><QuestTag series="talk" showType={false} /></div>
      <div className="zn-stage">{stage}</div>
      <div className={wrapName ? "zn-name zn-name-wrap" : "zn-name"}>
        <h1 className="display">{term}</h1>
        <span className="zn-pron">{pron}</span>
      </div>
      <p className="zn-mean">{mean}</p>
      <p className="zn-when">{when}</p>
      <div className="zn-row">
        <div className="zn-mock">{mock}</div>
        <div className="zn-talk">
          <div className="zn-before">
            <div className="zn-lab">
              <span className="zn-mark"><Icon name="x" color="var(--ink-soft)" stroke={10} /></span>
              잘못된 설명
            </div>
            <p>{before}</p>
          </div>
          <div className="zn-down"><Icon name="arrow" color="var(--p-deep)" stroke={8} /></div>
          <div className="card zn-after">
            <div className="zn-lab">
              <span className="zn-mark"><Icon name="star" color="var(--sun-deep)" stroke={8} /></span>
              용어를 알고 난 후
            </div>
            <p>{after}</p>
          </div>
        </div>
      </div>
      <div className="card zn-tip">
        <span className="zn-tip-label">✏️ 팁</span>
        <span className="zn-tip-text">{tip}</span>
      </div>
    </Post>
  );
}
