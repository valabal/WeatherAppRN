import {all} from 'redux-saga/effects';
import weatherSaga from '@my-module/weather/weatherSagas';

function* bootstrapSagas() {
  yield all([...weatherSaga]);
}

export default bootstrapSagas;
