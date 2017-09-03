import React from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';

export default class LoadingView extends React.Component {

  render() {
    const { children, loading } = this.props;
    return (
      <View style={styles.viewStyle}>
        {children}
        {loading && this._renderSpinner()}
      </View>
    );
  }

  _renderSpinner() {
    return (
      <View style={styles.emptyViewStyle}>
        <Spinner />
      </View>
    );
  }

}

const styles = {
  emptyViewStyle: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  viewStyle: {
    flex: 1,
  }
};
