import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Input as NBInput,
  Item,
  Label,
  Text,
  View,
} from 'native-base';

export default class FormInput extends React.Component {

  state = { hasFocus: false, lostFocus: false };

  render() {
    const { color, label, input, meta } = this.props;
    const { touched, error, valid } = meta;

    return (
      <View style={{ flex: 1 }}>
        <Item
          floatingLabel
          error={(touched || this.state.lostFocus) && error !== undefined}
          style={styles.item}
        >
          <Label style={{ color }}>{label}</Label>
          <NBInput
            {...input}
            {...this.props}
            onChangeText={input && input.onChange}
            onBlur={this._blur.bind(this)}
            onFocus={this._focus.bind(this)}
            value={input && input.value}
            placeholderTextColor={color}
          />
        </Item>
        {this._renderError(touched, error)}
      </View>

    );
  }

  _setFocus(hasFocus) {
    this.setState({ hasFocus });
  }

  _blur() {
    this._setFocus(false);
    this.setState({ lostFocus: true });
    this.props.input.onBlur();
  };

  _focus() {
    this._setFocus(true);
    this.setState({ lostFocus: false });
    this.props.input.onFocus();
  };

  _renderError(touched, error) {
    if ((touched || this.state.lostFocus) && error !== undefined) {
      return <Text style={styles.errorStyle}>{error}</Text>;
    }
    return <Text style={styles.errorStyle} />;
  }
}

const styles = StyleSheet.create({
  item: {
    marginTop: 16,
    paddingLeft: 0,
    marginLeft: 0,
  },
  errorStyle: {
    color: '#d9534f',
    height: 18,
    marginTop: 4,
    fontSize: 14,
  },
});
