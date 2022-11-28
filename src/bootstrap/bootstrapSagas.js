import { takeLatest, put, call, select, all } from 'redux-saga/effects';
import weather from '@my-module/weather/weatherSagas'

function* bootstrapSagas() {
  yield all([...weather]);
}

export default bootstrapSagas;
