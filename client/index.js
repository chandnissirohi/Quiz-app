import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App.js";
import { withRouter, BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <withRouter>
    <Router>
      <App />
    </Router>
  </withRouter>,
  document.getElementById("root")
);
