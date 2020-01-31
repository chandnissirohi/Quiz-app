import { createStore, combineReducers, applyMiddlware } from "redux";
import thunk from "redux-thunk";
import adminReducer from "../reducers/adminReducer";

const rootReducer = combineReducers({ adminReducer });

const Store = createStore(rootReducer, applyMiddlware(thunk));

export default Store;
