import React, { PureComponent } from 'react';
import { Button, View, Text, Image } from 'react-native';
import CartButton from '../components/utils/CartButton';
import styles from '../styles/styles';

class Details extends PureComponent {
  static navigationOptions = {
    title: 'Details',
    headerRight: <CartButton />
  };
  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    return (
      <View style={styles.container}>
        <Image
          style={{ width: '100%', height: 200 }}
          source={{ uri: 'https://placeimg.com/640/480/tech' }}
        />
        <View style={styles.detailsWrapper}>
          <Text style={styles.detailsTitle}>
            {('' + params.name).toUpperCase()}
          </Text>
          <Text style={styles.detailsDescription}>{params.description}</Text>
          <Text style={styles.detailsPrice}>{`Price : ${params.price} €`}</Text>
        </View>
        <Button
          onPress={() => navigation.navigate('Modal', params)}
          title="add"
          color="red"
        />
      </View>
    );
  }
}

export default Details;
