import React from "react";
import ReactDom from "react-dom";

import "./stylesheet/main.css";
import Quiz from "./component/Quiz";

function App() {
  return (
    <div className="App">
      <Quiz />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
