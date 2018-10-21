import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux/actions/HomeActions';
import { Loader } from '../components/utils/Loader';
import NavigationIcon from '../components/utils/NavigationIcon';
import ListItem from '../components/utils/ListItem';
import styles from '../styles/styles';
import routes from '../config/routes';

class Home extends PureComponent {
  static navigationOptions = {
    title: 'Home',
    headerRight: <NavigationIcon type="cart" />
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProducts());
  }

  handleItemPress = item => {
    const { navigation } = this.props;
    navigation.navigate(routes.details, item);
  };

  keyExtractor = item => `li-${item.id}`;

  buildContent = () => {
    const { products } = this.props;
    if (products && products.length) {
      return (
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
      return <Text style={styles.emptyMessage}>Empty list!</Text>;
    }
  };

  render() {
    const { loading } = this.props;

    return (
      <View style={styles.container}>
        {!loading ? this.buildContent() : <Loader />}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  products: state.HomeReducer.products,
  loading: state.HomeReducer.loading
});

export default connect(mapStateToProps)(Home);
