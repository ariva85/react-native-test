import React from 'react';
import { View, Text, Button } from 'react-native';
import NavigationIcon from '../components/utils/NavigationIcon';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from '../styles/styles';

class Modal extends React.PureComponent {
  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;

    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalTextWrapper}>
          <Text style={styles.modalText}>{params.name} added to your</Text>
          <NavigationIcon type="cart" size={100} />
        </View>
        <Button
          onPress={() => navigation.goBack()}
          title="Go back"
          style={styles.addBtn}
          color={EStyleSheet.value('$primaryColor')}
        />
      </View>
    );
  }
}

export default Modal;
