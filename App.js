import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStack } from './navigation/RootStack';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $textColor: '#123c69',
  $primaryColor: '#ac3861',
  $secondaryColor: '#edc7b7',
  $lightGrey: '#bab2b5'
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
