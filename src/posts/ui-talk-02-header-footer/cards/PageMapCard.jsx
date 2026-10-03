import { SectionCard } from "./SectionCard.jsx";
import { PageMap } from "../mocks.jsx";

export function PageMapCard() {
  return (
    <SectionCard
      name="PageMap"
      page="03"
      layout="wide"
      mock={<PageMap />}
      stage="구역 ①"
      term="Header · Footer"
      pron="[헤더 · 푸터]"
      when="홈페이지 뼈대를 처음 잡을 때 가장 먼저 정해요."
      tip={<>모든 페이지에 똑같이 들어가는<br /><span className="hl">머리와 발</span></>}
    />
  );
}
