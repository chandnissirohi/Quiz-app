import React from "react";

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

    const adminData = { email, password };

    fetch("/api/v1/admins/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminData)
    })
      .then(res => res.json())
      .then(admin => console.log(admin, "admin has logged in"));
  };

  render() {
    return (
      <div>
        <h1>Admin Login</h1>
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

export default AdminLogin;
