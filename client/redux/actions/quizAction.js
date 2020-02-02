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
    .then(createquiz =>
      dispatch({
        type: "CREATE_QUIZ_START_SUCCESS",
        payload: createquiz.quizTitle
      })
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

const creatingQuestion = quizData => dispatch => {
  console.log(quizData);
  dispatch({
    type: "CREATE_QUESTION_START"
  });
  fetch("/api/v1/admin/question/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(quizData)
  })
    .then(res => res.json())
    .then(question =>
      // console.log(question)
      fetch("/api/v1/admin/quiz/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quizId: quizData.quizId,
          question: question.createdQuestion
        })
      })
        .then(res => res.json())
        .then(updatedQuiz =>
          dispatch({
            type: "CREATE_QUESTION_SUCCESS",
            payload: updatedQuiz
          })
        )
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
  fetchingQuizList,
  createQuizTitileAndQuiz,
  fetchingQuestionList,
  creatingQuestion,
  updatingQuiz
};
