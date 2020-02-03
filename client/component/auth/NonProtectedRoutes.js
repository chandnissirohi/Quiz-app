import React from 'react';
import { Switch } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import UserLogin from './UserLogin';
import UserSignup from './UserSignup';

export const NonProtectedRoutes = () => {
    return (
       <Switch>
          <Route exact path="/admin/login" component={AdminLogin} />
          <Route exact path="/user/login" component={UserLogin} /> 
          <Route path="/user/signup" component={UserSignup} />
          <Route component={UserSignup} />
       </Switch>
    )
}
