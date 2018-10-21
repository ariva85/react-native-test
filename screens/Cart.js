import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import CartItem from '../components/utils/CartItem';
import NavigationIcon from '../components/utils/NavigationIcon';
import { removeProduct } from '../redux/actions/CartActions';
import styles from '../styles/styles';

class Cart extends PureComponent {
  static navigationOptions = {
    title: 'Cart',
    headerRight: <NavigationIcon type="home" />
  };
  state = {};

  keyExtractor = item => `ci-${item.id}`;

  handleDelete = index => {
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
    return (
      <View style={styles.container}>
        {list.length ? (
          this.buildCart()
        ) : (
          <Text style={styles.emptyMessage}>Empty cart!</Text>
        )}
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
