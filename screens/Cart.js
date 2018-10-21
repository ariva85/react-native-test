import React, { PureComponent } from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import styles from '../styles/styles';
import mock from '../mock.json';
import CartItem from '../components/utils/CartItem';
import { connect } from 'react-redux';
import { removeProduct } from '../redux/actions/CartActions';

class Cart extends PureComponent {
  static navigationOptions = {
    title: 'Cart'
  };
  state = {};

  keyExtractor = item => 'ci-' + item.id;

  handleDelete = index => {
    debugger;
    this.props.dispatch(removeProduct(index));
  };

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
    debugger;
    return (
      <View style={styles.container}>
        {list.length ? this.buildCart() : <Text>Empty cart!</Text>}
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
