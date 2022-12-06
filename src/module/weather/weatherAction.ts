import {CityInput, SearchInput} from './weatherTypes';
import * as CONST from './weatherConstant';

export const getWeatherList = (payload?: String) => ({
  type: CONST.GET_WEATHER_LIST_REQ,
  payload,
});
export const getWeatherListSuccess = (payload: Array<any>) => ({
  type: CONST.GET_WEATHER_LIST_SUCCESS,
  payload,
});
export const getWeatherListFailed = (payload?: any) => ({
  type: CONST.GET_WEATHER_LIST_FAILED,
  payload,
});

export const getWeatherForecast = (payload?: CityInput) => ({
  type: CONST.GET_WEATHER_FORECAST_REQ,
  payload,
});
export const getWeatherForecastSuccess = (payload: Array<any>) => ({
  type: CONST.GET_WEATHER_FORECAST_SUCCESS,
  payload,
});
export const getWeatherForecastFailed = (payload?: any) => ({
  type: CONST.GET_WEATHER_FORECAST_FAILED,
  payload,
});

export const getWeatherHistory = (payload?: CityInput) => ({
  type: CONST.GET_WEATHER_HISTORY_REQ,
  payload,
});
export const getWeatherHistorySuccess = (payload: Array<any>) => ({
  type: CONST.GET_WEATHER_HISTORY_SUCCESS,
  payload,
});
export const getWeatherHistoryFailed = (payload?: any) => ({
  type: CONST.GET_WEATHER_HISTORY_FAILED,
  payload,
});

export const resetWeatherDetailPage = (payload?: any) => ({
  type: CONST.RESET_WEATHER_DETAIL_PAGE,
  payload,
});

export const getWeatherCity = (payload?: SearchInput) => ({
  type: CONST.GET_WEATHER_CITY_REQ,
  payload,
});
export const getWeatherCitySuccess = (payload?: Array<any>) => ({
  type: CONST.GET_WEATHER_CITY_SUCCESS,
  payload,
});
export const getWeatherCityFailed = (payload?: any) => ({
  type: CONST.GET_WEATHER_CITY_FAILED,
  payload,
});
export const resetWeatherCity = () => {
  console.log('RESET WEATHER');
  return {
    type: CONST.GET_WEATHER_CITY_RESET,
  };
};
