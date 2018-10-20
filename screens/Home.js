import React, { PureComponent } from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import { Title } from '../components/utils/Title';
import ListItem from '../components/utils/ListItem';
import api from '../api/api';
import routes from '../config/routes';

const mock = {
  name: 'adsas dads',
  details: ' qweq weqw eqw ewqe wqe wqe ',
  price: '3$'
};

class Home extends PureComponent {
  state = { products: [] };
  async componentDidMount() {
    const apiResult = await api.getList();
    this.setState({ products: apiResult.list });
  }

  static navigationOptions = {
    title: 'Home',
    /* headerTitle: <Title />, */
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#000"
      />
    )
  };

  handleItemPress = item => {
    const { navigation } = this.props;
    navigation.navigate('Details', item);
  };

  render() {
    const { navigation } = this.props;
    const { products } = this.state;
    let viewList = null;
    if (products.length) {
      viewList = (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ListItem item={item} onItemPress={this.handleItemPress} />
          )}
        />
      );
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home </Text>
        {viewList}
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate(routes.details, mock)}
        />
        <Button
          title="Go to Cart"
          onPress={() => navigation.navigate(routes.cart)}
        />

        <Button
          onPress={() => navigation.navigate(routes.modal)}
          title="Info"
          color="red"
        />
      </View>
    );
  }
}

export default Home;
