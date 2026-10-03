import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/mock.css";
import "./posts/ui-talk-01/cards.css";
import "./posts/ui-talk-02-header-footer/cards.css";
import "./posts/ui-talk-03-inputs/cards.css";

createRoot(document.getElementById("root")).render(<App />);
