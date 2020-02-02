import React from "react";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";

import "../stylesheet/main.css";
// import Quiz from "./Quiz";
import UserLogin from "./auth/UserLogin";
import UserSignup from "./auth/UserSignup";
import AdminLogin from "./auth/AdminLogin";
import CreateQuiz from "./CreateQuiz";
import CreateQuizTitle from "./CreateQuizTitle";
import Allquizzes from "./Allquizzes";
import QuizAttemptByUser from "./QuizAttemptByUser.js";
import LeaderBoard from "./LeaderBoard.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/admin/login" component={AdminLogin} />
          <Route exact path="/user/login" component={UserLogin} />
          {/* <Route exact path="/quiz" component={Quiz} /> */}
          <Route exact path="/admin/quiz/new/:id" component={CreateQuiz} />
          <Route exact path="/admin/quiz/title" component={CreateQuizTitle} />
          <Route exact path="/admin/quiz/allquizzes" component={Allquizzes} />
          <Route exact path="/user/login" component={UserLogin} />
          <Route exact path="/user/quizattempt" component={QuizAttemptByUser} />
          <Route exact path="/user/LeaderBoard" component={LeaderBoard} />
          <Route path="/user/signup" component={UserSignup} />
          <Route component={UserSignup} />

        </Switch>
      </div>
    );
  }
}

export default App;
