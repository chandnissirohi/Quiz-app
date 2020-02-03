const fetchQuestionData = (id) => dispatch => {
    dispatch({
        type: 'FETCH_QUESTION_START'
    })
    fetch(`/api/v1/admin/question/${id}`, {
        method: "GET"
    })
    .then(res => res.json())
    .then(question => dispatch({
        type: 'FETCH_QUESTION_SUCCESS',
        payload: question.question
    }))
}

module.exports= {
    fetchQuestionData
}