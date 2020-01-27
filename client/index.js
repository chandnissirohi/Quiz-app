import React from "react";
import ReactDom from "react-dom";

import "./stylesheet/main.css";
// import Quiz from "./component/Quiz";
// import Login from "./component/auth/Login";
// import Signup from './component/auth/Signup'
import AdminLogin from './component/auth/AdminLogin'

function App() {
  return (
    <div className="App wrapper">
      {/* <Quiz /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      <AdminLogin />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
