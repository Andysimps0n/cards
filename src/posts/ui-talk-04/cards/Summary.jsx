import { Post } from "../../../ui/Post.jsx";
import { QuestTag } from "../../../ui/QuestTag.jsx";

function Row({ name, ko, job, wrapName = false }) {
  return (
    <div className="sx-summary-row">
      <div className={wrapName ? "sx-summary-name sx-summary-name-wrap" : "sx-summary-name"}>
        {name}<small>{ko}</small>
      </div>
      <div className="sx-summary-cell">{job}</div>
    </div>
  );
}

export function Summary() {
  return (
    <Post name="Summary" pillar="ui" page="08">
      <div className="card-head"><QuestTag series="talk" showType={false} /></div>
      <div className="sx-summary-stage">한 눈에 정리</div>
      <h1 className="display sx-summary-title">헷갈릴 땐 <span className="hl">이 표</span> 하나</h1>
      <div className="sx-summary-save">저장 필수!</div>
      <div className="card sx-summary-table">
        <div className="sx-summary-row sx-summary-headrow"><span>이름</span><span>기능</span></div>
        <Row name="Tab" ko="탭" job="같은 자리에서 내용을 바꿔 봐요." />
        <Row name="Accordion" ko="아코디언" job="누르면 아래로 펼쳐져요." />
        <Row name="Carousel" ko="캐러셀" job="옆으로 넘겨 보는 배너예요." />
        <Row name="Pagination" ko="페이지네이션" job="1, 2, 3 페이지 번호로 나눠요." />
        <Row name="Hamburger Menu" ko="햄버거 메뉴" job="줄 세 개 아이콘을 눌러 메뉴를 열어요." wrapName />
      </div>
    </Post>
  );
}
