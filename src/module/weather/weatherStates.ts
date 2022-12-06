import {
  CitySearchWeatherObject,
  WeatherDayObject,
  WeatherTimeObject,
  SimpleWeatherObject,
} from '@my-module/weather/weatherTypes';

export interface GetWeatherListStateType {
  getWeatherListFetch: boolean;
  getWeatherListParam: any;
  getWeatherListResponse: Array<SimpleWeatherObject>;
  getWeatherListError: {
    message: string;
  };
}

export const getWeatherListInitialState: GetWeatherListStateType = {
  getWeatherListFetch: false,
  getWeatherListParam: null,
  getWeatherListResponse: [],
  getWeatherListError: {
    message: '',
  },
};

export interface GetWeatherHistoryStateType {
  getHistoryFetch: boolean;
  getHistoryParam: any;
  getHistoryResponse: Array<WeatherDayObject>;
  getHistoryError: {
    message: string;
  };
}

export const getWeatherHistoryInitialState: GetWeatherHistoryStateType = {
  getHistoryFetch: false,
  getHistoryParam: null,
  getHistoryResponse: [],
  getHistoryError: {
    message: '',
  },
};

export interface GetWeatherForecastStateType {
  getForecastFetch: boolean;
  getForecastParam: any;
  getForecastResponse: Array<WeatherTimeObject>;
  getForecastError: {
    message: string;
  };
}

export const getWeatherForecastInitialState: GetWeatherForecastStateType = {
  getForecastFetch: false,
  getForecastParam: null,
  getForecastResponse: [],
  getForecastError: {
    message: '',
  },
};

export interface GetWeatherCityStateType {
  getWeatherCityFetch: boolean;
  getWeatherCityParam: any;
  getWeatherCityResponse: Array<CitySearchWeatherObject>;
  getWeatherCityError: {
    message: string;
  };
}
export const getWeatherCityInitialState: GetWeatherCityStateType = {
  getWeatherCityFetch: false,
  getWeatherCityParam: null,
  getWeatherCityResponse: [],
  getWeatherCityError: {
    message: '',
  },
};
