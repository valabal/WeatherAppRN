import React, {Component} from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import PropTypes, {any} from 'prop-types';
import {WeatherDayItem, WeatherTimeItem} from './component';

const renderHistory = ({item}) => <WeatherDayItem item={item} />;

const renderForecast = ({item}) => <WeatherTimeItem item={item} />;

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
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={{textAlign: 'center'}}>{historyError}</Text>
        </View>
      );
    }
    return (
      <FlatList
        data={weatherHistory}
        renderItem={renderHistory}
        keyExtractor={(item) => item.EpochTime}
      />
    );
  }

  renderForecastList() {
    const {weatherForecast, isForecastFetch, forecastError} = this.props;
    if (forecastError.length > 0) {
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={{textAlign: 'center'}}>{forecastError}</Text>
        </View>
      );
    }
    return (
      <FlatList
        data={weatherForecast}
        renderItem={renderForecast}
        horizontal={true}
        keyExtractor={(item) => item.EpochTime}
      />
    );
  }

  divider() {
    return (
      <View
        style={{height: 1, borderBottomColor: 'black', borderBottomWidth: 1}}
      />
    );
  }

  header({weatherData, cityNames}) {
    const cityName = weatherData?.EnglishName ?? cityNames;

    let content = (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 100,
        }}>
        <Text style={{textAlign: 'center'}}>Unidentified</Text>
      </View>
    );

    if (weatherData) {
      const icon = weatherData?.WeatherIcon;
      const metric = weatherData?.Temperature?.Metric;
      const iconNumber = icon?.toString().padStart(2, '0');

      content = (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 50, height: 50}}
            source={{
              uri:
                'https://developer.accuweather.com/sites/default/files/' +
                iconNumber +
                '-s.png',
            }}
          />
          <Text style={{marginHorizontal: 15, fontSize: 25}}>
            {(metric?.Value ?? '') + ' ' + (metric?.Unit ?? '')}
          </Text>
        </View>
      );
    }

    return (
      <View>
        <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <Text style={{fontSize: 30}}>{cityName}</Text>
        </View>
        <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
          {content}
        </View>
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
        {this.divider()}
        <View style={{height: 100}}>{this.renderForecastList()}</View>
        {this.divider()}
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
