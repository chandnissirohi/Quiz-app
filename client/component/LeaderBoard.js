import React from "react";
import AdminHeader from "./AdminHeader.js";

class LeaderBoard extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <AdminHeader />
        <div className="wrapper flex">
          <div>
            <label className="label heading board-label ">Users</label>
            <span className="button button1 user-scores is-warning">
              <strong>User1</strong>
            </span>
          </div>
          <div>
            <label className="label heading board-label ">Quiz Title</label>
            <span className="button button1 user-scores is-warning">
              <strong>Bollywood</strong>
            </span>
          </div>
          <div>
            <label className="label heading board-label">Scores</label>
            <button className="button button1 user-scores is-warning">
              <strong>100</strong>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default LeaderBoard;
