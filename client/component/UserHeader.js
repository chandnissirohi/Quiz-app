import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userLogOut } from "../redux/actions/userAction";

class UserHeader extends React.Component {
  handleLogout = () => {
    this.props.userLogOut();
  };

  render() {
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to={"/"}>
              <h1 className="header-logo">Quiz App</h1>
            </Link>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to={"/"} className="navbar-item">
                Your Quiz Scores
              </Link>

              <Link to={"/admin/quiz/allquizzes"} className="navbar-item">
                All Quizzes
              </Link>
              <Link to={"/user/LeaderBoard"} className="navbar-item">
                Leaderboard
              </Link>

              <div className="navbar-item has-dropdown is-hoverable"></div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <button onClick={this.handleLogout} className="button">
                  Logout
                </button>
                {/* <Link to={"/signup"} className="navbar-item">
                  Signup
                </Link> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { userLogOut })(UserHeader);
