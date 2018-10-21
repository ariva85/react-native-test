import React, { PureComponent } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';
import { withNavigation } from 'react-navigation';
import routes from '../../config/routes';
import styles from '../../styles/styles';

class CartItem extends PureComponent {
  handleDetailsPress = () => {
    const { navigation, item } = this.props;
    navigation.navigate(routes.details, item);
  };

  handleRemovePress = () => this.props.onDelete();

  render() {
    const { item } = this.props;
    return (
      <View style={styles.cartListItem}>
        <Text style={styles.cartListItemText}>
          {item.name} - quantity : {item.quantity}
        </Text>
        <View style={styles.cartListIconContainer}>
          <TouchableOpacity
            onPress={this.handleDetailsPress}
            style={styles.cartListIconWrapper}
          >
            <FontAwesome
              name="file-text-o"
              size={20}
              color={EStyleSheet.value('$textColor')}
              style={styles.cartListIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleRemovePress}
            style={styles.cartListIconWrapper}
          >
            <FontAwesome
              name="remove"
              size={20}
              color={EStyleSheet.value('$textColor')}
              style={styles.cartListIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default withNavigation(CartItem);
