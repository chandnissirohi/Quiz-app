import React from "react";

class AdminLogin extends React.Component {
  render() {
    return (
      <div>
        <h1>Admin Login</h1>
        <label>Email Id :</label>
        <input type="email" placeholder="Please enter your email" />
        <br />
        <label>Password :</label>
        <input type="password" placeholder="Please enter your password" />
        <br />
        <button className="login">Login</button>
      </div>
    );
  }
}

export default AdminLogin;
