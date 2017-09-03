import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'app/redux/configureStore';
import { AppLoading, Asset, Font } from 'expo';
import RouterWithState from 'app/RouterWithState';
import firebase from 'firebase';
import firebaseConfig from 'app/config/firebase';

export default class AppLoader extends React.Component {

  constructor(props) {
    super(props);

    firebase.initializeApp(firebaseConfig);

    this.state = {
      assetsAreLoaded: false,
      stateReady: false,
      store: configureStore(
        () => this.setState({ stateReady: true })
      ),
    }
  }
  
  async componentWillMount() {
    this._loadAssetsAsync();
  }

  render() {
    const { assetsAreLoaded, stateReady, store } = this.state;
    return (
      <Provider store={store}>
        {
          (stateReady && assetsAreLoaded) ?
          <RouterWithState /> :
          <AppLoading />
        }
      </Provider>
    );
  }

  async _loadAssetsAsync() {
    try {
      await Promise.all([
        Expo.Font.loadAsync(
          {
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
          },
        ),
      ]);
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: App.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e);
    } finally {
      this.setState({ assetsAreLoaded: true });
    }
  }

}