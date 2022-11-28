import * as CONST from './weatherConstant';

export const getWeatherList = (payload) => ({
  type: CONST.GET_WEATHER_LIST_REQ,
  payload,
});
export const getWeatherListSuccess = (payload) => ({
  type: CONST.GET_WEATHER_LIST_SUCCESS,
  payload,
});
export const getWeatherListFailed = (payload) => ({
  type: CONST.GET_WEATHER_LIST_FAILED,
  payload,
});

export const getWeatherForecast = (payload) => ({
  type: CONST.GET_WEATHER_FORECAST_REQ,
  payload,
});
export const getWeatherForecastSuccess = (payload) => ({
  type: CONST.GET_WEATHER_FORECAST_SUCCESS,
  payload,
});
export const getWeatherForecastFailed = (payload) => ({
  type: CONST.GET_WEATHER_FORECAST_FAILED,
  payload,
});

export const getWeatherHistory = (payload) => ({
  type: CONST.GET_WEATHER_HISTORY_REQ,
  payload,
});
export const getWeatherHistorySuccess = (payload) => ({
  type: CONST.GET_WEATHER_HISTORY_SUCCESS,
  payload,
});
export const getWeatherHistoryFailed = (payload) => ({
  type: CONST.GET_WEATHER_HISTORY_FAILED,
  payload,
});

export const resetWeatherDetailPage = (payload) => ({
  type: CONST.RESET_WEATHER_DETAIL_PAGE,
  payload,
});

export const getWeatherCity = (payload) => ({
  type: CONST.GET_WEATHER_CITY_REQ,
  payload,
});
export const getWeatherCitySuccess = (payload) => ({
  type: CONST.GET_WEATHER_CITY_SUCCESS,
  payload,
});
export const getWeatherCityFailed = (payload) => ({
  type: CONST.GET_WEATHER_CITY_FAILED,
  payload,
});
export const resetWeatherCity = (payload) => ({
  type: CONST.GET_WEATHER_CITY_RESET,
  payload,
});
