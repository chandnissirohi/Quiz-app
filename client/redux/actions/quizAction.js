const fetchingQuizList = () => dispatch => {
    dispatch({
        type: "FETCH_QUIZ_LIST_START"
    })
    fetch("/api/v1/admin/quiz/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(quizList => dispatch({
            type: "FETCH_QUIZ_LIST_SUCCESS",
            payload: quizList.quizzes

        }));
}

module.exports = {
    fetchingQuizList
}