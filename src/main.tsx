import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { App } from "./App";

document.body.classList.add("bg-gray-100", "dark:bg-gray-900");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
