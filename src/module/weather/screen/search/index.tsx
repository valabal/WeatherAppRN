import SearchPage from './view';
import {connect} from 'react-redux';
import {
  getWeatherCity,
  resetWeatherCity,
} from '@my-module/weather/weatherAction';
import {RootState} from '@my-config/store';

const mapStateToProps = (state: RootState) => ({
  cityList: state.weather.getWeatherCityResponse,
});

const mapDispatchToProps = {
  getCity: (payload: string) => getWeatherCity({query: payload}),
  refreshCity: () => resetWeatherCity(),
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
