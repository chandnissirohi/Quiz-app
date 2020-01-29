// import React from 'react';
// import { QuizData } from './QuizData';

// class Quiz extends React.Component {
//   state = {
//     userAnswer: null,
//     currentQuestion: 0,
//     options: [],
//     quizEnd: false,
//     score: 0,
//     disabled: true
//   };

//   loadQuiz = () => {
//     const { currentQuestion } = this.state;
//     this.setState(() => {
//       return {
//         questions: QuizData[currentQuestion].question,
//         options: QuizData[currentQuestion].options,
//         answers: QuizData[currentQuestion].answer
//       };
//     });
//   };

//   componentDidMount() {
//     this.loadQuiz();
//   }

//   nextQuestionHandler = () => {
//     const {userAnswer, answers, score} = this.state;  
//     this.setState({
//       currentQuestion: this.state.currentQuestion + 1
//     });
//     console.log(this.state.currentQuestion);

//     // if the answe is correct
//     if(userAnswer === answers){
//       this.setState({score : score+1})
//     }
//   };

//   // updates the component
//   componentDidUpdate(prevProps, prevstate) {
//     const { currentQuestion } = this.state;
//     if (this.state.currentQuestion !== prevstate.currentQuestion) {
//       this.setState(() => {
//         return {
//           diabled: true,
//           questions: QuizData[currentQuestion].question,
//           options: QuizData[currentQuestion].options,
//           answers: QuizData[currentQuestion].answer
//         };
//       });
//     }
//   }

//   // check answer

//   checkAnswer = answer => {
//     this.setState({
//       userAnswer: answer,
//       disabled: false
//     });
//   };

//   finishHandler = () => {
//     if(this.state.currentQuestion === QuizData.length -1) {
//       this.setState({
//         quizEnd: true
//       })
//     }
//   }

//   render() {
//     const { questions, options, currentQuestion, userAnswer, quizEnd } = this.state;
// if(quizEnd){
//   return(
//     <div>
// <h2>Game Over final score is {this.state.score}</h2>
// <p>The correct answers to the questions were</p>
// <ul>
//   {QuizData.map((item, index) =>(
//     <li className="ui floating message options" 
//     key={index}>
//       {item.answer}

//     </li>
//   ))}
// </ul>
//     </div>
//   )
// }

//     return (
//       <div className="App">
//         <h2> {questions} </h2>
//         <span>
//           {' '}
//           {`Questions ${currentQuestion} out of ${QuizData.length - 1}`}
//         </span>
//         {options.map(option => (
//           <p
//             key={option.id}
//             className={`ui floating message options
//      ${userAnswer === option ? 'selected' : null}
//      `}
//             onClick={() => this.checkAnswer(option)}
//           >
//             {option}
//           </p>
//         ))}
//         {currentQuestion < QuizData.length - 1 && (
//           <button disabled={this.state.disabled} onClick={this.nextQuestionHandler}>Next</button>
//         )}

//         {currentQuestion === QuizData.length - 1 && (
//           <button disabled={this.state.disabled} onClick={this.finishHandler}>Finish</button>
//         )}
//       </div>
//     );
//   }
// }

// export default Quiz;
