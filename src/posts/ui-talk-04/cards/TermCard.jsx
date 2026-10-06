import { Post } from "../../../ui/Post.jsx";
import { QuestTag } from "../../../ui/QuestTag.jsx";
import { Icon } from "../../../ui/Icon.jsx";

/* 03~07장이 같이 쓰는 레이아웃. mock은 JSX, feats 대신 아래쪽에 tip을 둡니다. */
export function TermCard({
  name, page, mock, stage, term, pron, mean, when, tip, before, after, wrapName = false,
}) {
  return (
    <Post name={name} pillar="ui" page={page}>
      <div className="card-head"><QuestTag series="talk" showType={false} /></div>
      <div className="sx-stage">{stage}</div>
      <div className={wrapName ? "sx-name sx-name-wrap" : "sx-name"}>
        <h1 className="display">{term}</h1>
        <span className="sx-pron">{pron}</span>
      </div>
      <p className="sx-mean">{mean}</p>
      <p className="sx-when">{when}</p>
      <div className="sx-row">
        <div className="sx-mock">{mock}</div>
        <div className="sx-talk">
          <div className="sx-before">
            <div className="sx-lab">
              <span className="sx-mark"><Icon name="x" color="var(--ink-soft)" stroke={10} /></span>
              잘못된 설명
            </div>
            <p>{before}</p>
          </div>
          <div className="sx-down"><Icon name="arrow" color="var(--p-deep)" stroke={8} /></div>
          <div className="card sx-after">
            <div className="sx-lab">
              <span className="sx-mark"><Icon name="star" color="var(--sun-deep)" stroke={8} /></span>
              용어를 알고 난 후
            </div>
            <p>{after}</p>
          </div>
        </div>
      </div>
      <div className="card sx-tip">
        <span className="sx-tip-label">✏️ 팁</span>
        <span className="sx-tip-text">{tip}</span>
      </div>
    </Post>
  );
}
