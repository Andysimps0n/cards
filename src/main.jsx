import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/mock.css";
import "./posts/ui-talk-01/cards.css";
import "./posts/ui-talk-02/cards.css";
import "./posts/ui-talk-03/cards.css";
import "./posts/ui-talk-04/cards.css";
import "./posts/ui-talk-05/cards.css";
import "./posts/ui-talk-06/cards.css";

createRoot(document.getElementById("root")).render(<App />);
