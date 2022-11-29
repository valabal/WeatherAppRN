import React, {Component} from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import PropTypes, {any} from 'prop-types';
import {WeatherDayItem, WeatherTimeItem, WeatherError} from './component';
import {Divider, WeatherIcon, TemperatureLabel} from '@my-component/index';
import Styles from './style';

class WeatherDetail extends Component {
  constructor(props) {
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
    const {weatherHistory, isHistoryFetch, historyError} = this.props;
    if (historyError.length > 0) {
      return <WeatherError error={historyError} />;
    }
    return (
      <FlatList
        data={weatherHistory}
        renderItem={({item}) => <WeatherDayItem item={item} />}
        keyExtractor={(item) => item.EpochTime}
      />
    );
  }

  renderForecastList() {
    const {weatherForecast, isForecastFetch, forecastError} = this.props;
    if (forecastError.length > 0) {
      return <WeatherError error={forecastError} />;
    }
    return (
      <FlatList
        data={weatherForecast}
        renderItem={({item}) => <WeatherTimeItem item={item} />}
        horizontal={true}
        keyExtractor={(item) => item.EpochTime}
      />
    );
  }

  header({weatherData, cityNames}) {
    const cityName = weatherData?.EnglishName ?? cityNames;

    const emptyData = (
      <View style={([Styles.headerContainer], {height: 100})}>
        <Text style={{textAlign: 'center'}}>Unidentified</Text>
      </View>
    );

    let content = emptyData;
    if (weatherData) {
      const metric = weatherData?.Temperature?.Metric;
      content = (
        <View style={[Styles.headerContainer, {justifyContent: 'center'}]}>
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
      getHistory,
      getForecast,
      weatherHistory,
      weatherForecast,
      route: {
        params: {weather, cityNames},
      },
    } = this.props;
    const weatherData = weather ?? weatherHistory[0];

    return (
      <SafeAreaView style={{flex: 1}}>
        {this.header({weatherData, cityNames})}
        <Divider />
        <View style={[Styles.forecastContainer]}>
          {this.renderForecastList()}
        </View>
        <Divider />
        <View style={{flex: 1}}>{this.renderHistoryList()}</View>
      </SafeAreaView>
    );
  }
}

WeatherDetail.propTypes = {
  navigation: PropTypes.objectOf(String).isRequired,
  route: PropTypes.objectOf(String).isRequired,
  getHistory: PropTypes.func.isRequired,
  weatherHistory: PropTypes.arrayOf(Object).isRequired,
  isHistoryFetch: PropTypes.bool.isRequired,
  historyError: PropTypes.any,
  getForecast: PropTypes.func.isRequired,
  weatherForecast: PropTypes.arrayOf(Object).isRequired,
  isForecastFetch: PropTypes.bool.isRequired,
  forecastError: PropTypes.any,
  resetWeatherDetailPage: PropTypes.func.isRequired,
};

export default WeatherDetail;
