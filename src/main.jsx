import React from "react";
import ReactDOM from "react-dom/client";

import "./css/style.css";
import "bootstrap/dist/js/bootstrap.bundle";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
