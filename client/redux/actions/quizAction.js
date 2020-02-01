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

const createQuizTitileAndQuiz = ({ quizTitle }) => dispatch => {
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
        action: questionList.questions
      })
    );
};

const creatingQuestion = quizData => dispatch => {
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
      fetch("/api/v1/admin/quiz/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quizId, question })
      })
        .then(res => res.json())
        .then(updatedQuiz =>
          dispatch({
            type: "CREATE_QUESTION_SUCCESS",
            payload: updatedQuiz.quizData
          })
        )
    );
};

const updatingQuiz = () => dispatch => {
    dispatch({
        type: "UPDATE_QUIZ_START"
    })
    fetch("/api/v1/admin/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify()
    }).then(res => res.json()).then(updatedQuiz => dispatch({
        type: "UPDATE_QUIZ_START_SUCCESS",
        payload: updatedQuiz.({quizSET, quizScore})
    }))
}

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
