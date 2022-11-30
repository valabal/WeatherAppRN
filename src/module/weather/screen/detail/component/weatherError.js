import React from 'react';
import {View, Text} from 'react-native';

const Styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  errorLabelStyle: {textAlign: 'center'},
};

export default function weatherError(props) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.errorLabelStyle}>{props.error}</Text>
    </View>
  );
}
