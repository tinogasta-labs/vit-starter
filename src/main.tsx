import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./root";

createRoot(document.getElementById("root")!).render(<App />);
