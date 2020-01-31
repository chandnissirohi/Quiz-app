import {
    createStore,
    combineReducers,
    applyMiddlware
} from "redux";
import thunk from "redux-thunk";
import adminReducer from "../reducers/adminReducer";
import quizReducer from "../reducers/quizReducer";

const rootReducer = combineReducers({
    adminReducer,
    quizReducer
});

const Store = createStore(rootReducer, applyMiddlware(thunk));

export default Store;