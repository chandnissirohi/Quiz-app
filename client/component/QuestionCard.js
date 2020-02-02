import React from "react";

class QuestionCard extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="wrapper">
          <h3>Dummy Question</h3>
          <div className="control block">
            <button className="button is-black ">Edit</button>
            <button className="button is-black ">Delete</button>
          </div>
        </div>
      </>
    );
  }
}

export default QuestionCard;
