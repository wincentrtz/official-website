import { GET_ALL_FACTS } from "./constants";
import factState from "./state";

const factReducers = (state = factState, action) => {
  switch (action.type) {
    case GET_ALL_FACTS:
      return {
        ...state,
        facts: action.payload.data
      };
    default:
      return state;
  }
};

export default factReducers;
