import React from "react";
import UserHeader from "./UserHeader";
import {
  fetchQuizData,
  fetchingQuestionList
} from "../redux/actions/quizAction";
import { createSubmission } from "../redux/actions/submissionAction";

import { connect } from "react-redux";

class QuizAttemptByUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      submittedAnswer: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    // console.log(id , 'inside cdm')
    this.props.fetchQuizData(id);
    this.props.fetchingQuestionList(id);
  }
  handleChange = answer => {
    this.setState({ submittedAnswer: answer });
  };

  nextQuestionHandler = (quizid, answer, userId, questionId) => {
    console.log(quizid);
    this.setState({
      activeIndex: this.state.activeIndex + 1
    });
    const { submittedAnswer } = this.state;
    this.props.createSubmission({
      quizid,
      answer,
      userId,
      questionId,
      submittedAnswer
    });
  };

  handleRoute = () => {
    this.props.history.push("/leaderboard");
  };

  handlecorrectAnswer = (option, answer) => {
    console.log(option, answer);
    option == answer
      ? this.setState({ score: ++this.state.score })
      : this.setState({ score: --this.state.score });
  };

  render() {
    const singleQuizData =
      this.props.quizReducer.singleQuizData &&
      this.props.quizReducer.singleQuizData;
    const questionSet = this.props.quizReducer.questionList;
    const answer = questionSet && questionSet[this.state.activeIndex].answer;
    const length = questionSet && questionSet.length - 1;

    return (
      <>
        <UserHeader />
        <div className="wrapper">
          <center>
            <label className="label heading">
              {singleQuizData && singleQuizData.quizTitle}
            </label>
            <div>
              <p>{this.state.score}</p>
            </div>
            <div>
              <label className="label heading">
                {questionSet && questionSet[this.state.activeIndex].question}
              </label>
              <div>
                <button
                  className="button button1 is-warning"
                  onClick={() => this.handleChange("option3")}
                >
                  <strong>
                    {questionSet && questionSet[this.state.activeIndex].option3}
                  </strong>
                </button>
                <button
                  className="button button1 is-warning"
                  onClick={() => this.handleChange("option1")}
                >
                  <strong>
                    {questionSet && questionSet[this.state.activeIndex].option1}
                  </strong>
                </button>
                <button
                  className="button button1 is-warning"
                  onClick={() => this.handleChange("option4")}
                >
                  <strong>
                    {questionSet && questionSet[this.state.activeIndex].option4}
                  </strong>
                </button>
                <button
                  className="button button1 is-warning"
                  onClick={() => this.handleChange("option2")}
                >
                  <strong>
                    {questionSet && questionSet[this.state.activeIndex].option2}
                  </strong>
                </button>
              </div>
              {this.state.activeIndex == length ? (
                <button className="button is-black" onClick={this.handleRoute}>
                  Submit
                </button>
              ) : (
                <button
                  className="button"
                  onClick={() =>
                    this.nextQuestionHandler(
                      singleQuizData._id,
                      answer,
                      this.props.userReducer.userData._id,
                      questionSet[this.state.activeIndex]._id
                    )
                  }
                >
                  Next
                </button>
              )}
            </div>
          </center>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, {
  fetchQuizData,
  fetchingQuestionList,
  createSubmission
})(QuizAttemptByUser);
