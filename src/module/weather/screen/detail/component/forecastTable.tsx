import React from 'react';
import {FlatList} from 'react-native';
import {WeatherTimeObject} from '@my-module/weather/weatherTypes';
import createRandomNumber from '@my-util/random';
import {WeatherError} from '.';
import WeatherTimeItem from './cell/weatherTimeItem';

export interface ForecastProps {
  weatherForecast: Array<WeatherTimeObject>;
  forecastError?: any;
  isForecastFetch: boolean;
}

export default (props: ForecastProps) => {
  const {weatherForecast, forecastError} = props;
  if (forecastError.length > 0) {
    return <WeatherError error={forecastError} />;
  }
  return (
    <FlatList
      data={weatherForecast}
      renderItem={({item}) => <WeatherTimeItem item={item} />}
      horizontal={true}
      keyExtractor={(item) => {
        return item.EpochDateTime?.toString() ?? '' + createRandomNumber();
      }}
    />
  );
};
