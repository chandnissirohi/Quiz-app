import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AdminHeader from "./AdminHeader.js";
import { createQuizTitileAndQuiz } from "../redux/actions/quizAction";

class CreateQuizTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizTitle: ""
    };
  }

  cb = () => {
    this.props.history.push("/admin/quiz/allquizzes");
  };

  handleChange = event => {
    this.setState({ [event.target.name]: `${event.target.value}` });
  };

  handleSubmit = event => {
    event.preventDefault();
    const quizTitle = this.state.quizTitle;
    console.log(this.state.quizTitle);
    if(!quizTitle) return alert("Please enter a Quiz Title!")
    this.props.createQuizTitileAndQuiz({ quizTitle }, this.cb);
  };

  render() {
    console.log(this.props, "inside createQuizTitle");
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
              <Link
                to="/admin/quiz/allquizzes"
                onClick={this.handleSubmit}
                className="button is-black"
              >
                Create Quiz
              </Link>
            </div>
          </center>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { createQuizTitileAndQuiz })(
  CreateQuizTitle
);
