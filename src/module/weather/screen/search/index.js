import SearchPage from './view';
import {connect} from 'react-redux';
import {
  getWeatherCity,
  resetWeatherCity,
} from '@my-module/weather/weatherAction';

const mapStateToProps = (state) => ({
  cityList: state.weather.getWeatherCityResponse,
});

const mapDispatchToProps = {
  getCity: (payload) => getWeatherCity({query: payload}),
  refreshCity: () => resetWeatherCity(),
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
