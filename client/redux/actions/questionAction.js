const fetchQuestionData = (id , cb) => dispatch => {
  dispatch({
    type: "FETCH_QUESTION_START"
  });
  fetch(`/api/v1/admin/question/${id}`, {
    method: "GET"
  })
    .then(res => res.json())
    .then(question => {
      dispatch({
        type: "FETCH_QUESTION_SUCCESS",
        payload: question.question
      }),
      cb(question.question)
    });
};

const editQuestion = (data, id, cb) => dispatch => {
  console.log(data, "inside question action");
  fetch(`/api/v1/admin/question/update/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });
  cb();
};

module.exports = {
  editQuestion,
  fetchQuestionData
};
