import { Cover } from "./cards/Cover.jsx";
import { Chat } from "./cards/Chat.jsx";
import { DropdownCard } from "./cards/DropdownCard.jsx";
import { ToggleCard } from "./cards/ToggleCard.jsx";
import { CheckboxCard } from "./cards/CheckboxCard.jsx";
import { RadioCard } from "./cards/RadioCard.jsx";
import { DatePickerCard } from "./cards/DatePickerCard.jsx";
import { Summary } from "./cards/Summary.jsx";
import { Ending } from "./cards/Ending.jsx";

/* 이 배열 순서가 미리보기 스크롤 순서이자 export 순서입니다. */
export const cards = [
  { id: "01", label: "cover", Card: Cover },
  { id: "02", label: "chat", Card: Chat },
  { id: "03", label: "Dropdown", Card: DropdownCard },
  { id: "04", label: "Toggle", Card: ToggleCard },
  { id: "05", label: "Checkbox", Card: CheckboxCard },
  { id: "06", label: "Radio Button", Card: RadioCard },
  { id: "07", label: "Date Picker", Card: DatePickerCard },
  { id: "08", label: "summary", Card: Summary },
  { id: "09", label: "ending", Card: Ending },
];
