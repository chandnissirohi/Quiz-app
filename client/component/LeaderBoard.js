import React from "react";
import { connect } from "react-redux";
import AdminHeader from "./AdminHeader.js";
import { getUserList } from "../redux/actions/userAction";

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserList();
    // console.log(this.props.getUserList, "user list is here");
  }

  render() {
    const userList =
      this.props.userReducer.userList && this.props.userReducer.userList;
    console.log(userList, "leaderboard");
    return (
      <>
        <AdminHeader />
        <div className="wrapper flex">
          {userList &&
            userList.map((userData, i) => {
              return (
                <>
                  <div key={i}>
                    <label className="label heading board-label ">Users</label>
                    <span className="button button1 user-scores is-warning">
                      <strong>{`${userData.username}`}</strong>
                    </span>
                  </div>

                  <div>
                    <label className="label heading board-label">Scores</label>
                    <button className="button button1 user-scores is-warning">
                      <strong>{`${userData.score}`}</strong>
                    </button>
                  </div>
                </>
              );
            })}
        </div>
      </>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { getUserList })(LeaderBoard);
