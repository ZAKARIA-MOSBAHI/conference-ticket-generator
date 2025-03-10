import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import ContextProvider from "./context/context.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
