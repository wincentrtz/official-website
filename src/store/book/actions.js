import api from "api/controllers/book";
import { GET_BOOKS_BY_ALPHABET } from "./constants";

export const fetchBooksByAlphabet = options => async dispatch => {
  const { data } = await api.getBookByAlphabet(options);
  dispatch({
    type: GET_BOOKS_BY_ALPHABET,
    payload: data
  });
};
