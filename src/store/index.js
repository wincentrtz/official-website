import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducers from "./user/user-reducers";
import sidebarReducers from "./sidebar/reducers";

const rootReducer = combineReducers({
  userReducers,
  sidebarReducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
