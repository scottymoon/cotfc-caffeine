import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from 'app/redux/constants';

const INITIAL_STATE = {
  loading: false,
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
    case SIGNUP:  
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:  
      return { ...state, loading: false, error: action.payload };
    default:
      return INITIAL_STATE;
  }
};