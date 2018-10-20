import React, { PureComponent } from 'react';
import {
  Button,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Animated
} from 'react-native';
import { Title } from '../components/utils/Title';
import ListItem from '../components/utils/ListItem';
import api from '../api/api';
import routes from '../config/routes';
import styles from '../styles/styles';
import { Loader } from '../components/utils/Loader';
import { withFade } from '../hoc/withFade';
import CartButton from '../components/utils/CartButton';
const mock = {
  name: 'adsas dads',
  details: ' qweq weqw eqw ewqe wqe wqe ',
  price: '3$'
};

class Home extends PureComponent {
  static navigationOptions = {
    title: 'Home',
    /* headerTitle: <Title />, */
    headerRight: <CartButton />
  };

  state = { products: null };

  async componentDidMount() {
    /*  Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 10000 // Make it take a while
      }
    ).start(); */
    //this.props.navigation.setParams({ goToCart: this.goToCart });

    const apiResult = await api.getList();
    setTimeout(() => {
      this.setState({ products: apiResult.list });
    }, 2000);
  }

  handleItemPress = item => {
    const { navigation } = this.props;
    navigation.navigate('Details', item);
  };

  keyExtractor = item => 'li-' + item.id;

  render() {
    const { navigation } = this.props;
    const { products } = this.state;
    let viewList = null;
    if (products && products.length) {
      viewList = (
        <FlatList
          style={styles.listContainer}
          data={products}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <ListItem item={item} onItemPress={this.handleItemPress} />
          )}
        />
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home </Text>
        {products ? viewList : <Loader />}
      </View>
    );
  }
}

export default Home;
