import React from "react";
import UserHeader from "../UserHeader"

class UserLogin extends React.Component {
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
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;

    const userData = { username, email, password };

    fetch("/api/v1/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(user => console.log(user, "User has logged in"));
  };

  render() {
    return (
      <>
        <UserHeader />

        <div className="field wrapper">
          <h1 className="login-header">User Login</h1>
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
                Login
              </button>
            </div>
          </center>
        </div>
      </>
    );
  }
}

export default UserLogin;
