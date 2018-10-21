import React, { PureComponent } from 'react';
import { Button, View, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { addProduct } from '../redux/actions/CartActions';
import NavigationIcon from '../components/utils/NavigationIcon';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from '../styles/styles';
import routes from '../config/routes';

class Details extends PureComponent {
  static navigationOptions = {
    title: 'Details',
    headerRight: <NavigationIcon type="cart" />
  };

  state = { fallbackImg: null };

  handleAddBtnPress = () => {
    const { navigation, dispatch } = this.props;
    const { params } = navigation.state;
    dispatch(addProduct(params));
    navigation.navigate(routes.modal, params);
  };

  render() {
    const { navigation } = this.props;
    const { fallbackImg } = this.state;
    const { params } = navigation.state;
    return (
      <View style={styles.container}>
        <Image
          style={{ width: '100%', height: 200 }}
          source={fallbackImg || { uri: params.uri }}
          onError={() =>
            this.setState({ fallbackImg: require('../assets/fallbackImg.jpg') })
          }
        />
        <Text style={styles.detailsTitle}>
          {('' + params.name).toUpperCase()}
        </Text>
        <ScrollView contentContainerStyle={styles.detailsWrapper}>
          <Text style={styles.detailsDescription}>{params.description}</Text>
        </ScrollView>
        <View style={styles.priceWrapper}>
          <Text style={styles.detailsPrice}>{`Price : ${params.price} €`}</Text>
          <Button
            onPress={this.handleAddBtnPress}
            title="Add to cart"
            color={EStyleSheet.value('$primaryColor')}
            style={styles.addBtn}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Details);
