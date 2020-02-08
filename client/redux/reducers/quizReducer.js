const INITIAL_STATE = {
  isLoadingQuizList: false,
  quizList: null,
  isCreatingQuiz: false,
  isLoadingQuiz: false,
  singleQuizData: null,
  isLoadingQuestionList: false,
  questionList: null
};

function quizReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CREATE_QUIZ_START":
      return {
        ...state,
        isCreatingQuiz: true
      };
    case "CREATE_QUIZ_SUCCESS":
      return {
        ...state,
        isCreatingQuiz: false,
        singleQuizData: action.payload
      };
    case "FETCH_QUIZ_START":
      return {
        ...state,
        isLoadingQuiz: true
      };
    case "FETCH_QUIZ_SUCCESS":
      return {
        ...state,
        isLoadingQuiz: false,
        singleQuizData: action.payload
      };
    case "UPDATE_QUIZ_START":
      return {
        ...state,
        isUpdatingQuiz: true
      };
    case "UPDATE_QUIZ_SUCCESS":
      return {
        ...state,
        isUpdatingQuiz: false,
        singleQuizData: action.payload
      };
    case "FETCH_QUIZ_LIST_START":
      return {
        ...state,
        isLoadingQuizList: true
      };
    case "FETCH_QUIZ_LIST_SUCCESS":
      return {
        ...state,
        isLoadingQuizList: false,
        quizList: action.payload
      };
    case "FETCH_QUESTION_LIST_START":
      return {
        ...state,
        questionList: null,
        isLoadingQuestionList: true
      };
    case "FETCH_QUESTION_LIST_SUCCESS":
      return {
        ...state,
        isLoadingQuestionList: false,
        questionList: action.payload
      };
    default:
      return state;
  }
}

export default quizReducer;
