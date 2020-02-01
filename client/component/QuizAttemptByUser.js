import React from "react";
import UserHeader from "./UserHeader";

class QuizAttemptByUser extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <UserHeader />
        <div className="wrapper">
          <center>
            <label class="label heading">What is your name?</label>
            <button class="button button1 is-warning">
              <strong>My name is Yash</strong>
            </button>
            <button class="button button1 is-warning">
              <strong>My name is Prateek</strong>
            </button>
            <button class="button button1 is-warning">
              <strong>My name is Tejas</strong>
            </button>
            <button class="button button1 is-warning">
              <strong>My name is Sunny</strong>
            </button>
            <div className="control">
              <button className="button is-black">Submit</button>
            </div>
          </center>
        </div>
      </>
    );
  }
}

export default QuizAttemptByUser;
