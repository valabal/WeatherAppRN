import React from 'react';
import {View, Text} from 'react-native';

export default function weatherError(props) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text style={{textAlign: 'center'}}>{props.error}</Text>
    </View>
  );
}
