import React, { PureComponent } from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import styles from '../styles/styles';
import mock from '../mock.json';
import CartItem from '../components/utils/CartItem';

class Cart extends PureComponent {
  static navigationOptions = {
    title: 'Cart'
  };
  state = { items: mock.list };

  keyExtractor = item => 'ci-' + item.id;

  handleDelete = item => console.log('delete item', item);

  buildCart = () => {
    const { items } = this.state;
    return (
      <FlatList
        style={styles.listContainer}
        data={items}
        keyExtractor={this.keyExtractor}
        renderItem={({ item }) => (
          <CartItem item={item} onDelete={this.handleDelete} />
        )}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.items ? this.buildCart() : <Text>Empty cart!</Text>}
      </View>
    );
  }
}

export default Cart;
