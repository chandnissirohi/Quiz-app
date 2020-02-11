import React from "react";
import validator from "validator";
import { connect } from "react-redux";
import AdminHeader from "../AdminHeader"
import { userSignUp } from "../../redux/actions/userAction";

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

  cb = () => {
    this.props.history.push("/user/login");
  }
  handleSubmit = event => {
    event.preventDefault();
    const { email, username, password } = this.state;
    const userData = {
      email,
      password,
      username
    };

    if (!email || !password || !username) {
      return alert("Email,Password and username are a must for signing up!");
    }

    if (!validator.isEmail(email)) {
      return alert("Email is invalid");
    }

    if (password.length < 6) {
      return alert("Password must consist of atleast 6 characters");
    }

    this.props.userSignUp(userData , this.cb);
  };

  render() {
    console.log(this.props, "inside userSignUp component");
    return (
      <>
        <AdminHeader />

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

const mapStateToProps = Store => Store;

export default connect(mapStateToProps, { userSignUp })(UserSignup);
