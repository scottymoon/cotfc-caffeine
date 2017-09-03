import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from "app/config/router";
import { StandardModal } from 'app/components';
import { Root, View } from 'native-base';

export default class RouterWithState extends React.Component {
  render() {
    return (
      <Root>
        <View style={{ flex: 1 }}>
          <StandardModal id="error" />
          <AppNavigator
            navigation={addNavigationHelpers({
              dispatch: this.props.dispatch,
              state: this.props.nav
            })}
          />
        </View>
      </Root>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

RouterWithState = connect(mapStateToProps)(RouterWithState);