import React from "react";
import { connect } from "react-redux";

import AdminHeader from "./AdminHeader.js";
import {
  editQuestion,
  fetchQuestionData
} from "../redux/actions/questionAction";

class EditQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      quizId: "",
      answer: "",
      quizData: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchQuestionData(id, this.settingState);
  }
  settingState = question => {
    this.setState({
      question: question.question,
      option1: question.option1,
      option2: question.option2,
      option3: question.option3,
      option4: question.option4,
      answer: question.answer,
      quizId: question.quizId
    });
  };

  cb = () => {
    this.props.history.push(`/admin/quiz/new/${this.state.quizId}`);
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleUpdate = e => {
    e.preventDefault();
    const { id } = this.props.match.params;

    this.props.editQuestion(this.state, id, this.cb);
  };

  render() {
    console.log(this.props, "inside edit question");
    return (
      <>
        <AdminHeader />
        <div className="wrapper">
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
              <label className="label">Option1:</label>
              <input
                className="input"
                type="text"
                name="option1"
                value={this.state.option1}
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <label className="label">Option2:</label>
              <input
                className="input"
                type="text"
                name="option2"
                value={this.state.option2}
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <label className="label">Option3:</label>
              <input
                className="input"
                type="text"
                name="option3"
                value={this.state.option3}
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <label className="label">Option4:</label>
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
            <input
              type="submit"
              className="submit"
              onClick={this.handleUpdate}
              value="Submit"
            />
          </center>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { fetchQuestionData, editQuestion })(
  EditQuestion
);
