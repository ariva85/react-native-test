import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import routes from '../../config/routes';
import styles from '../../styles/styles';

class NavigationIcon extends PureComponent {
  handlePress = () => {
    const { navigation, type } = this.props;
    navigation.navigate(routes[type]);
  };

  render() {
    const { size, type } = this.props;
    const name = type === 'cart' ? 'shopping-cart' : type;
    return (
      <TouchableOpacity
        onPress={this.handlePress}
        style={styles.cartIconWrapper}
      >
        <FontAwesome
          name={name}
          size={size || 24}
          color={EStyleSheet.value('$textColor')}
        />
      </TouchableOpacity>
    );
  }
}
export default withNavigation(NavigationIcon);
