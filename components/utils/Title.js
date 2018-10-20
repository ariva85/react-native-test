import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import Icon from '../../assets/icon.png';

export const Title = props => (
  <Image source={Icon} style={{ width: 30, height: 30 }} />
);
