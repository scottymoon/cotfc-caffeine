import React from "react";
import { Platform, StatusBar } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";

import SignUp from "app/screens/SignUp";
import Login from "app/screens/Login";
import Home from "app/screens/Home";
import Profile from "app/screens/Profile";

const defaultNavigationOptions = {
  headerStyle: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
};

export const SignedOutNavigator = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      ...defaultNavigationOptions,
      title: 'Sign Up',
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      ...defaultNavigationOptions,
      title: 'Login',
    }
  },
});

export const SignedInNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      ...defaultNavigationOptions,
      title: 'Order',
    }
  },
});

export default AppNavigator = StackNavigator (
  {
    SignedOut: {
      screen: SignedOutNavigator,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    SignedIn: {
      screen: SignedInNavigator,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: "none",
    mode: "modal",
  }
);
