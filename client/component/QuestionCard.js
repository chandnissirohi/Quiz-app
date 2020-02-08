import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { editQuestion } from "../redux/actions/questionAction";
import { fetchQuizData } from "../redux/actions/quizAction";

class QuestionCard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("hihiihiioh", this.props.match.params);
    console.log(this.props.match.params.id, "inside params");

    this.props.fetchQuizData(this.props.match.params.id);
  }
  // componentDidMount() {
  //   const { id } = this.props.match.params;
  //   const question = this.props.question && this.props.question;
  //   fetch(`/api/v1/admin/question/${id}`, {
  //     method: "GET"
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.success) {
  //         console.log("fecth success");
  //         this.setState({
  //           question: data.question.question,
  //           option1: data.question.option1,
  //           option2: data.question.option2,
  //           option3: data.question.option3,
  //           option4: data.question.option4,
  //           answer: data.question.answer,
  //           quizId: data.question.quizId
  //         });
  //       }
  //     });
  // }

  handleEdit = () => {
    this.props.editQuestion(data, id);
    console.log(data, id, "inside edit question");
  };

  render() {
    // console.log(this.props, "inside QuestionCard");
    const question = this.props.question && this.props.question;
    // const questionId = question && question._id

    console.log(question._id, "kkkk");
    return (
      <>
        <div className="wrapper">
          <center>
            <label className="label heading">{question.question}</label>

            <div>
              <button className="button button1 is-warning">
                {question.option1}
              </button>
              <button className="button button1 is-warning">
                {question.option2}
              </button>
              <button className="button button1 is-warning">
                {question.option3}
              </button>
              <button className="button button1 is-warning">
                {question.option4}
              </button>
            </div>
            <div className="control block">
              <div className="flex">
                <button
                  // onClick={this.handleEdit(data, id)}
                  className="button is-black "
                >
                  <Link
                    className="is-text is-edit"
                    to={`/admin/quiz/question/edit/${question._id}`}
                  >
                    Edit
                  </Link>
                </button>
                <button className="button is-black ">Delete</button>
              </div>
            </div>
            <hr className="hr" />
          </center>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { editQuestion, fetchQuizData })(
  withRouter(QuestionCard)
);
