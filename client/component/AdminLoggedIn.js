import React from "react";
import AdminHeader from "./AdminHeader.js";

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
      <>
        <AdminHeader />

        <div className="field wrapper">
          <h1 className="login-header">Quiz Title</h1>
          <center>
            <div className="control">
              <input
                className="input"
                type="text"
                name="quizTitle"
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <button onClick={this.handleSubmit} className="button is-black">
                Create Quiz
              </button>
            </div>
          </center>
        </div>
      </>
    );
  }
}

export default AdminLoggedIn;
