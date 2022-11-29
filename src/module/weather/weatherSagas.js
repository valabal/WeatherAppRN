import {takeLatest, put, call, select} from 'redux-saga/effects';
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
import _ from 'lodash';

function* getWeatherList() {
  try {
    const response = yield call(API.getWeatherListApi);
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
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    yield put(setErrorMessage(error.message));
  }
}

function* getWeatherForecast(params) {
  try {
    const response = yield call(API.getWeatherForecast, {...params.payload});
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
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    yield put(setErrorMessage(error.message));
  }
}

function* getWeatherHistory(params) {
  try {
    const response = yield call(API.getWeatherHistory, {...params.payload});
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
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    yield put(setErrorMessage(error.message));
  }
}

function* getWeatherCity(params) {
  try {
    const response = yield call(API.searchByLocApi, {...params.payload});
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
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }

    yield put(setErrorMessage(error.message));
  }
}

export default [
  takeLatest(GET_WEATHER_LIST_REQ, getWeatherList),
  takeLatest(GET_WEATHER_FORECAST_REQ, getWeatherForecast),
  takeLatest(GET_WEATHER_HISTORY_REQ, getWeatherHistory),
  takeLatest(GET_WEATHER_CITY_REQ, getWeatherCity),
];
