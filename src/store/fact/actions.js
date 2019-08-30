import api from "api/controllers/fact";
import { GET_ALL_FACTS } from "./constants";

export const fetchAllFacts = () => async dispatch => {
  const { data } = await api.getAllFacts();
  dispatch({
    type: GET_ALL_FACTS,
    payload: data
  });
};
