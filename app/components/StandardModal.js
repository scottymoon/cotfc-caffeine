import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { hideModal } from 'app/redux/actions';
import { Button, H1, Text } from 'native-base';

class StandardModal extends React.Component {

  render() {
    const {
      confirmText,
      description,
      heading,
      id,
      matchId,
      visible,
    } = this.props;

    return (
      <Modal
        animationType={'fade'}
        transparent
        visible={visible && (id === matchId)}
        onRequestClose={() => { }}
      >
        <View style={styles.containerStyle}>
          <View style={styles.cardStyle}>
            <H1>{heading}</H1>
            <Text>{description}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button
                onPress={this._buttonPressed.bind(this)}
                style={styles.button}
              >
                <Text style={{ color: '#fff' }}>{confirmText || 'OK'}</Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  _buttonPressed() {
    this.props.hideModal();
    const confirmPressed = this.props.confirmPressed;

    if (confirmPressed) confirmPressed();
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
  cardStyle: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 4,
    padding: 20
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 16,
  }
});

const mapStateToProps = state => {
  const { description, heading, id, visible } = state.modal;
  return { description, heading, matchId: id, visible };
};

StandardModal = connect(mapStateToProps, { hideModal })(StandardModal);

export default StandardModal;
