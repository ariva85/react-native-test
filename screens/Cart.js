import React, { PureComponent } from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import styles from '../styles/styles';
import mock from '../mock.json';
import CartItem from '../components/utils/CartItem';
import { connect } from 'react-redux';

class Cart extends PureComponent {
  static navigationOptions = {
    title: 'Cart'
  };
  state = {};

  keyExtractor = item => 'ci-' + item.id;

  handleDelete = index => console.log('delete item', index);

  buildCart = () => {
    const { list } = this.props;
    return (
      <FlatList
        style={styles.listContainer}
        data={list}
        keyExtractor={this.keyExtractor}
        renderItem={({ item, index }) => (
          <CartItem
            item={item}
            onDelete={() => this.handleDelete(index)}
            index={index}
          />
        )}
      />
    );
  };

  render() {
    const { list } = this.props;
    return (
      <View style={styles.container}>
        {list ? this.buildCart() : <Text>Empty cart!</Text>}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.CartReducer.list
  };
};

export default connect(mapStateToProps)(Cart);
