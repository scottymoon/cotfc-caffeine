import {
  HIDE_MODAL,
  SHOW_MODAL,
} from 'app/redux/constants';

export const hideModal = () => {
  return (dispatch) => {
    dispatch({ type: HIDE_MODAL });
  };
};

export const showModal = (payload) => {
  return (dispatch) => {
    dispatch({ type: SHOW_MODAL, payload });
  };
};
