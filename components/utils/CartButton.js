import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import routes from '../../config/routes';
import styles from '../../styles/styles';

class CartButton extends PureComponent {
  goToCart = () => this.props.navigation.navigate(routes.cart);

  render() {
    const { size } = this.props;

    return (
      <TouchableOpacity onPress={this.goToCart} style={styles.cartIconWrapper}>
        <FontAwesome name="shopping-cart" size={size || 24} />
      </TouchableOpacity>
    );
  }
}
export default withNavigation(CartButton);
