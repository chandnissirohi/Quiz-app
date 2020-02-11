export const fetchQuizData = id => dispatch => {
  console.log(id , "inside fetchQuizData");
  dispatch({
    type: "FETCH_QUIZ_START"
  });
  fetch(`/api/v1/admin/quiz/${id}`, {
    method: "GET"
  })
    .then(res => res.json())
    .then(quiz =>{
      console.log(quiz , "inside fetchQuizData");
      dispatch({
        type: "CREATE_QUIZ_SUCCESS",
        payload: quiz.quiz
      })
    }

    );
};

export const fetchingQuizList = () => dispatch => {
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

export const createQuizTitileAndQuiz = ({ quizTitle }, cb) => dispatch => {
  dispatch({
    type: "CREATE_QUIZ_START"
  });
  fetch("/api/v1/admin/quiz/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quizTitle })
  })
    .then(res => res.json())
    .then(
      createdQuiz => console.log(createdQuiz)
      // dispatch({
      //   type: "CREATE_QUIZ_SUCCESS",
      //   payload: createdquiz
      // })
    );
  cb();
};

export const fetchingQuestionList = id => dispatch => {
  dispatch({
    type: "FETCH_QUESTION_LIST_START"
  });
  let questionList = [];
  fetch(`/api/v1/admin/quiz/${id}`, {
    method: "GET"
  })
    .then(res => res.json())
    .then(quiz => {
      quiz.quiz.questionSet.forEach(questionId => {
        fetch(`/api/v1/admin/question/${questionId}`, {
          method: "GET"
        })
          .then(res => res.json())
          .then(question => {
            questionList = [...questionList, question.question];
            dispatch({
              type: "FETCH_QUESTION_LIST_SUCCESS",
              payload: questionList
            });
          });
      });
    });
};

// const questionSet = quiz.quiz.questionSet;
//       let questionList=[];
//       questionSet.forEach(questionId => {
//         fetch(`/api/v1/admin/question/${id}`, {
//           method: "GET"
//         })
//           .then(res => res.json())
//           .then(question =>
//             questionList = [...questionList , question.question]
//             );
//       });

export const creatingQuestion = (quizData , cb , cb1) => dispatch => {
  console.log(quizData, "inside creatingQuestion Action");
  const quizData1 = {
    quizId: quizData.quizId.id,
    answer: quizData.answer,
    option1: quizData.option1,
    option2: quizData.option2,
    option3: quizData.option3,
    option4: quizData.option4,
    question: quizData.question
  };
  console.log(quizData1, "inside creatingQuestion Action");

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
        type: "CREATE_QUESTION_SUCCESS"
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
            }),
            cb(),
            cb1()
          );
    });
};

export const updatingQuiz = () => dispatch => {
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
        payload: updatedQuiz.updatedQuiz
      })
    );
};

export const deletingQuiz = id => dispatch => {
  fetch(`/api/v1/admin/quiz/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(deletedQuiz => console.log(deletedQuiz, "quiz deleted"));

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
