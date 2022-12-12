import React from 'react';
import {FlatList} from 'react-native';
import {WeatherDayObject} from '@my-module/weather/weatherTypes';
import createRandomNumber from '@my-util/random';
import {WeatherError} from '.';
import WeatherDayItem from './cell/weatherDayItem';

export interface HistoryProps {
  weatherHistory: Array<WeatherDayObject>;
  historyError?: any;
  isHistoryFetch: boolean;
}

export default (props: HistoryProps) => {
  const {weatherHistory, historyError} = props;
  if (historyError.length > 0) {
    return <WeatherError error={historyError} />;
  }
  return (
    <FlatList
      data={weatherHistory}
      renderItem={({item}) => <WeatherDayItem item={item} />}
      keyExtractor={(item) => {
        return item.EpochTime?.toString() ?? '' + createRandomNumber();
      }}
    />
  );
};
