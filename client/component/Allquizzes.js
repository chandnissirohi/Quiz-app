import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader.js";

class Allquizzes extends React.Component {
  constructor() {
    super();
    this.state = {
      allquizzes: ""
    };
  }

  componentDidMount() {
    fetch("/api/v1/admin/quiz/", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(allquizzes => this.setState({ allquizzes: allquizzes.quizzes }));
  }

  render() {
    // console.log(this.state);
    return (
      <>
        <AdminHeader />
        <div className="wrapper">
          <center>
            <h1 className="login-header">All Quizzes</h1>
          </center>
          <div className="field">
            {this.state.allquizzes &&
              this.state.allquizzes.map(quiz => (
                <div className="quiz-selector control">
                  <Link
                    className="button is-text"
                    to={`/admin/quiz/new/${quiz._id}`}
                  >
                    {quiz.quizTitle}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default Allquizzes;
