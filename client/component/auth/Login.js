import React from "react";

class Login extends React.Component {
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
      <div>
        <h1>Login</h1>
        <label>Username :</label>
        <input
          type="text"
          name="username"
          placeholder="Please enter your username"
          onChange={this.handleChange}
        />
        <br />
        <label>Email Id :</label>
        <input
          type="email"
          name="email"
          placeholder="Please enter your email"
          onChange={this.handleChange}
        />
        <br />
        <label>Password :</label>
        <input
          type="password"
          name="password"
          placeholder="Please enter your password"
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.handleSubmit} className="login">
          Login
        </button>
      </div>
    );
  }
}

export default Login;
