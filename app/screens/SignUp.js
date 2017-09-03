import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Form,
  Item,
  Text
} from 'native-base';
import { FormInput, LoadingView } from 'app/components';
import { requiredField, validEmail } from 'app/config/validators';
import { signUp } from 'app/redux/actions';

class SignUp extends React.Component {
  render() {
    const { handleSubmit, valid, loading } = this.props;
    return (
      <Container>
        <LoadingView loading={loading}>
          <Content padder style={styles.content}>
            <Form form='signUp'>
              <Field
                name="email"
                spellCheck={false}
                label="Email Address"
                autoCapitalize='none'
                keyboardType='email-address'
                component={FormInput}
                validate={[requiredField, validEmail]}
              />
              <Field
                name="password"
                secureTextEntry
                spellCheck={false}
                label="Password"
                autoCapitalize='none'
                component={FormInput}
                validate={[requiredField]}
              />
            </Form>

            <Button
              full
              transparent
              onPress={this._login.bind(this)}
            >
              <Text>I already have an account.</Text>
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

  _login() {
    this.props.navigation.navigate('Login');
  }

  _submitPressed(values) {
    this.props.signUp(values);
  }

}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FFF',
  },
});

const mapStateToProps = state => {
  const { loading } = state.auth;
  return { loading };
}

SignUp = reduxForm({ form: 'signUp' })(SignUp);
SignUp = connect(mapStateToProps, { signUp })(SignUp);

export default SignUp;