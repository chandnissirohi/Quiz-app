import React from "react";
import { Link } from "react-router-dom";
import {adminLogout} from "../redux/actions/adminAction";
import {connect} from 'react-redux';

class AdminHeader extends React.Component {

  handleLogout = () => {
    this.props.adminLogout();
  }

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
              <Link to={"/admin/quiz/title"} className="navbar-item">
                Create Quiz
              </Link>

              <Link to={"/"} className="navbar-item">
                Users
              </Link>

              <Link to={"/admin/quiz/allquizzes"} className="navbar-item">
                All Quizzes
              </Link>
              
              <Link to={"/"} className="navbar-item">
                Leaderboard
              </Link>

              <div className="navbar-item has-dropdown is-hoverable"></div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <button onClick={this.handleLogout} className="button">Logout</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = store => store

export default connect(mapStateToProps , {adminLogout}) (AdminHeader);
