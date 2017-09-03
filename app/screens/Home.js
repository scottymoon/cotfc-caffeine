import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  Container,
  Content,
  Text,
  Form,
} from 'native-base';
import { FormInput, LoadingView } from 'app/components';
import { requiredField, equalLength } from 'app/config/validators';

export default class Home extends React.Component {

  render() {
    const { handleSubmit, valid, loading } = this.props;

    return (
      <Container>
        <Content padder>
          <Form form='order'>
            <Field
              name="name"
              label="Name"
              autoCapitalize='words'
              autoCorrect={false}
              spellCheck={false}
              component={FormInput}
              validate={[requiredField]}
            />
            <Field
              name="phoneNumber"
              keyboardType='numeric'
              label="Phone Number"
              component={FormInput}
              validate={[requiredField]}
            />
          </Form>
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
      </Container>
    );
  }

  _submitPressed(values) {
    console.log("SEND ORDER");
  }

}

Home = reduxForm({ form: 'order' })(Home);