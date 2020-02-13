const createSubmission = (data, cb, cb2) => dispatch => {
  let points = 0;
  data.answer == data.submittedAnswer ? (points = 1) : (points = -1);
  const submissionData = {
    quizId: data.quizid,
    pointsScored: points,
    questionId: data.questionId,
    submittedAnswer: data.submittedAnswer,
    correctAnswer: data.answer,
    userId: data.userId
  };
  fetch("/api/v1/user/submission/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submissionData)
  })
    .then(res => res.json())
    .then(submission => {
      cb2
        ? (console.log(submission), cb(submission.createdSubmission), cb2())
        : (console.log(submission), cb(submission.createdSubmission));
    });
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
  const quizScore = data.submissions.length;
  const quizSetSubmissionData = {
    submissions: data.submissions,
    quizTotalScore: quizScore,
    userScore: data.userScore,
    userId: data.userId,
    quizId: data.quizid
  };
  dispatch({
    type: "CREATING_QUIZSET_SUBMISSION_START"
  });
  fetch(`/api/v1/user/quizSetSubmission/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(quizSetSubmissionData)
  })
    .then(res => res.json())
    .then(quizSetSubmissionData => {
      console.log(quizSetSubmissionData, "inside Action");
      dispatch({
        type: "CREATING_QUIZSET_SUBMISSION_SUCCESS",
        payload: quizSetSubmissionData.createQuizSetSubmission
      });
      fetch("/api/v1/user/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quizSetSubmissionData })
      })
        .then(res => res.json())
        .then(updatedUser => console.log(updatedUser));
    });
};

module.exports = {
  createSubmission,
  fetchSingleSubmission,
  createQuizSetSubmission
};
