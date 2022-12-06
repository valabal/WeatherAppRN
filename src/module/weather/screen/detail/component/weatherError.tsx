import {ColorPalete} from '@my-config/color';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  errorLabelStyle: {textAlign: 'center', color: ColorPalete.text.red},
});

type Props = {
  error: string;
};

export default function weatherError(props: Props) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.errorLabelStyle}>{props.error}</Text>
    </View>
  );
}
