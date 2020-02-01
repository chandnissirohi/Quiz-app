import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import adminReducer from "../reducers/adminReducer";
import quizReducer from "../reducers/quizReducer";
import questionReducer from "../reducers/questionReducer";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  adminReducer,
  quizReducer,
  questionReducer,
  userReducer
});

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
