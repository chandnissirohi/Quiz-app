import React from "react";
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

export default AdminLogin;
