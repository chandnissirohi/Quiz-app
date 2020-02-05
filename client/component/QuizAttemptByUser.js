import React from "react";
import UserHeader from "./UserHeader";
import { userFetchQuizData } from "../redux/actions/userAction";

import { connect } from "react-redux";

class QuizAttemptByUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      activeIndex: 0,
      quizEnd: false,
      disabled: true
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    // console.log(id , 'inside cdm')
    this.props.userFetchQuizData(id);
  }

  nextQuestionHandler = () => {
    this.setState({
      activeIndex: this.state.activeIndex + 1
    });
  };

  // finishHandler = () => {
  //   if (this.activeIndex === questionSet &&
  //     questionSet.length -
  //       1) {
  //     this.setState({
  //       quizEnd: true
  //     });
  //   }
  // };

  render() {
    const singleQuizData =
      this.props.quizReducer.singleQuizData &&
      this.props.quizReducer.singleQuizData;
    const questionSet = singleQuizData && singleQuizData.questionSet;
    const answer = questionSet && questionSet[this.state.activeIndex].answer;

    console.log(answer, "inside QuizAttemptByUser");

    return (
      <>
        <UserHeader />
        <div className="wrapper">
          <center>
            <label className="label heading">
              {singleQuizData && singleQuizData.quizTitle}
            </label>
            <div>
              <label className="label heading">
                {questionSet && questionSet[this.state.activeIndex].question}
              </label>
              <div>
                <button
                  className={`button button1 is-warning ${
                    answer && answer === "option1" ? "selected" : null
                  }`}
                  onClick={() => this.checkAnswer()}
                >
                  <strong>
                    {questionSet && questionSet[this.state.activeIndex].option1}
                  </strong>
                </button>
                <button
                  className={`button button1 is-warning ${
                    answer && answer === "option2" ? "selected" : null
                  }`}
                >
                  <strong>
                    {questionSet && questionSet[this.state.activeIndex].option2}
                  </strong>
                </button>
                <button
                  className={`button button1 is-warning ${
                    answer && answer === "option3" ? "selected" : null
                  }`}
                >
                  <strong>
                    {questionSet && questionSet[this.state.activeIndex].option3}
                  </strong>
                </button>
                <button
                  className={`button button1 is-warning ${
                    answer && answer === "option4" ? "selected" : null
                  }`}
                >
                  <strong>
                    {questionSet && questionSet[this.state.activeIndex].option4}
                  </strong>
                </button>
              </div>
              <button className="button" onClick={this.nextQuestionHandler}>
                Next
              </button>
            </div>
            {this.activeIndex === questionSet &&
              questionSet.length -
                1(
                  <div className="control">
                    <button
                      className="button is-black"
                      onClick={this.finishHandler}
                    >
                      Submit
                    </button>
                  </div>
                )}
          </center>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, {
  userFetchQuizData
})(QuizAttemptByUser);
