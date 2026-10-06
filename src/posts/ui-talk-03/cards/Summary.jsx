import { Post } from "../../../ui/Post.jsx";
import { QuestTag } from "../../../ui/QuestTag.jsx";

function Row({ name, ko, job }) {
  return (
    <div className="in-summary-row">
      <div className="in-summary-name">{name}<small>{ko}</small></div>
      <div className="in-summary-cell">{job}</div>
    </div>
  );
}

export function Summary() {
  return (
    <Post name="Summary" pillar="ui" page="08">
      <div className="card-head"><QuestTag series="talk" showType={false} /></div>
      <div className="in-summary-stage">한 눈에 정리</div>
      <h1 className="display in-summary-title">헷갈릴 땐 <span className="hl">이 표</span> 하나</h1>
      <div className="in-summary-save">저장 필수!</div>
      <div className="card in-summary-table">
        <div className="in-summary-row in-summary-headrow"><span>이름</span><span>기능</span></div>
        <Row name="Dropdown" ko="드롭다운" job="누르면 목록이 펼쳐지고 하나를 골라요." />
        <Row name="Toggle" ko="토글" job="켜고 끄면 바로 적용돼요." />
        <Row name="Checkbox" ko="체크박스" job="여러 개를 고를 수 있어요. 보통 저장해야 적용돼요." />
        <Row name="Radio Button" ko="라디오 버튼" job="여러 개 중 딱 하나만 골라요." />
        <Row name="Date Picker" ko="데이트 피커" job="달력을 띄워 날짜를 골라요." />
      </div>
    </Post>
  );
}
