import React from "react";
import UserHeader from "./UserHeader.js";

class LeaderBoard extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <UserHeader />
        <div className="wrapper flex">
          <div>
            <label class="label heading board-label ">Users</label>
            <span class="button button1 user-scores is-warning">
              <strong>User1</strong>
            </span>
          </div>
          <div>
            <label class="label heading board-label">Scores</label>
            <button class="button button1 user-scores is-warning">
              <strong>100</strong>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default LeaderBoard;
