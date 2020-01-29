import React from "react";

class AdminLoggedIn extends React.Component {
  constructor() {
    super();
    this.state = {
      quizTitle: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: `${event.target.value}` });
  };

  handleSubmit = event => {
    event.preventDefault();
    const quizTitle = this.state.quizTitle;
    console.log(this.state.quizTitle);

    fetch("/api/v1/admin/quiz/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quizTitle })
    })
      .then(res => res.json())
      .then(createquiz =>
        console.log(createquiz, "Empty quiz has been created")
      );
  };

  render() {
    return (
      <div>
        <h1>Welcome Chandni</h1>
        <br />
        <label>Quiz Title :</label>
        <input
          type="text"
          name="quizTitle"
          placeholder="Please enter the title"
          onChange={this.handleChange}
        />
        <br />
        <button className="create-quiz" onClick={this.handleSubmit}>
          Create Quiz
        </button>
        <button className="see-all-quizzes">All Quizzes</button>
      </div>
    );
  }
}

export default AdminLoggedIn;
