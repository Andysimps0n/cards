import { Post } from "../../../ui/Post.jsx";
import { QuestTag } from "../../../ui/QuestTag.jsx";

function Row({ name, ko, job, wrapName = false }) {
  return (
    <div className="sf-summary-row">
      <div className={wrapName ? "sf-summary-name sf-summary-name-wrap" : "sf-summary-name"}>
        {name}<small>{ko}</small>
      </div>
      <div className="sf-summary-cell">{job}</div>
    </div>
  );
}

export function Summary() {
  return (
    <Post name="Summary" pillar="ui" page="08">
      <div className="card-head"><QuestTag series="talk" showType={false} /></div>
      <div className="sf-summary-stage">한 눈에 정리</div>
      <h1 className="display sf-summary-title">헷갈릴 땐 <span className="hl">이 표</span> 하나</h1>
      <div className="sf-summary-save">저장 필수!</div>
      <div className="card sf-summary-table">
        <div className="sf-summary-row sf-summary-headrow"><span>이름</span><span>기능</span></div>
        <Row name="Search Bar" ko="서치 바" job="검색어를 입력하는 칸이에요." />
        <Row name="Filter" ko="필터" job="조건에 맞는 것만 남겨요." />
        <Row name="Sort" ko="소트" job="최신순처럼 순서만 바꿔요." />
        <Row name="Chip" ko="칩" job="고른 조건을 작은 태그로 보여 주고 지워요." />
        <Row name="Autocomplete" ko="오토컴플리트" job="치다 보면 추천 검색어가 떠요." wrapName />
      </div>
    </Post>
  );
}
