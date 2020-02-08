import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CreateQuiz from "../CreateQuiz";
import CreateQuizTitle from "../CreateQuizTitle";
import Allquizzes from "../Allquizzes";
import EditQuestion from "../EditQuestion.js";

class ProtectedAdminRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/admin/quiz/new/:id" component={CreateQuiz} />
        <Route exact path="/admin/quiz/title" component={CreateQuizTitle} />
        <Route path="/admin/quiz/allquizzes" component={Allquizzes} />
        <Route path="/admin/quiz/question/edit/:id" component={EditQuestion} />
        <Route component={Allquizzes} />
      </Switch>
    );
  }
}

export default ProtectedAdminRoutes;
