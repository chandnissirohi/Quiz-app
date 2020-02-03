 import React from 'react';
import { Switch } from 'react-router-dom';
import QuizAttemptByUser from '../QuizAttemptByUser';
// import LeaderBoard from '../LeaderBoard';

export const ProtectedUserRoutes = () => {
    return (
       <Switch>
           <Route exact path="/user/quizattempt" component={QuizAttemptByUser} />
          {/* <Route exact path="/user/LeaderBoard" component={LeaderBoard} /> */}
       </Switch>
    )
}


