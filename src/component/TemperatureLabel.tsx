import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

export type Metric = {
  Value?: number;
  Unit?: string;
};

export type Props = {
  metric?: Metric;
  style?: StyleProp<TextStyle>;
};

export default (props: Props) => {
  const {metric, style} = props;
  const value =
    metric?.Value && metric?.Unit
      ? metric?.Value + ' ' + metric?.Unit
      : 'Unknown';
  return <Text style={style}>{value}</Text>;
};
