// import necessary modules and components
import { ToastContainer } from "react-toastify";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";
import "./index.css";

// Render the App component inside a StrictMode wrapper and include the ToastContainer for toast notifications
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ToastContainer />
  </StrictMode>,
);
