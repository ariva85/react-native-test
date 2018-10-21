import React, { PureComponent } from 'react';
import {
  Button,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Animated
} from 'react-native';
import ListItem from '../components/utils/ListItem';
import api from '../api/api';
import routes from '../config/routes';
import styles from '../styles/styles';
import { Loader } from '../components/utils/Loader';
import CartButton from '../components/utils/CartButton';
import { fetchProducts } from '../redux/actions/HomeActions';
import { connect } from 'react-redux';
const mock = {
  name: 'adsas dads',
  details: ' qweq weqw eqw ewqe wqe wqe ',
  price: '3$'
};

class Home extends PureComponent {
  static navigationOptions = {
    title: 'Home',
    headerRight: <CartButton />
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProducts());
  }

  handleItemPress = item => {
    const { navigation } = this.props;
    navigation.navigate('Details', item);
  };

  keyExtractor = item => 'li-' + item.id;

  render() {
    const { products, loading } = this.props;
    let content = null;
    if (products && products.length) {
      content = (
        <FlatList
          style={styles.listContainer}
          data={products}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <ListItem item={item} onItemPress={this.handleItemPress} />
          )}
        />
      );
    } else {
      <Text>Empty list ...</Text>;
    }
    return (
      <View style={styles.container}>{!loading ? content : <Loader />}</View>
    );
  }
}

const mapStateToProps = state => ({
  products: state.HomeReducer.products,
  loading: state.HomeReducer.loading
});

export default connect(mapStateToProps)(Home);
