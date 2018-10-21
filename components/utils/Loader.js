import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from '../../styles/styles';
import EStyleSheet from 'react-native-extended-stylesheet';

export const Loader = () => (
  <View style={styles.loaderWrapper}>
    <ActivityIndicator
      size="large"
      color={EStyleSheet.value('$primaryColor')}
    />
  </View>
);
