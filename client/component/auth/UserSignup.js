import React from "react";

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
      <div>
        <h1>Signup</h1>
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
          Signup
        </button>
      </div>
    );
  }
}

export default UserSignup;
