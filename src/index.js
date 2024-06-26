import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Router } from "react-router-dom";
import { AppProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>
);
