import { TOGGLE_SIDEBAR_MENU } from "./constants";

export const toggleSidebarMenu = () => async dispatch => {
  dispatch({
    type: TOGGLE_SIDEBAR_MENU
  });
};
