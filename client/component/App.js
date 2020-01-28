import React from "react";
import ReactDom from "react-dom";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";

import "../stylesheet/main.css";
// import Quiz from "./component/Quiz";
import UserLogin from "./auth/UserLogin";
import UserSignup from "./auth/UserSignup";
import AdminLogin from "./auth/AdminLogin";

function App() {
  return (
    // <div className="App">
    <>
      <Switch>
        <Route exact path="/admins/login" component={AdminLogin} />
        <Route exact path="/user/signup" component={UserSignup} />
        <Route exact path="/user/login" component={UserLogin} />
      </Switch>
    </>
  );
}

export default App;
