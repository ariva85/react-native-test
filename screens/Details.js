import React, { PureComponent } from 'react';
import { Button, View, Text, Image, ScrollView } from 'react-native';
import CartButton from '../components/utils/CartButton';
import styles from '../styles/styles';
import EStyleSheet from 'react-native-extended-stylesheet';

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
        <ScrollView contentContainerStyle={styles.detailsWrapper}>
          <Text style={styles.detailsTitle}>
            {('' + params.name).toUpperCase()}
          </Text>
          <Text style={styles.detailsDescription}>{params.description}</Text>
        </ScrollView>
        <View style={styles.priceWrapper}>
          <Text style={styles.detailsPrice}>{`Price : ${params.price} €`}</Text>
          {/* TODO create custom button */}
          <Button
            onPress={() => navigation.navigate('Modal', params)}
            title="add"
            color={EStyleSheet.value('$primaryColor')}
            style={styles.addBtn}
          />
        </View>
      </View>
    );
  }
}

export default Details;
