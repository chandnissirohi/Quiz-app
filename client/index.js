import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App.js";
import { withRouter, BrowserRouter } from "react-router-dom";
import "./stylesheet/main.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
