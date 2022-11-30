import React from 'react';
import {Text} from 'react-native';

export default (props) => {
  const {metric, style} = props;
  const value =
    metric?.Value && metric?.Unit
      ? metric?.Value + ' ' + metric?.Unit
      : 'Unknown';
  return <Text style={style}>{value}</Text>;
};
