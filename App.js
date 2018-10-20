import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStack } from './navigation/RootStack';

import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: '#123c69',
  $primaryColor: '#ac3861',
  $secondaryColor: '#edc7b7',
  $lightGrey: '#bab2b5'
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
