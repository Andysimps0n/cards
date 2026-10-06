import { TermCard } from "./TermCard.jsx";
import { DatePickerMock } from "../mocks.jsx";

export function DatePickerCard() {
  return (
    <TermCard
      name="DatePickerCard"
      page="07"
      mock={<DatePickerMock />}
      stage="UI 용어 ⑤"
      term="Date Picker"
      pron="[데이트 피커]"
      mean="달력을 띄워 날짜를 고르는 입력칸이에요."
      when="예약일, 생일처럼 날짜를 받을 때 써요."
      before={'"누르면 달력 뜨는 칸 만들어줘"'}
      after={<>"예약 날짜는 <b>Date Picker</b>로 받아줘"</>}
      tip={<>기간을 고를 땐 "시작일과 종료일을 <b>Date Picker</b>로"라고 말해요.</>}
    />
  );
}
