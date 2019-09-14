import { CHANGE_ACTIVE_PORTOFOLIO_TAB } from "./constants";
import portofolioState from "./state";

const portofolioReducers = (state = portofolioState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_PORTOFOLIO_TAB:
      return {
        ...state,
        activeTab: action.payload
      };
    default:
      return state;
  }
};

export default portofolioReducers;
