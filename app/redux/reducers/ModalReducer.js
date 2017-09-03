import {
  SHOW_MODAL,
  SHOW_ERROR_MODAL,
  HIDE_MODAL,
} from 'app/redux/constants';

const INITIAL_STATE = {
  description: '',
  heading: '',
  id: null,
  visible: false,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_ERROR_MODAL:
      return { ...action.payload, id: 'error', visible: true };
    case SHOW_MODAL:
      return { ...action.payload, visible: true }
    case HIDE_MODAL:
      return INITIAL_STATE;
    default:
      return state;
  }
};
