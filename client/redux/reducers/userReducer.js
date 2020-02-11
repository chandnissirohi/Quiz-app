const INITIAL_STATE = {
  userData: null,
  isLoadingUserList: false,
  userList: null,
  isUserLoggingIn: false,
  isUserLoggedIn: false,
  isCreatingUser: false,
  isLoadingQuizSet: false,
  quizData: null,
  userScore: null,
  isLoadingLeaderBoard: false
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "USER_CREATE_START":
      return {
        ...state,
        isCreatingUser: true
      };

    case "USER_CREATE_SUCCESS":
      return {
        ...state,
        isCreatingUser: false,
        userData: action.payload
      };

    case "USER_LOGIN_START":
      return {
        ...state,
        isUserLoggingIn: true
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        isUserLoggedIn: true,
        isUserLoggingIn: false,
        userData: action.payload
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

    case "FETCH_LEADERBOARD_START":
      return {
        ...state,
        isLoadingLeaderBoard: true
      };
    case "FETCH_LEADERBOARD_SUCCESS":
      return {
        ...state,
        isLoadingLeaderBoard: false,
        userScore: action.payload
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
        userList: action.payload,
       
      };

    case "USER_LOGOUT":
      return {
        ...state,
        userData: null,
        isLoadingUserList: false,
        userList: null,
        isUserLoggingIn: false,
        isUserLoggedIn: false,
        isCreatingUser: false,
        isLoadingQuizSet: false,
        quizData: null,
        userScore: null,
        isLoadingLeaderBoard: false
      };
    default:
      return state;
  }
}

export default userReducer;
