const createSubmission = data => dispatch => {
  let points = 0;
  (data.answer == data.submittedAnswer) ? points = 1 : points = -1;
  const submissionData = {
    quizId: data.quizid,
    pointsScored: points,
    questionId: data.questionId,
    submittedAnswer: data.submittedAnswer,
    correctAnswer: data.answer,
    userId: data.userId
  }
  fetch("/api/v1/user/submission/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submissionData)
  })
    .then(res => res.json())
    .then(submission => console.log(submission , "submission created"));
};

const fetchSingleSubmission = data => dispatch => {
  dispatch({
    type: "SUBMISSION_START"
  });
  fetch(`/api/v1/user/question/submission/${id}`, {
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
  createSubmission,
  fetchSingleSubmission,
  createQuizSetSubmission
};
