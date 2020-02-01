import React from "react";
import { connect } from "react-redux";
import { adminLogin } from "../../redux/actions/adminAction.js";
import validator from "validator";
import AdminHeader from "../AdminHeader.js";

class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    if (!email || !password) {
      return alert("Email and password are must.");
    }

    if (!validator.isEmail(email)) {
      return alert("Email is invalid.");
    }

    if (password.length < 6) {
      return alert("Password must consist of atleast 6 characters.");
    }

    const adminData = { email, password };

    this.props.adminLogin(adminData);
  };

  render() {
    return (
      <>
        <AdminHeader />

        <div className="field wrapper">
          <h1 className="login-header">Admin Login</h1>
          <center>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <button onClick={this.handleSubmit} className="button is-black">
                Login
              </button>
            </div>
          </center>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { adminLogin })(AdminLogin);
