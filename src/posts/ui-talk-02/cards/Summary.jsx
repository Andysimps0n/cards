import { Post } from "../../../ui/Post.jsx";
import { QuestTag } from "../../../ui/QuestTag.jsx";

function Row({ name, ko, job }) {
  return (
    <div className="hf-summary-row">
      <div className="hf-summary-name">{name}<small>{ko}</small></div>
      <div className="hf-summary-cell">{job}</div>
    </div>
  );
}

export function Summary() {
  return (
    <Post name="Summary" pillar="ui" page="08">
      <div className="card-head"><QuestTag series="talk" showType={false} /></div>
      <div className="hf-summary-stage">한 눈에 정리</div>
      <h1 className="display hf-summary-title">헷갈릴 땐 <span className="hl">이 표</span> 하나</h1>
      <div className="hf-summary-save">저장 필수!</div>
      <div className="card hf-summary-table">
        <div className="hf-summary-row hf-summary-headrow"><span>이름</span><span>기능</span></div>
        <Row name="Header" ko="헤더" job="웹페이지 맨 위에 늘 있는 구역이에요." />
        <Row name="GNB" ko="메인 메뉴" job="모든 페이지에 똑같이 들어가는 메인 메뉴예요." />
        <Row name="Sticky Header" ko="스티키 헤더" job="스크롤해도 맨 위에 붙어 따라오는 Header예요." />
        <Row name="Breadcrumb" ko="브레드크럼" job="지금 페이지까지 온 길을 보여주는 줄이에요." />
        <Row name="Footer" ko="푸터" job="웹페이지 맨 아래에 늘 있는 구역이에요." />
      </div>
    </Post>
  );
}
