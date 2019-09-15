import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import sidebarReducers from "./sidebar/reducers";
import factReducers from "./fact/reducers";
import bookReducers from "./book/reducers";
import portofolioReducers from "./portofolio/reducers";

const rootReducer = combineReducers({
  sidebarReducers,
  factReducers,
  bookReducers,
  portofolioReducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
