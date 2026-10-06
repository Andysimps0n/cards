import { ZoneCard } from "./ZoneCard.jsx";
import { CtaMock } from "../mocks.jsx";

export function CtaCard() {
  return (
    <ZoneCard
      name="CtaCard"
      page="04"
      mock={<CtaMock />}
      stage="구역 ②"
      term="CTA"
      pron="[씨티에이]"
      mean={<>"지금 시작하기"처럼 행동을 부르는 버튼이나 구역이에요.</>}
      when="가입·구매처럼, 이 페이지에서 다음에 할 일을 분명하게 보여줄 때 써요."
      before={'"지금 시작하기 버튼 크게 넣어줘"'}
      after={<>"Hero 아래에 <b>CTA</b>로 '지금 시작하기'를 넣어줘"</>}
      tip={<>그냥 버튼은 아무 행동이나, <b>CTA</b>는 그 페이지에서 가장 원하는 행동이에요.</>}
    />
  );
}
