import React from 'react';
import {View} from 'react-native';

export interface Props {
  height: number;
}

export function Spacer(props: Props) {
  return <View style={{height: props.height}} />;
}
