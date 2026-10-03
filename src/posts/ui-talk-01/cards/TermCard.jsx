import { Post } from "../../../ui/Post.jsx";
import { QuestTag } from "../../../ui/QuestTag.jsx";
import { Icon } from "../../../ui/Icon.jsx";
import { Mock } from "../../../ui/Mock.jsx";

/* 용어 카드 5장이 같이 쓰는 레이아웃. 문구는 각 카드 파일에 있습니다. */
export function TermCard({ name, page, mock, stage, term, pron, mean, when, feats, before, after }) {
  return (
    <Post name={name} pillar="ui" page={page} className="head-compact">
      <div className="card-head">
        <QuestTag series="talk" showType={false} />
      </div>

      <div className="term-stage">{stage}</div>
      <div className="term-name">
        <h1 className="display">{term}</h1>
        <span className="term-pron">{pron}</span>
      </div>
      <p className="term-mean">{mean}</p>
      <p className="term-when">{when}</p>
      <div className="term-feats">
        {feats.map((text) => <span className="chip" key={text}>{text}</span>)}
      </div>

      <div className="term-row">
        <div className="term-mock"><Mock kind={mock} /></div>
        <div className="term-talk">
          <div className="term-before">
            <div className="term-lab">
              <span className="term-mark"><Icon name="x" color="var(--ink-soft)" stroke={10} /></span>
              잘못된 설명
            </div>
            <p>{before}</p>
          </div>
          <div className="term-down"><Icon name="arrow" color="var(--p-deep)" stroke={8} /></div>
          <div className="card term-after">
            <div className="term-lab">
              <span className="term-mark"><Icon name="star" color="var(--sun-deep)" stroke={8} /></span>
              용어를 알고 난 후
            </div>
            <p>{after}</p>
          </div>
        </div>
      </div>
    </Post>
  );
}
