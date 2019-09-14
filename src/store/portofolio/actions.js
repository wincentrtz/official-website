import { CHANGE_ACTIVE_PORTOFOLIO_TAB } from "./constants";

export const changeActivePortofolioTab = payload => async dispatch => {
  dispatch({
    type: CHANGE_ACTIVE_PORTOFOLIO_TAB,
    payload
  });
};
