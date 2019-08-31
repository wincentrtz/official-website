import {
  MOVE_TO_NEXT_PAGE,
  MOVE_TO_PREVIOUS_PAGE,
  CHANGE_SCROLL_STATUS
} from "./constants";
import sidebarState from "./state";

const pageReducers = (state = sidebarState, action) => {
  switch (action.type) {
    case MOVE_TO_NEXT_PAGE:
      return {
        ...state,
        currentPage: ++state.currentPage
      };
    case MOVE_TO_PREVIOUS_PAGE:
      return {
        ...state,
        currentPage:
          state.currentPage !== 0 ? --state.currentPage : state.currentPage
      };
    case CHANGE_SCROLL_STATUS:
      const isScrolling = !state.isScrolling;
      return {
        ...state,
        isScrolling
      };
    default:
      return state;
  }
};

export default pageReducers;
