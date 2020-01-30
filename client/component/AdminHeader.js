import React from "react";

class AdminHeader extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <h1 className="header-logo">Quiz App</h1>
            </a>

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
              <a className="navbar-item">Create Quiz</a>

              <a className="navbar-item">Users</a>
              <a className="navbar-item">All Quizzes</a>

              <div className="navbar-item has-dropdown is-hoverable"></div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons"></div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default AdminHeader;
