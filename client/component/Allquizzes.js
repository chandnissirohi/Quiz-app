import React from "react";
import { Link } from "react-router-dom";

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
      <div>
        <h1>All Quizzes</h1>
        {this.state.allquizzes &&
          this.state.allquizzes.map(quiz => (
            <div className="quiz-selector">
              <Link to={`/admin/quiz/new/${quiz._id}`}>{quiz.quizTitle}</Link>
            </div>
          ))}
      </div>
    );
  }
}

export default Allquizzes;