import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App.js";
import { withRouter, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Store from "./redux/store/store.js";
import "../node_modules/bulma/css/bulma.css";
import "./stylesheet/main.css";

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
