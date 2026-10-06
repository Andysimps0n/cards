import { Cover } from "./cards/Cover.jsx";
import { Chat } from "./cards/Chat.jsx";
import { SearchBarCard } from "./cards/SearchBarCard.jsx";
import { FilterCard } from "./cards/FilterCard.jsx";
import { SortCard } from "./cards/SortCard.jsx";
import { ChipCard } from "./cards/ChipCard.jsx";
import { AutocompleteCard } from "./cards/AutocompleteCard.jsx";
import { Summary } from "./cards/Summary.jsx";
import { Ending } from "./cards/Ending.jsx";

/* 이 배열 순서가 미리보기 스크롤 순서이자 export 순서입니다. */
export const cards = [
  { id: "01", label: "cover", Card: Cover },
  { id: "02", label: "chat", Card: Chat },
  { id: "03", label: "Search Bar", Card: SearchBarCard },
  { id: "04", label: "Filter", Card: FilterCard },
  { id: "05", label: "Sort", Card: SortCard },
  { id: "06", label: "Chip", Card: ChipCard },
  { id: "07", label: "Autocomplete", Card: AutocompleteCard },
  { id: "08", label: "summary", Card: Summary },
  { id: "09", label: "ending", Card: Ending },
];
