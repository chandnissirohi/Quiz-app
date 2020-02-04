import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuestionData } from "../redux/actions/questionAction";

class QuestionCard extends Component {
  constructor(props) {
    super(props);
  }

  handleEdit = () => {};
  render() {
    // console.log(this.props, "inside QuestionCard");
    const questions = this.props.question;
    console.log(questions, "kkkk");
    return (
      <>
        <div className="wrapper">
          <h3>{questions.question}</h3>
          <div>
            <p>{questions.option1}</p>
            <p>{questions.option2}</p>
            <p>{questions.option3}</p>
            <p>{questions.option4}</p>
          </div>
          <div className="control block">
            <button className="button is-black ">Edit</button>
            <button className="button is-black ">Delete</button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { fetchQuestionData })(QuestionCard);
