import React from "react";
import { connect } from "react-redux";
import AdminHeader from "./AdminHeader.js";
import { creatingQuestion } from "../redux/actions/quizAction";
import QuestionCard from "./QuestionCard.js";

class CreateQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      quiz: "",
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

    fetch(`/api/v1/admin/quiz/${id}`, {
      method: "GET"
      // headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(quiz => this.setState({ quiz: quiz.quiz }));
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const quizId = this.state.quiz._id;
    const question = this.state.question;
    const option1 = this.state.option1;
    const option2 = this.state.option2;
    const option3 = this.state.option3;
    const option4 = this.state.option4;
    const answer = this.state.answer;
    const quizData = {
      quizId,
      question,
      option1,
      option2,
      option3,
      option4,
      answer
    };

    // fetch("/api/v1/admin/question/create", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(quizData)
    // })
    //   .then(res => res.json())
    //   .then(question =>
    //     fetch("/api/v1/admin/quiz/update", {
    //       method: "PUT",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ quizId, question })
    //     })
    //       .then(res => res.json())
    //       .then(updatedQuiz => console.log(updatedQuiz, "updated"))
    //   );

    this.props.creatingQuestion(quizData);
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
    // console.log(this.props, "inside createquiz component");
    return (
      <>
        <AdminHeader />

        <div className="field wrapper">
          <h1 className="login-header">
            Add Quiz questions for {this.state.quiz.quizTitle}
          </h1>
          <center>
            <div className="control">
              <label className="label">Question 1:</label>
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
              <label className="label">Correct Answer:</label>
              <input
                className="input"
                type="text"
                name="answer"
                value={this.state.answer}
                onChange={this.handleChange}
              />
            </div>

            <div className="control">
              <button onClick={this.handleSubmit} className="button is-black">
                Next
              </button>
            </div>
          </center>
          <QuestionCard />
        </div>
      </>
    );
  }
}

const mapStateToProps = store => store;
export default connect(mapStateToProps, { creatingQuestion })(CreateQuiz);
