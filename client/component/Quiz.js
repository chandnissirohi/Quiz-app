import React from "react";
import UserHeader from "./UserHeader.js";
import { userFetchQuizData } from "../redux/actions/userAction";
// import { QuizData } from './QuizData';
import { connect } from "react-redux";

class Quiz extends React.Component {
  state = {
    userAnswer: null,
    currentQuestion: 0,
    options: [],
    quizEnd: false,
    score: 0,
    disabled: true
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.userFetchQuizData(id);
  }
  
  loadQuiz = () => {
    const { currentQuestion } = this.props.
    this.setState(() => {
      return {
        questions: QuizData[currentQuestion].question,
        options: QuizData[currentQuestion].options,
        answers: QuizData[currentQuestion].answer
      };
    });
  };

 

  nextQuestionHandler = () => {
    const { userAnswer, answers, score } = this.state;
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);

    // if the answe is correct
    if (userAnswer === answers) {
      this.setState({ score: score + 1 });
    }
  };

  finishHandler = () => {
    if (this.state.currentQuestion === QuizData.length - 1) {
      this.setState({
        quizEnd: true
      });
    }
  };

  // updates the component
  componentDidUpdate(prevProps, prevstate) {
    const { currentQuestion } = this.state;
    if (this.state.currentQuestion !== prevstate.currentQuestion) {
      this.setState(() => {
        return {
          diabled: true,
          questions: QuizData[currentQuestion].question,
          options: QuizData[currentQuestion].options,
          answers: QuizData[currentQuestion].answer
        };
      });
    }
  }

  // check answer

  checkAnswer = answer => {
    this.setState({
      userAnswer: answer,
      disabled: false
    });
  };



  render() {
    const {
      questions,
      options,
      currentQuestion,
      userAnswer,
      quizEnd
    } = this.state;
    if (quizEnd) {
      return (
        <div>
          <h2>Game Over final score is {this.state.score}</h2>
          <p>The correct answers to the questions were</p>
          <ul>
            {QuizData.map((item, index) => (
              <li className="ui floating message options" key={index}>
                {item.answer}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return (
      <div className="App">
        <h2> {questions} </h2>
        <span>
          {" "}
          {`Questions ${currentQuestion} out of ${QuizData.length - 1}`}
        </span>
        {options.map(option => (
          <p
            key={option.id}
            className={`ui floating message options
     ${userAnswer === option ? "selected" : null}
     `}
            onClick={() => this.checkAnswer(option)}
          >
            {option}
          </p>
        ))}
        {currentQuestion < QuizData.length - 1 && (
          <button
            disabled={this.state.disabled}
            onClick={this.nextQuestionHandler}
          >
            Next
          </button>
        )}

        {currentQuestion === QuizData.length - 1 && (
          <button disabled={this.state.disabled} onClick={this.finishHandler}>
            Finish
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { userFetchQuizData })(Quiz);
