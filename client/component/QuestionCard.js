import React, {Component} from "react";
import {connect} from 'react-redux';
import {fetchQuestionData} from '../redux/actions/questionAction';

class QuestionCard extends Component {
  constructor(props) {
    super(props);
  }
  
  handleEdit = () => {

  }
  render() {
    console.log(this.props, 'inside QuestionCard')
    return (
      <>
        <div className="wrapper">
          <h3>{this.props.question.question}</h3>
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

export default connect(mapStateToProps , {fetchQuestionData})(QuestionCard);
