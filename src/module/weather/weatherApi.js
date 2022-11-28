import {api} from '@my-bootstrap/bootstrapApi';

export const getWeatherListApi = (payload) => {
  return api.get('/currentconditions/v1/topcities/50');
};

export const getWeatherHistory = (payload) => {
  return api.get('/currentconditions/v1/' + payload.cityId + '/historical/24');
};

export const getWeatherForecast = (payload) => {
  return api.get('/forecasts/v1/hourly/12hour/' + payload.cityId);
};

export const searchByLocApi = (payload) => {
  return api.get('/locations/v1/cities/autocomplete', {
    params: {q: payload.query},
  });
};
