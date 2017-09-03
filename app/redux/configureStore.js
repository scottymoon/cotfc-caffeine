import { AsyncStorage } from 'react-native';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import firebase from 'firebase';
import reducer from './reducers';


export default function configureStore(onCompletion: () => void) {

  const thunkWithFirebase = ({ getState, dispatch }) => next => action => {
    return thunk.withExtraArgument(firebase)({ getState, dispatch })(next)(action);
  };

  const store = createStore(
    reducer,
    {},
    compose(
      applyMiddleware(thunkWithFirebase),
      autoRehydrate()
    )
  );

  persistStore(
    store,
    {
      whitelist: ['auth', 'nav'],
      storage: AsyncStorage
    },
    onCompletion
  );

  return store;
}