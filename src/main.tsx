import React from "react";
import ReactDOM from "react-dom/client";
import {App,CreateProject} from "./App";
import "./style.css";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CreateProject />
  </React.StrictMode>
);