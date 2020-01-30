import React from "react";
import UserHeader from "../UserHeader";

class UserSignup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
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
    const username = this.state.username;
    const userData = {
      email,
      password,
      username
    };
    // console.log(email, password, username);
    fetch("/api/v1/users/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(user => console.log(user, "user created"));
  };

  render() {
    return (
      <>
        <UserHeader />

        <div className="field wrapper">
          <h1 className="login-header">User Signup</h1>
          <center>
            <div className="control">
              <input
                className="input"
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              />
            </div>
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
                Signup
              </button>
            </div>
          </center>
        </div>
      </>
    );
  }
}

export default UserSignup;
