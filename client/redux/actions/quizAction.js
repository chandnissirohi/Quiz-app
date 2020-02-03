const fetchQuizData = (id) => dispatch => {
  dispatch({
    type: "FETCH_QUIZ_START"
  })
  fetch(`/api/v1/admin/quiz/${id}`, {
    method: "GET"
  })
    .then(res => res.json())
    .then(quiz => dispatch({
      type: "FETCH_QUIZ_SUCCESS",
      payload: quiz
    }));
}

const fetchingQuizList = () => dispatch => {
  dispatch({
    type: "FETCH_QUIZ_LIST_START"
  });
  fetch("/api/v1/admin/quiz/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(quizList =>
      dispatch({
        type: "FETCH_QUIZ_LIST_SUCCESS",
        payload: quizList.quizzes
      })
    );
};

const createQuizTitileAndQuiz = ({ quizTitle }, cb) => dispatch => {
  dispatch({
    type: "CREATE_QUIZ_START"
  });
  fetch("/api/v1/admin/quiz/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quizTitle })
  })
    .then(res => res.json())
    .then(createdQuiz =>
      console.log(createdQuiz)
      // dispatch({
      //   type: "CREATE_QUIZ_SUCCESS",
      //   payload: createdquiz
      // })
    );
  cb();
};

const fetchingQuestionList = () => dispatch => {
  dispatch({
    type: "FETCH_QUESTION_LIST_START"
  });
  fetch("/api/v1/admin/questionlist", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify()
  })
    .then(res => res.json())
    .then(questionList =>
      dispatch({
        type: "FETCH_QUESTION_LIST_START",
        payload: questionList.questions
      })
    );
};

const creatingQuestion = (quizData ) => dispatch => {
  const quizData1 = {
   quizId : quizData.quizId.id,
   answer: quizData.answer,
   option1: quizData.option1,
   option2: quizData.option2,
   option3: quizData.option3,
   option4: quizData.option4,
   question: quizData.question
  }
  dispatch({
    type: "CREATE_QUESTION_START"
  });
  fetch("/api/v1/admin/question/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(quizData1)
  })
    .then(res => res.json())
    .then(question => {
      dispatch({
        type:"CREATE_QUESTION_SUCCESS"
      }),
      fetch("/api/v1/admin/quiz/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quizId: quizData.quizId.id,
          question: question.createdQuestion
        })
      })
        .then(res => res.json())
        .then(updatedQuiz =>
          dispatch({
            type: "CREATE_QUIZ_SUCCESS",
            payload: updatedQuiz
          })
        );
    }
    );
   
};

const updatingQuiz = () => dispatch => {
  dispatch({
    type: "UPDATE_QUIZ_START"
  });
  fetch("/api/v1/admin/update", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify()
  })
    .then(res => res.json())
    .then(updatedQuiz =>
      dispatch({
        type: "UPDATE_QUIZ_START_SUCCESS",
        payload: updatedQuiz
      })
    );
};

// const deletingQuiz = () => dispatch => {
//     dispatch({
//         type: ""
//     })
// }

module.exports = {
  fetchQuizData,
  fetchingQuizList,
  createQuizTitileAndQuiz,
  fetchingQuestionList,
  creatingQuestion,
  updatingQuiz
};
