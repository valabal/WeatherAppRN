import {connect} from 'react-redux';
import WeatherDetail from './view';
import {
  getWeatherForecast,
  getWeatherHistory,
  resetWeatherDetailPage,
} from '@my-module/weather/weatherAction';
import {RootState} from '@my-config/store';
import {CityInput} from '@my-module/weather/weatherTypes';

const mapStateToProps = (state: RootState) => ({
  weatherHistory: state.weather.getHistoryResponse,
  isHistoryFetch: state.weather.getHistoryFetch,
  historyError: state.weather.getHistoryError,
  weatherForecast: state.weather.getForecastResponse,
  isForecastFetch: state.weather.getForecastFetch,
  forecastError: state.weather.getForecastError,
});

const mapDispatchToProps = {
  getHistory: (payload: CityInput) => getWeatherHistory(payload),
  getForecast: (payload: CityInput) => getWeatherForecast(payload),
  resetWeatherDetailPage: () => resetWeatherDetailPage(),
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetail);
