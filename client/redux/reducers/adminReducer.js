const INITIAL_STATE = {
  isAdminLoggingIn: false,
  isAdminLoggedIn: false,
  adminData: null,
  isLoadingQuizList: false,
  quizList: null,
  isCreatingQuiz: false,
  isLoadingQuiz: false,
  quizData: null,
  isCreatingQuestion: false,
  isLoadingQuestionList: false,
  questionList: null,
  isUpdatingQuiz: false,
  isLoadingUserList: false,
  userList: null
};

function adminReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADMIN_LOGIN_START":
      return {
        ...state,
        isAdminLoggingIn: true
      };
    case "ADMIN_LOGIN_SUCCESS":
      return {
        ...state,
        isAdminLoggedIn: true,
        isAdminLoggingIn: false,
        adminData: action.payload
      };
    case "ADMIN_LOGOUT":
      return {
        ...state,        
          isAdminLoggingIn: false,
          isAdminLoggedIn: false,
          adminData: null,
          isAdminLoggingOut: false,
          IsAdminLoggedOut: false,
          isLoadingQuizList: false,
          quizList: null,
          isCreatingQuiz: false,
          isLoadingQuiz: false,
          quizData: null,
          isCreatingQuestion: false,
          isLoadingQuestionList: false,
          questionList: null,
          isUpdatingQuiz: false,
          isLoadingUserList: false,
          userList: null
      };
    case "CREATE_QUIZ_START":
      return {
        ...state,
        isCreatingQuiz: true
      };
    case "CREATE_QUIZ_SUCCESS":
      return {
        ...state,
        isCreatingQuiz: false
      };
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
    case "FETCH_QUIZ_START":
      return {
        ...state,
        isLoadingQuiz: true
      };
    case "FETCH_QUIZ_SUCCESS":
      return {
        ...state,
        isLoadingQuiz: false,
        quizData: action.payload
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
        quizData: action.payload
      };
    case "FETCH_USER_LIST_START":
      return {
        ...state,
        isLoadingUserList: true
      };
    case "FETCH_USER_LIST_SUCCESS":
      return {
        ...state,
        isLoadingUserList: false,
        userList: action.payload
      };
    default:
      return state;
  }
}

export default adminReducer;
