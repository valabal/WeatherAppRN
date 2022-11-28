import {connect} from 'react-redux';
import WeatherDetail from './view';
import {
  getWeatherForecast,
  getWeatherHistory,
  resetWeatherDetailPage,
} from '@my-module/weather/weatherAction';

const mapStateToProps = (state) => ({
  weatherHistory: state.weather.getHistoryResponse,
  isHistoryFetch: state.weather.getHistoryFetch,
  historyError: state.weather.getHistoryError,
  weatherForecast: state.weather.getForecastResponse,
  isForecastFetch: state.weather.getForecastFetch,
  forecastError: state.weather.getForecastError,
});

const mapDispatchToProps = {
  getHistory: (payload) => getWeatherHistory(payload),
  getForecast: (payload) => getWeatherForecast(payload),
  resetWeatherDetailPage: () => resetWeatherDetailPage(),
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetail);
