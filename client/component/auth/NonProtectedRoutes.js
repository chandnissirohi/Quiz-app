import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import UserLogin from "./UserLogin";
import UserSignup from "./UserSignup";

export const NonProtectedRoutes = () => {
  return (
    <Switch>
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/login" component={UserLogin} />
      <Route path="/signup" component={UserSignup} />
      <Route component={UserLogin} />
    </Switch>
  );
};
