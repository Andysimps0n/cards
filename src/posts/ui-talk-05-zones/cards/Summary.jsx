import { Post } from "../../../ui/Post.jsx";
import { QuestTag } from "../../../ui/QuestTag.jsx";

function Row({ name, ko, job }) {
  return (
    <div className="zn-summary-row">
      <div className="zn-summary-name">{name}<small>{ko}</small></div>
      <div className="zn-summary-cell">{job}</div>
    </div>
  );
}

export function Summary() {
  return (
    <Post name="Summary" pillar="ui" page="08">
      <div className="card-head"><QuestTag series="talk" showType={false} /></div>
      <div className="zn-summary-stage">한 눈에 정리</div>
      <h1 className="display zn-summary-title">헷갈릴 땐 <span className="hl">이 표</span> 하나</h1>
      <div className="zn-summary-save">저장 필수!</div>
      <div className="card zn-summary-table">
        <div className="zn-summary-row zn-summary-headrow"><span>이름</span><span>기능</span></div>
        <Row name="Hero Section" ko="히어로 섹션" job="맨 위 큰 이미지와 한 줄 메시지로 첫인상을 줘요." />
        <Row name="CTA" ko="씨티에이" job="지금 시작하기처럼 행동을 불러요." />
        <Row name="Card Grid" ko="카드 그리드" job="카드를 바둑판처럼 늘어놓아요." />
        <Row name="Banner" ko="배너" job="중간중간 들어가는 가로 띠 공지·광고예요." />
        <Row name="FAQ Section" ko="자주 묻는 질문" job="자주 묻는 질문을 모아 둔 구역이에요." />
      </div>
    </Post>
  );
}
