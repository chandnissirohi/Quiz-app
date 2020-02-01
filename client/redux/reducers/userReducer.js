const INITIAL_STATE = {
  isUserLoggingIn: false,
  isUserLoggedIn: false,
  isLoadingUserList: false,
  userList: null,
  isUserLoggingOut: false,
  isUserLoggedOut: false
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
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
    case "USER_LOGOUT_START":
      return {
        ...state,
        isUserLoggingOut: true
      };
    case "USER_LOGOUT_SUCCESS":
      return {
        ...state,
        isUserLoggingOut: false,
        isUserLoggedOut: true,
        userData: {
          isUserLoggingIn: false,
          isUserLoggedIn: false,
          isLoadingUserList: false,
          userList: null,
          isUserLoggingOut: false,
          isUserLoggedOut: false
        }
      };
    case "FETCH_QUIZ_START":
      return {
        ...state,
        isLoadingQuiz: true
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

export default userReducer;
