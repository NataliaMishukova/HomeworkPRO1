import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/themeContext/ThemeProvider.tsx";
import ContactForm from "./components/ContactForm/ContactForm.tsx";
/*import Homework_02 from "./components/Homework_02/Homework_02.tsx";*/

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
      <ContactForm />
    </BrowserRouter>
  </ThemeProvider>
);
