import React from "react";

class CreateQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      //   quizTitle: "",
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // const quizTitle = this.state.quizTitle;
    const question = this.state.question;
    const option1 = this.state.option1;
    const option2 = this.state.option2;
    const option3 = this.state.option3;
    const option4 = this.state.option4;
    const answer = this.state.answer;
    const quizData = {
      //   quizTitle,
      question,
      option1,
      option2,
      option3,
      option4,
      answer
    };

    fetch("/api/v1/admin/question/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(quizData)
    })
      .then(res => res.json())
      .then(question => console.log(question));
  };

  render() {
    return (
      <div>
        <h1>Create Quiz</h1>
        {/* <label>Quiz Title :</label>
        <input
          type="text"
          name="quizTitle"
          placeholder="Please enter the title of your quiz"
          onChange={this.handleChange}
        /> */}
        <br />
        <label>Question 1 :</label>
        <input
          type="text"
          name="question"
          placeholder="Please enter your question"
          onChange={this.handleChange}
        />
        <br />
        <label>Option 1 :</label>
        <input
          type="text"
          name="option1"
          placeholder="Please enter the option for your question"
          onChange={this.handleChange}
        />
        <br />
        <label>Option 2 :</label>
        <input
          type="text"
          name="option2"
          placeholder="Please enter the option for your question"
          onChange={this.handleChange}
        />
        <br />
        <label>Option 3 :</label>
        <input
          type="text"
          name="option3"
          placeholder="Please enter the option for your question"
          onChange={this.handleChange}
        />
        <br />
        <label>Option 4 :</label>
        <input
          type="text"
          name="option4"
          placeholder="Please enter the option for your question"
          onChange={this.handleChange}
        />
        <br />
        <label>Correct Answer :</label>
        <input
          type="text"
          name="answer"
          placeholder="Please enter the correct answer"
          onChange={this.handleChange}
        />
        <br />
        <button className="next" onClick={this.handleSubmit}>
          Next
        </button>
      </div>
    );
  }
}

export default CreateQuiz;
