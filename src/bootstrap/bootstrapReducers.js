import {combineReducers} from 'redux';
import {weather} from '@my-module/weather/weatherReducers';
import {alert} from '@my-module/alert/alertReducers';

const bootstrapReducers = combineReducers({weather, alert});

export default bootstrapReducers;
