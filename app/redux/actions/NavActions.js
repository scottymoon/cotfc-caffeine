import {
  NAVIGATE_HOME,
  SHOW_ERROR_MODAL,
} from 'app/redux/constants';

export const goHome = () => {
  return (dispatch, getState, firebase) => {
    dispatch({ type: NAVIGATE_HOME });
  };
};