import { Post } from "../../../ui/Post.jsx";
import { QuestTag } from "../../../ui/QuestTag.jsx";

function Row({ name, ko, job }) {
  return (
    <div className="compare-row">
      <div className="compare-name">{name}<small>{ko}</small></div>
      <div className="compare-cell">{job}</div>
    </div>
  );
}

export function Compare() {
  return (
    <Post name="Compare" pillar="ui" page="08" className="head-compact">
      <div className="card-head">
        <QuestTag series="talk" showType={false} />
      </div>
      <div className="compare-stage">지도 한 장 요약</div>
      <h1 className="display compare-title">헷갈릴 땐 <span className="hl">이 표</span> 하나</h1>
      <div className="compare-save">저장 필수!</div>

      <div className="card compare-table">
        <div className="compare-row compare-headrow">
          <span>이름</span><span>기능</span>
        </div>
        <Row name="Modal" ko="모달" job="화면 가운데에 뜨는 창이에요." />
        <Row name="Bottom Sheet" ko="바텀 시트" job="화면 아래에서 올라오는 창이에요." />
        <Row name="Drawer" ko="드로어" job="옆에서 서랍처럼 밀려 나오는 메뉴예요." />
        <Row name="Toast" ko="토스트" job="잠깐 떴다가 저절로 사라지는 알림이에요." />
        <Row name="Tooltip" ko="툴팁" job="마우스를 올리면 뜨는 작은 설명 말풍선이에요." />
      </div>
    </Post>
  );
}
