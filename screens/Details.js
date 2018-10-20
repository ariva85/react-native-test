import React, { PureComponent } from 'react';
import { Button, View, Text } from 'react-native';

class Details extends PureComponent {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor
    };
  };
  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Details, {params.name} - {params.price} - {params.description}{' '}
        </Text>
        <Button
          onPress={() => navigation.navigate('Modal', params)}
          title="add"
          color="red"
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

export default Details;
