import React from "react";
import { connect } from "react-redux";
import AdminHeader from "./AdminHeader.js";
import {
  creatingQuestion,
  fetchQuizData,
  fetchingQuestionList
} from "../redux/actions/quizAction";
import QuestionCard from "./QuestionCard.js";

class CreateQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: ""
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchQuizData(id);
    this.props.fetchingQuestionList(id);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const quizId = this.props.match.params;
    const question = this.state.question;
    const option1 = this.state.option1;
    const option2 = this.state.option2;
    const option3 = this.state.option3;
    const option4 = this.state.option4;
    const answer = this.state.answer;

    if (!option1 || !option2 || !option3 || !option4)
      return alert("Please enter all options");

    if (!answer) return alert("Please enter the correct answer.");
    const quizData = {
      quizId,
      question,
      option1,
      option2,
      option3,
      option4,
      answer
    };

    this.props.creatingQuestion(quizData, this.props.fetchingQuestionList, () =>
      this.componentDidMount(this.props)
    );
    this.setState({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: ""
    });
  };

  render() {
    console.log(this.props, "inside createquiz component");
    return (
      <>
        <AdminHeader />

        <div className="field wrapper">
          <h1 className="login-header">
            Add Quiz questions for
            {this.props.quizReducer.singleQuizData &&
              this.props.quizReducer.singleQuizData.quizTitle}
          </h1>
          <div>
            <strong>
              {this.props.quizReducer.singleQuizData &&
                this.props.quizReducer.singleQuizData.totalScore}
            </strong>
          </div>
          <center>
            <div className="control">
              <label className="label">Question:</label>
              <input
                className="input"
                type="text"
                name="question"
                value={this.state.question}
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <label className="label">Option 1:</label>
              <input
                className="input"
                type="text"
                name="option1"
                value={this.state.option1}
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <label className="label">Option 2:</label>
              <input
                className="input"
                type="text"
                name="option2"
                value={this.state.option2}
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <label className="label">Option 3:</label>
              <input
                className="input"
                type="text"
                name="option3"
                value={this.state.option3}
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <label className="label">Option 4:</label>
              <input
                className="input"
                type="text"
                name="option4"
                value={this.state.option4}
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <label className="label">
                Correct Answer:
                <select
                  className="select-option"
                  name="answer"
                  value={this.state.answer}
                  onChange={this.handleChange}
                >
                  <option value="option1">{this.state.option1}</option>
                  <option value="option2">{this.state.option2}</option>
                  <option value="option3">{this.state.option3}</option>
                  <option value="option4">{this.state.option4}</option>
                </select>
              </label>
            </div>
            {/* <div className="control">
              <label className="label">Correct Answer:</label>
              <input
                className="input"
                type="text"
                name="answer"
                value={this.state.answer}
                onChange={this.handleChange}
              />
            </div> */}

            <div className="control">
              <button onClick={this.handleSubmit} className="button is-black">
                Next
              </button>
              {/* TODO : Add submit button => redirects to AllQuizes */}
            </div>
          </center>
          {this.props.quizReducer.questionList &&
          this.props.quizReducer.questionList.length > 0 ? (
            this.props.quizReducer.questionList.map((question, i) => {
              return <QuestionCard key={i} question={question} />;
            })
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = store => store;
export default connect(mapStateToProps, {
  creatingQuestion,
  fetchQuizData,
  fetchingQuestionList
})(CreateQuiz);
