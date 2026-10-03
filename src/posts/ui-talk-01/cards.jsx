import { Cover } from "./cards/Cover.jsx";
import { Chat } from "./cards/Chat.jsx";
import { ModalCard } from "./cards/Modal.jsx";
import { BottomSheetCard } from "./cards/BottomSheet.jsx";
import { DrawerCard } from "./cards/Drawer.jsx";
import { ToastCard } from "./cards/Toast.jsx";
import { TooltipCard } from "./cards/Tooltip.jsx";
import { Compare } from "./cards/Compare.jsx";
import { Ending } from "./cards/Ending.jsx";

/* 이 배열 순서가 미리보기 스크롤 순서이자 export 순서입니다. */
export const cards = [
  { id: "01", label: "cover", Card: Cover },
  { id: "02", label: "chat", Card: Chat },
  { id: "03", label: "Modal", Card: ModalCard },
  { id: "04", label: "Bottom Sheet", Card: BottomSheetCard },
  { id: "05", label: "Drawer", Card: DrawerCard },
  { id: "06", label: "Toast", Card: ToastCard },
  { id: "07", label: "Tooltip", Card: TooltipCard },
  { id: "08", label: "compare", Card: Compare },
  { id: "09", label: "ending", Card: Ending },
];
