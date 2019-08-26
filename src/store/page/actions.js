import {
  MOVE_TO_NEXT_PAGE,
  MOVE_TO_PREVIOUS_PAGE,
  CHANGE_SCROLL_STATUS
} from "./constants";

export const moveToNextPage = () => dispatch => {
  dispatch(changeScrollStatus());
  dispatch({
    type: MOVE_TO_NEXT_PAGE
  });
  setTimeout(() => {
    dispatch(changeScrollStatus());
  }, 2000);
};

export const moveToPreviousPage = () => dispatch => {
  dispatch(changeScrollStatus());
  dispatch({
    type: MOVE_TO_PREVIOUS_PAGE
  });
  setTimeout(() => {
    dispatch(changeScrollStatus());
  }, 2000);
};

export const changeScrollStatus = () => dispatch => {
  dispatch({
    type: CHANGE_SCROLL_STATUS
  });
};
