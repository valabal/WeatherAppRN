import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WeatherIcon, TemperatureLabel} from '@my-component/index';
import {
  SimpleWeatherObject,
  WeatherObject,
} from '@my-module/weather/weatherTypes';

type HeaderProps = {
  weatherData?: WeatherObject;
  cityNames?: string;
};

const Styles = StyleSheet.create({
  justifyContent: {justifyContent: 'center'},
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    height: 100,
  },
  unidentifiedLabel: {textAlign: 'center'},
  headerSubContainer: {paddingHorizontal: 20, paddingVertical: 10},
  headerCityLabel: {fontSize: 30},
  temperatureText: {marginHorizontal: 15, fontSize: 25},
  weatherIcon: {width: 50, height: 50},
});

const EmptyHeader = (
  <View style={[Styles.headerContainer, Styles.emptyContainer]}>
    <Text style={Styles.unidentifiedLabel}>Unidentified</Text>
  </View>
);

const HeaderContent = (weatherData: WeatherObject) => {
  const metric = weatherData?.Temperature?.Metric;
  return (
    <View style={[Styles.headerContainer, Styles.justifyContent]}>
      <WeatherIcon
        style={[Styles.weatherIcon]}
        icon={weatherData?.WeatherIcon}
      />
      <TemperatureLabel style={[Styles.temperatureText]} metric={metric} />
    </View>
  );
};

export default (props: HeaderProps) => {
  const {weatherData, cityNames} = props;

  let weatherObject = weatherData as SimpleWeatherObject;
  let cityName = cityNames;
  if (weatherObject != null && weatherObject.EnglishName != null) {
    cityName = weatherObject.EnglishName;
  }
  let content = weatherData ? HeaderContent(weatherData) : EmptyHeader;
  return (
    <View>
      <View style={[Styles.headerSubContainer]}>
        <Text style={[Styles.headerCityLabel]}>{cityName}</Text>
      </View>
      <View style={[Styles.headerSubContainer]}>{content}</View>
    </View>
  );
};
