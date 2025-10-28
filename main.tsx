import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Homework_02 from "./components/Homework_02/Homework_02.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
   { /*<Homework_02 />*/}
    <App />
  </StrictMode>
);
