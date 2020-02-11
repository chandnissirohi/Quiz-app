const INITIAL_STATE = {
  isCreatingSubmission: false,
  isCreatingQuizSetSubmission: false,
  quizSetSubmissionData: null
};

function quizSetSubmission(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SUBMISSION_START":
      return {
        ...state,
        isCreatingSubmission: true
      };
    case "SUBMISSION_SUCCESS":
      return {
        ...state,
        isCreatingSubmission: false,

        quizSetSubmissionData: action.payload
      };
    case "CREATING_QUIZSET_SUBMISSION_START":
      return {
        ...state,
        isCreatingQuizSetSubmission: true
      };
    case "CREATING_QUIZSET_SUBMISSION_SUCCESS":
      return {
        ...state,
        isCreatingQuizSetSubmission: false,
        quizSetSubmissionData: action.payload
      };

    default:
      return state;
  }
}

export default quizSetSubmission;
