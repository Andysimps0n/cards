import { ZoneCard } from "./ZoneCard.jsx";
import { HeroMock } from "../mocks.jsx";

export function HeroCard() {
  return (
    <ZoneCard
      name="HeroCard"
      page="03"
      mock={<HeroMock />}
      stage="구역 ①"
      term="Hero Section"
      pron="[히어로 섹션]"
      wrapName
      mean="페이지 맨 위, 큰 이미지와 한 줄 메시지가 있는 구역이에요."
      when="처음 들어온 사람에게 이 페이지가 뭔지 바로 보여줄 때 써요."
      before={'"맨 위에 큰 사진이랑 한 줄 문구 있는 그 구역 만들어줘"'}
      after={<>"첫 화면은 <b>Hero Section</b>으로 해줘"</>}
      tip={<><b>Hero</b>는 맨 위 첫인상, <b>Banner</b>는 중간중간 들어가는 가로 띠예요.</>}
    />
  );
}
