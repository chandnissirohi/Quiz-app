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

  settingState = (question , quiz) => {
    console.log(quiz.questionSet.indexOf(question) , "inside setting state")
    this.setState({
      question: question.question,
      option1: question.option1,
      option2: question.option2,
      option3: question.option3,
      option4: question.option4,
      answer: question.answer,
      quizId: question.quizId,
      quizData: quiz,
    });
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchQuestionData(id, this.settingState);
    // fetch(`/api/v1/admin/question/${id}`, {
    //   method: "GET"
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.success) {
    //       console.log("fecth success");
    //       this.setState({
    //         question: data.question.question,
    //         option1: data.question.option1,
    //         option2: data.question.option2,
    //         option3: data.question.option3,
    //         option4: data.question.option4,
    //         answer: data.question.answer,
    //         quizId: data.question.quizId
    //       });
    //     }
    //   });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleUpdate = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const quizId = this.props.match.params.quizId;

    this.props.editQuestion(this.state, id);
    // fetch(`/api/v1/admin/question/update/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: localStorage.quizAdminToken
    //   },
    //   body: JSON.stringify({
    //     question: this.state.question,
    //     option1: this.state.option1,
    //     option2: this.state.option2,
    //     option3: this.state.option3,
    //     option4: this.state.option4,
    //     answer: this.state.answer,
    //     quizId: this.state.quizId
    //   })
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.success) {
    //       console.log("fecth success");
    //       this.props.history.push(`/admin/quiz`);
    //     }
    //   });
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
              {/* <input
                className="input"
                type="text"
                name="answer"
                value={this.state.answer}
                
              /> */}
            </div>
            <input type="submit" onClick={this.handleUpdate} value="Submit" />
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
