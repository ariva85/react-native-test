import React, { PureComponent } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

class ListItem extends PureComponent {
  render() {
    const { item, onItemPress } = this.props;
    return (
      <TouchableHighlight onPress={() => onItemPress(item)}>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20
          }}
        >
          <Text>{item.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ListItem;

{
  /* <TouchableHighlight>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20
          }}
        >
          <Text>{item.name}</Text>
        </View>
      </TouchableHighlight> */
}
