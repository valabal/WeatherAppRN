import {takeLatest, put, call} from 'redux-saga/effects';
import {RESPONSE_STATUS} from '@my-util/constant';
import {
  GET_WEATHER_CITY_REQ,
  GET_WEATHER_FORECAST_REQ,
  GET_WEATHER_HISTORY_REQ,
  GET_WEATHER_LIST_REQ,
} from './weatherConstant';
import * as ACTION from './weatherAction';
import {setErrorMessage} from '@my-module/alert/alertAction';
import * as API from './weatherApi';
import axios, {AxiosResponse} from 'axios';
import {CityInput, SearchInput} from './weatherTypes';

function* networkError(error: any) {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    yield put(setErrorMessage(error.message));
  } else {
    console.log('unexpected error: ', error);
    yield put(setErrorMessage('UNKNOWN ERROR'));
  }
}

function* getWeatherList() {
  try {
    const response: AxiosResponse = yield call(API.getWeatherListApi);
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        yield put(ACTION.getWeatherListSuccess(response.data));
        break;
      case RESPONSE_STATUS.ERROR:
        yield put(ACTION.getWeatherListFailed(response.data));
        break;
      default:
    }
  } catch (error) {
    networkError(error);
  }
}

function* getWeatherForecast({payload}: {type: string; payload: CityInput}) {
  try {
    const response: AxiosResponse = yield call(API.getWeatherForecast, {
      ...payload,
    });
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        yield put(ACTION.getWeatherForecastSuccess(response.data));
        break;
      case RESPONSE_STATUS.ERROR:
        yield put(ACTION.getWeatherForecastFailed(response.data));
        break;
      default:
    }
  } catch (error) {
    networkError(error);
  }
}

function* getWeatherHistory({payload}: {type: string; payload: CityInput}) {
  try {
    const response: AxiosResponse = yield call(API.getWeatherHistory, {
      ...payload,
    });
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        yield put(ACTION.getWeatherHistorySuccess(response.data));
        break;
      case RESPONSE_STATUS.ERROR:
        yield put(ACTION.getWeatherHistoryFailed(response.data));
        break;
      default:
    }
  } catch (error) {
    networkError(error);
  }
}

function* getWeatherCity({payload}: {type: string; payload: SearchInput}) {
  try {
    const response: AxiosResponse = yield call(API.searchByLocApi, {
      ...payload,
    });
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        yield put(ACTION.getWeatherCitySuccess(response.data));
        break;
      case RESPONSE_STATUS.ERROR:
        yield put(ACTION.getWeatherCityFailed(response.data));
        break;
      default:
    }
  } catch (error) {
    networkError(error);
  }
}

export default [
  takeLatest(GET_WEATHER_LIST_REQ, getWeatherList),
  takeLatest(GET_WEATHER_FORECAST_REQ, getWeatherForecast),
  takeLatest(GET_WEATHER_HISTORY_REQ, getWeatherHistory),
  takeLatest(GET_WEATHER_CITY_REQ, getWeatherCity),
];
