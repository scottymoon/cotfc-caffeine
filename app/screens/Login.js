import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  Container,
  Content,
  Form,
  Item,
  Text,
} from 'native-base';
import { FormInput, LoadingView } from 'app/components';
import { requiredField, validEmail } from 'app/config/validators';
import { login } from 'app/redux/actions';

class Login extends React.Component {

  render() {
    const { handleSubmit, valid, loading } = this.props;
    return (
      <Container>
        <LoadingView loading={loading}>
          <Content padder style={styles.content}>
            <Form form='login'>
              <Field
                name="email"
                label="Email Address"
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='email-address'
                spellCheck={false}
                component={FormInput}
                validate={[requiredField, validEmail]}
              />
              <Field
                name="password"
                secureTextEntry
                spellCheck={false}
                autoCapitalize='none'
                autoCorrect={false}
                label="Password"
                component={FormInput}
                validate={[requiredField]}
              />
            </Form>

            <Button
              full
              transparent
              onPress={this._register.bind(this)}
            >
              <Text>I don't have an account.</Text>
            </Button>

            <Button
              full
              rounded
              disabled={!valid || loading}
              onPress={handleSubmit(this._submitPressed.bind(this))}
              style={{ marginTop: 16 }}
            >
              <Text>SUBMIT</Text>
            </Button>
          </Content>
        </LoadingView>
      </Container>
    );
  }

  _submitPressed(values) {
    this.props.login(values);
  }

  _register() {
    this.props.navigation.goBack();
  }
}

styles = StyleSheet.create({
  content: {
    backgroundColor: '#FFF',
  }
});

const mapStateToProps = state => {
  const { loading } = state.auth;
  return { loading };
}

Login = reduxForm({ form: 'login' })(Login);
Login = connect(mapStateToProps, { login })(Login);

export default Login;
