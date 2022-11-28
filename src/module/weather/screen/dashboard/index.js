import { connect } from 'react-redux';
import { getWeatherList } from '@my-module/weather/weatherAction';
import Dashboard from './view';

const mapStateToProps = (state) => ({
  weatherList: state.weather.getWeatherListResponse,
  weatherParams: state.weather.getWeatherListParam,
  isFetch: state.weather.getWeatherListFetch,
  error: state.weather.getWeatherListError.message
});

const mapDispatchToProps = {
  getWeatherList: () => getWeatherList(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
