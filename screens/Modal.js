import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/styles';
import CartButton from '../components/utils/CartButton';

class Modal extends React.Component {
  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalTextWrapper}>
          <Text style={styles.modalText}>{params.name} added to your</Text>
          <CartButton size={50} />
        </View>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

export default Modal;
