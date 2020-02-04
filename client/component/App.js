import React from "react";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import "../stylesheet/main.css";
import {connect} from "react-redux";
import {verifyUser} from "../redux/actions/verifyUserAction";
import ProtectedAdminRoutes from "./auth/ProtectedAdminRoutes";
import { ProtectedUserRoutes } from "./auth/ProtectedUserRoutes";
import { NonProtectedRoutes } from "./auth/NonProtectedRoutes";

class App extends React.Component {
  componentDidMount() {
    if(localStorage.token)
      this.props.verifyUser();
  }
  
  render() {
    console.log(this.props , 'inside app')
    return (
      <>
     {
       (this.props.adminReducer.isAdminLoggedIn) ?
        (<ProtectedAdminRoutes />):
        (this.props.userReducer.isUserLoggedIn) ?
        (<ProtectedUserRoutes />):
        (<NonProtectedRoutes />)
     }
     </>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps , {verifyUser})(App);
