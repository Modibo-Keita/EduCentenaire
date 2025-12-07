import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Router } from "wouter";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Impossible de trouver l’élément #root dans index.html");
}

createRoot(rootElement).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
