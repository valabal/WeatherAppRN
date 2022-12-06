import * as CONST from '@my-module/weather/weatherConstant';
import * as STATE from '@my-module/weather/weatherStates';
import {Action} from '@my-util/types';

type WeatherStateModel = STATE.GetWeatherListStateType &
  STATE.GetWeatherHistoryStateType &
  STATE.GetWeatherForecastStateType &
  STATE.GetWeatherCityStateType;

const weatherInitialState: WeatherStateModel = {
  ...STATE.getWeatherListInitialState,
  ...STATE.getWeatherForecastInitialState,
  ...STATE.getWeatherHistoryInitialState,
  ...STATE.getWeatherCityInitialState,
};
type WeatherActionCallback = () => WeatherStateModel;

export const weather = (
  state: WeatherStateModel = weatherInitialState,
  action: Action,
) => {
  const {payload, type} = action;
  const actions: {[key: string]: WeatherActionCallback} = {
    [CONST.GET_WEATHER_LIST_REQ]: () => ({
      ...state,
      getWeatherListFetch: true,
      getWeatherListParam: payload,
    }),
    [CONST.GET_WEATHER_LIST_SUCCESS]: () => ({
      ...state,
      getWeatherListFetch: false,
      getWeatherListResponse: payload,
    }),
    [CONST.GET_WEATHER_LIST_FAILED]: () => ({
      ...state,
      getWeatherListFetch: false,
      getWeatherListError: payload,
    }),

    [CONST.GET_WEATHER_FORECAST_REQ]: () => ({
      ...state,
      getForecastFetch: true,
      getForecastParam: payload,
    }),
    [CONST.GET_WEATHER_FORECAST_SUCCESS]: () => ({
      ...state,
      getForecastFetch: false,
      getForecastResponse: payload,
    }),
    [CONST.GET_WEATHER_FORECAST_FAILED]: () => ({
      ...state,
      getForecastFetch: false,
      getForecastError: payload,
    }),
    [CONST.GET_WEATHER_HISTORY_REQ]: () => ({
      ...state,
      getHistoryFetch: true,
      getHistoryParam: payload,
    }),
    [CONST.GET_WEATHER_HISTORY_SUCCESS]: () => ({
      ...state,
      getHistoryFetch: false,
      getHistoryResponse: payload,
    }),
    [CONST.GET_WEATHER_HISTORY_FAILED]: () => ({
      ...state,
      getHistoryFetch: false,
      getHistoryError: payload,
    }),
    [CONST.GET_WEATHER_CITY_REQ]: () => ({
      ...state,
      getWeatherCityFetch: true,
      getWeatherCityParam: payload,
    }),
    [CONST.GET_WEATHER_CITY_SUCCESS]: () => ({
      ...state,
      getWeatherCityFetch: false,
      getWeatherCityResponse: payload,
    }),
    [CONST.GET_WEATHER_CITY_FAILED]: () => ({
      ...state,
      getWeatherCityFetch: false,
      getWeatherCityError: payload,
    }),
    [CONST.GET_WEATHER_CITY_RESET]: () => ({
      ...state,
      ...STATE.getWeatherCityInitialState,
    }),
    [CONST.RESET_WEATHER_DETAIL_PAGE]: () => ({
      ...state,
      ...STATE.getWeatherForecastInitialState,
      ...STATE.getWeatherHistoryInitialState,
    }),

    DEFAULT: () => state,
  };
  return (actions[type] || actions.DEFAULT)();
};
