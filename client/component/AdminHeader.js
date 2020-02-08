import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { adminLogout } from "../redux/actions/adminAction";
import { userLogout } from "../redux/actions/userAction";

class AdminHeader extends React.Component {
  handleLogout = () => {
    this.props.adminLogout();
    this.props.userLogout();
  };

  render() {
    // console.log(this.props, "inside header");
    return (
      <div>
        {this.props.adminReducer.isAdminLoggedIn ? (
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="navbar-item" to={"/admin/quiz/allquizzes"}>
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
                <Link to={"/admin/quiz/title"} className="navbar-item">
                  Create Quiz
                </Link>

                <Link to={"/"} className="navbar-item">
                  Users
                </Link>

                <Link to={"/admin/quiz/allquizzes"} className="navbar-item">
                  All Quizzes
                </Link>

                <div className="navbar-item has-dropdown is-hoverable"></div>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <button onClick={this.handleLogout} className="button">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </nav>
        ) : this.props.userReducer.isUserLoggedIn ? (
          <div>
            <nav
              className="navbar"
              role="navigation"
              aria-label="main navigation"
            >
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
        ) : (
          <div className="navbar-brand">
            <Link className="navbar-item" to={"/admin/quiz/allquizzes"}>
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
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <Link to={"/admin/login"} className="navbar-item">
                  Admin Login
                </Link>

                <Link to={"/signup"} className="navbar-item">
                  User Signup
                </Link>

                <div className="navbar-item has-dropdown is-hoverable"></div>
              </div>
            </div>
          </div>
        )}
        ;
      </div>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { adminLogout, userLogout })(
  AdminHeader
);
