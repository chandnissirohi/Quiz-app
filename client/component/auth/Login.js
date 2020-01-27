import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
       
          <h1>Login</h1>
          <label>Username :</label>
          <input type="text" placeholder="Please enter your username" />
          <br />
          <label>Email Id :</label>
          <input type="email" placeholder="Please enter your email" />
          <br />
          <label>Password :</label>
          <input type="email" placeholder="Please enter your password" />
          <br />
          <button className="login">Login</button>
      </div>
    );
  }
}

export default Login;
