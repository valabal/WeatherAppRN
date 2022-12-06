import React, {Component} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {WeatherDayItem, WeatherTimeItem, WeatherError} from './component';
import {Divider, WeatherIcon, TemperatureLabel} from '@my-component/index';
import Styles from './style';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  SimpleWeatherObject,
  WeatherDayObject,
  WeatherTimeObject,
} from '@my-module/weather/weatherTypes';
import createRandomNumber from '@my-util/random';

type Params = {
  cityId?: string;
  weather?: SimpleWeatherObject;
  cityNames?: string;
};

type HeaderContent = {
  weatherData?: SimpleWeatherObject;
  cityNames?: string;
};

export interface Routes {
  params: Params;
}

export interface Props {
  navigation: StackNavigationProp<any, any>;
  route: Routes;
  getHistory: Function;
  weatherHistory: Array<WeatherDayObject>;
  isHistoryFetch: boolean;
  historyError?: any;
  getForecast: Function;
  weatherForecast: Array<WeatherTimeObject>;
  isForecastFetch: boolean;
  forecastError?: any;
  resetWeatherDetailPage: Function;
}

class WeatherDetail extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.renderHistoryList = this.renderHistoryList.bind(this);
    this.renderForecastList = this.renderForecastList.bind(this);
  }

  componentDidMount() {
    const {
      getHistory,
      getForecast,
      resetWeatherDetailPage,
      route: {
        params: {cityId},
      },
    } = this.props;
    resetWeatherDetailPage();
    getHistory({cityId: cityId});
    getForecast({cityId: cityId});
  }

  renderHistoryList() {
    const {weatherHistory, historyError} = this.props;
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
  }

  renderForecastList() {
    const {weatherForecast, forecastError} = this.props;
    if (forecastError.length > 0) {
      return <WeatherError error={forecastError} />;
    }
    return (
      <FlatList
        data={weatherForecast}
        renderItem={({item}) => <WeatherTimeItem item={item} />}
        horizontal={true}
        keyExtractor={(item) =>
          item.EpochTime?.toString() ?? '' + createRandomNumber()
        }
      />
    );
  }

  header({weatherData, cityNames}: HeaderContent) {
    const cityName = weatherData?.EnglishName ?? cityNames;

    const emptyData = (
      <View style={[Styles.headerContainer, Styles.emptyContainer]}>
        <Text style={Styles.unidentifiedLabel}>Unidentified</Text>
      </View>
    );

    let content = emptyData;
    if (weatherData) {
      const metric = weatherData?.Temperature?.Metric;
      content = (
        <View style={[Styles.headerContainer, Styles.justifyContent]}>
          <WeatherIcon
            style={[Styles.weatherIcon]}
            icon={weatherData?.WeatherIcon}
          />
          <TemperatureLabel style={[Styles.temperatureText]} metric={metric} />
        </View>
      );
    }

    return (
      <View>
        <View style={[Styles.headerSubContainer]}>
          <Text style={[Styles.headerCityLabel]}>{cityName}</Text>
        </View>
        <View style={[Styles.headerSubContainer]}>{content}</View>
      </View>
    );
  }

  render() {
    const {
      weatherHistory,
      route: {
        params: {weather, cityNames},
      },
    } = this.props;
    const weatherData = weather ?? weatherHistory[0];

    return (
      <SafeAreaView style={Styles.singleFlex}>
        {this.header({weatherData, cityNames})}
        <Divider />
        <View style={[Styles.forecastContainer]}>
          {this.renderForecastList()}
        </View>
        <Divider />
        <View style={Styles.singleFlex}>{this.renderHistoryList()}</View>
      </SafeAreaView>
    );
  }
}

export default WeatherDetail;
