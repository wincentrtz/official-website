import { TOGGLE_SIDEBAR_MENU } from "./constants";
import sidebarState from "./state";

const sidebarReducers = (state = sidebarState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR_MENU:
      return {
        ...state,
        status: !state.status
      };
    default:
      return state;
  }
};

export default sidebarReducers;
