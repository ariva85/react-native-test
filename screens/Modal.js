import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';

class Modal extends React.Component {
  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>{params.name} added tyour cart.</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

export default Modal;
