import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStack } from './navigation/RootStack';

import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: '#0275d8'
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
