import React from 'react';
import {View, Image} from 'react-native';

export default WeatherIcon = (props) => {
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
