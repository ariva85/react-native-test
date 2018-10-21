import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/styles';
import NavigationIcon from '../components/utils/NavigationIcon';

class Modal extends React.PureComponent {
  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;

    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalTextWrapper}>
          <Text style={styles.modalText}>{params.name} added to your</Text>
          <NavigationIcon type="cart" size={50} />
        </View>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    );
  }
}

export default Modal;
