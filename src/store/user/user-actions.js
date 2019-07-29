import api from "api/controllers/user";
import { FETCH_ACTIVE_USER } from "./user-constants";

export const fetchActiveUser = () => dispatch => {
  const payload = api.getActiveUser();
  dispatch({
    type: FETCH_ACTIVE_USER,
    payload
  });
};
