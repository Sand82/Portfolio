import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
