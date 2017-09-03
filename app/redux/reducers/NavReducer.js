import AppNavigator from "app/config/router";
import { NavigationActions } from 'react-navigation';
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  NAVIGATE_HOME,
  SIGNUP_SUCCESS,
} from 'app/redux/constants';

export default (state, action) => {
  // action.type = LOGOUT_SUCCESS;

  switch (action.type) {
    case LOGIN_SUCCESS:
    case NAVIGATE_HOME:
    case SIGNUP_SUCCESS:  
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          index: 0,
          routeName: 'SignedIn',
          routes: [
            NavigationActions.navigate({ key: 'home', routeName: 'Home' }),
          ]
        })
      );
    case LOGOUT_SUCCESS:
      return {
        index: 0,
        routes: [
          {
            index: 0,
            routeName: 'SignedOut',
            routes: [
              { routeName: 'SignUp' }
            ]

          }
        ]
      }
    default:
      return AppNavigator.router.getStateForAction(action, state);
  }

};