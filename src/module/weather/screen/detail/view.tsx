import React, {Component} from 'react';
import {View, SafeAreaView} from 'react-native';
import {HeaderContent, HistoryTable} from './component';
import {Divider} from '@my-component/index';
import Styles from './style';
import {SimpleWeatherObject} from '@my-module/weather/weatherTypes';
import ForecastTable, {ForecastProps} from './component/forecastTable';
import {HistoryProps} from './component/historyTable';

type Params = {
  cityId?: string;
  weather?: SimpleWeatherObject;
  cityNames?: string;
};

export interface Routes {
  params: Params;
}

export interface Props extends ForecastProps, HistoryProps {
  route: Routes;
  getHistory: Function;
  getForecast: Function;
  resetWeatherDetailPage: Function;
}

class WeatherDetail extends Component<Props> {
  constructor(props: Props) {
    super(props);
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
        <HeaderContent weatherData={weatherData} cityNames={cityNames} />
        <Divider />
        <View style={[Styles.forecastContainer]}>
          <ForecastTable {...this.props} />
        </View>
        <Divider />
        <View style={Styles.singleFlex}>
          <HistoryTable {...this.props} />
        </View>
      </SafeAreaView>
    );
  }
}

export default WeatherDetail;
