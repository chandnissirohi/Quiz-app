const submitQuestion = data => dispatch => {
  dispatch({
    type: "SUBMISSION_START"
  });
  fetch(`/api/v1/user/question/submit/${id}`, {
    method: "GET"
  })
    .then(res => res.json())
    .then(submittedQuestion =>
      dispatch({
        type: "SUBMISSION_SUCCESS",
        payload: submittedQuestion
      })
    );
};

const createQuizSetSubmission = data => dispatch => {
  dispatch({
    type: "CREATING_QUIZSET_SUBMISSION_START"
  });
  fetch(`/api/v1/user/all-quizzes/create`, {
    method: "POST"
  })
    .then(res => res.json())
    .then(createdQuizSetSubmission =>
      dispatch({
        type: "CREATING_QUIZSET_SUBMISSION_SUCCESS",
        payload: createdQuizSetSubmission
      })
    );
};

module.exports = {
  submitQuestion,
  createQuizSetSubmission
};
