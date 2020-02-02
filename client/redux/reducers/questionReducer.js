const INITIAL_STATE = {
  isCreatingQuestion: false,
  isLoadingQuestionList: false,
  questionList: null
};

function questionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_QUESTION_LIST_START":
      return {
        ...state,
        isLoadingQuestionList: true
      };
    case "FETCH_QUESTION_LIST_SUCCESS":
      return {
        ...state,
        isLoadingQuestionList: false,
        questionList: action.payload
      };
    case "CREATE_QUESTION_START":
      return {
        ...state,
        isCreatingQuestion: true
      };
    case "CREATE_QUESTION_SUCCESS":
      return {
        ...state,
        isCreatingQuestion: false
      };
    default:
      return state;
  }
}

export default questionReducer;