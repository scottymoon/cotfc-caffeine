import React from 'react';
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Title,
  Text,
} from 'native-base';
import { connect } from 'react-redux';
import { logout } from 'app/redux/actions';

export default class Profile extends React.Component {

  render() {
    const { handleSubmit } = this.props;
    return (
      <Container>
        <Header>
          <Body>
            <Title>Profile</Title>
          </Body>
        </Header>
        <Content padder>
          <Text>
            Find me in app/screens/Profile.js
          </Text>

          <Button
            full  
            rounded  
            onPress={this._logoutPressed.bind(this)}
            style={{ marginTop: 42 }}
          >
            <Text>Logout</Text>
          </Button>
        </Content>
      </Container>
    );
  }

  _logoutPressed() {
    this.props.logout();
  }

}

Profile = connect(null, { logout })(Profile);
