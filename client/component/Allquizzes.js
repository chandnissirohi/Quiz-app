import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AdminHeader from "./AdminHeader.js";
import fetchingQuizList from "../redux/actions/quizAction";

class Allquizzes extends React.Component {
  constructor() {
    super();
    this.state = {
      allquizzes: ""
    };
  }

  componentDidMount() {
    this.props.fetchingQuizList();
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

const mapStateToProps = store => store;

export default connect(mapStateToProps, { fetchingQuizList })(Allquizzes);
