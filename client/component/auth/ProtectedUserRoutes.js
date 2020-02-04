import React from "react";
import { Switch, Route } from "react-router-dom";
import QuizAttemptByUser from "../QuizAttemptByUser";
import Allquizzes from "../Allquizzes.js";
// import LeaderBoard from '../LeaderBoard';

export const ProtectedUserRoutes = () => {
  return (
    <Switch>
      <Route exact path="/quiz-attempt/:id" component={QuizAttemptByUser} />
      <Route path="/allquizzes" component={Allquizzes} />

      {/* <Route exact path="/quiz" component={Quiz} /> */}
      {/* <Route exact path="/user/LeaderBoard" component={LeaderBoard} /> */}
    </Switch>
  );
};
