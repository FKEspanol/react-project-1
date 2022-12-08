import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/js/bootstrap.bundle";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./css/style.css";
//import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
