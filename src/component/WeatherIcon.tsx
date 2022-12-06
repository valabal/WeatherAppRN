import React from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';

export type Props = {
  icon?: Object;
  style?: StyleProp<ImageStyle>;
};

export default (props: Props) => {
  const iconNumber = props.icon?.toString().padStart(2, '0');
  const style = props.style;
  const url =
    'https://developer.accuweather.com/sites/default/files/' +
    iconNumber +
    '-s.png';
  return (
    <Image
      style={style}
      source={{
        uri: url,
      }}
    />
  );
};
