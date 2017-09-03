import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SHOW_ERROR_MODAL,
} from 'app/redux/constants';

export const login = (params) => {
  const { email, password } = params;

  return (dispatch, getState, firebase) => {
    dispatch({ type: LOGIN });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        dispatch({ type: LOGIN_SUCCESS, payload: response });
      })  
      .catch((error) => {
        dispatch({ type: LOGIN_FAIL, payload: error });
        dispatch({
          type: SHOW_ERROR_MODAL,
          payload: {
            heading: 'Login Error',
            description: error.message
          }
        });
      })
  };
};

export const signUp = (params) => {
  const { email, password } = params;

  return (dispatch, getState, firebase) => {
    dispatch({ type: SIGNUP });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({ type: SIGNUP_SUCCESS, payload: user });
      })
      .catch((error) => {
        dispatch({ type: SIGNUP_FAIL, payload: error });
        dispatch({
          type: SHOW_ERROR_MODAL,
          payload: {
            heading: 'Signup Error',
            description: error.message
          }
        });
      })
  };
};

export const logout = () => {
  return (dispatch, getState, firebase) => {
    dispatch({ type: LOGOUT_SUCCESS });
  }
}