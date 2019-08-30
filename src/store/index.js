import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducers from "./user/user-reducers";
import sidebarReducers from "./sidebar/reducers";
import pageReducers from "./page/reducers";
import factReducers from "./fact/reducers";

const rootReducer = combineReducers({
  userReducers,
  sidebarReducers,
  pageReducers,
  factReducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
