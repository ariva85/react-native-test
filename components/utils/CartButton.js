import React, { PureComponent } from 'react';
import { Button, TouchableOpacity } from 'react-native';
import routes from '../../config/routes';
import { withNavigation } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../../styles/styles';

class CartButton extends PureComponent {
  goToCart = () => this.props.navigation.navigate(routes.cart);
  render() {
    console.log(this.props);
    //return <Button title="Go to Cart" onPress={this.goToCart} />;
    return (
      <TouchableOpacity onPress={this.goToCart} style={styles.cartIconWrapper}>
        <FontAwesome name="shopping-cart" size={24} />
      </TouchableOpacity>
    );
  }
}
export default withNavigation(CartButton);
