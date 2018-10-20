import React, { PureComponent } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import styles from '../../styles/styles';

class ListItem extends PureComponent {
  render() {
    const { item, onItemPress } = this.props;
    return (
      <TouchableHighlight onPress={() => onItemPress(item)}>
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>
            {item.name} - {item.price} €
          </Text>
          <FontAwesome
            name="caret-right"
            size={24}
            color={EStyleSheet.value('$textColor')}
            style={styles.listIcon}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

export default ListItem;
