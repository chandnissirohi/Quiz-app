import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AdminHeader from "./AdminHeader.js";
import { fetchingQuizList, deletingQuiz } from "../redux/actions/quizAction";

class Allquizzes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchingQuizList();
  }

  deleteQuiz = id => {
    this.props.deletingQuiz(id);
  };

  // handleQuizSetSubmission = id => {
  //   this.props.createQuizSetSubmission(id);
  // };

  render() {
    const isAdminLoggedIn = this.props.adminReducer.isAdminLoggedIn;
    return (
      <>
        <AdminHeader />
        <div className="wrapper">
          <center>
            <h1 className="login-header">All Quizzes</h1>
          </center>
          <div className="field">
            {this.props.quizReducer.quizList &&
              this.props.quizReducer.quizList.map((quiz, i) => (
                <div key={i} className="quiz-selector control">
                  {isAdminLoggedIn === true ? (
                    <>
                      <Link
                        className="button is-text"
                        to={`/admin/quiz/new/${quiz._id}`}
                      >
                        {quiz.quizTitle}
                      </Link>
                      <button
                        onClick={() => this.deleteQuiz(quiz._id)}
                        className="button is-black is-delete"
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <Link
                      className="button is-text"
                      to={`/quiz-attempt/${quiz._id}`}
                    >
                      {quiz.quizTitle}
                    </Link>
                  )}
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, {
  fetchingQuizList,
  deletingQuiz
})(Allquizzes);
