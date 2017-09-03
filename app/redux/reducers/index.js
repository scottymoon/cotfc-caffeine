import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import { reducer as FormReducer } from 'redux-form';
import NavReducer from './NavReducer';
import ModalReducer from './ModalReducer';

export default combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  modal: ModalReducer,
  nav: NavReducer,
});