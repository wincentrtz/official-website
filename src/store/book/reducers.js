import { GET_BOOKS_BY_ALPHABET } from "./constants";
import bookState from "./state";

const bookReducers = (state = bookState, action) => {
  switch (action.type) {
    case GET_BOOKS_BY_ALPHABET:
      return {
        ...state,
        books: action.payload.data
      };
    default:
      return state;
  }
};

export default bookReducers;
