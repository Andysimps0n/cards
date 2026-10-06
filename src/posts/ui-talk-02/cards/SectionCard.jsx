import { Post } from "../../../ui/Post.jsx";
import { QuestTag } from "../../../ui/QuestTag.jsx";
import { Icon } from "../../../ui/Icon.jsx";

/* 03~07장이 같이 쓰는 레이아웃. 문구는 각 카드 파일에서 props로 넘깁니다. */
export function SectionCard({
  name,
  page,
  layout,
  mock,
  stage,
  term,
  pron,
  mean,
  when,
  items,
  before,
  after,
  tipLabel,
  tip,
  fn,
}) {
  return (
    <Post name={name} pillar="ui" page={page} className={`hf-section hf-${layout}`}>
      <div className="card-head"><QuestTag series="talk" showType={false} /></div>
      <div className="hf-stage">{stage}</div>
      <div className="hf-term">
        <h1 className="display">{term}</h1>
        {pron && <span className="hf-pron">{pron}</span>}
      </div>
      {mean && <p className="hf-mean">{mean}</p>}
      {when && <p className="hf-when">{when}</p>}
      <div className="hf-row">
        <div className="hf-mockcol">{mock}</div>
        {items?.length > 0 && (
          <ul className="hf-items">
            {items.map(({ n, t, d }) => (
              <li key={n} className={layout === "side" ? "hf-pt" : "hf-leg"}>
                <span className="hf-num">{n}</span>
                <div><b>{t}</b><p>{d}</p></div>
              </li>
            ))}
          </ul>
        )}
        {(before || after) && (
          <div className="hf-talk">
            <div className="hf-before">
              <div className="hf-lab">
                <span className="hf-mark"><Icon name="x" color="var(--ink-soft)" stroke={10} /></span>
                잘못된 설명
              </div>
              <p>{before}</p>
            </div>
            <div className="hf-down"><Icon name="arrow" color="var(--p-deep)" stroke={8} /></div>
            <div className="card hf-after">
              <div className="hf-lab">
                <span className="hf-mark"><Icon name="star" color="var(--sun-deep)" stroke={8} /></span>
                용어를 알고 난 후
              </div>
              <p>{after}</p>
            </div>
          </div>
        )}
      </div>
      {tip && (
        <div className="card hf-tip">
          {tipLabel && <div className="hf-tip-label">{tipLabel}</div>}
          <div className="hf-tip-text">{tip}</div>
        </div>
      )}
      {fn && <p className="hf-fn">{fn}</p>}
    </Post>
  );
}
