import axios, {AxiosInstance} from 'axios';
import {BASE_URL, API_KEY} from '@my-util/constant';
import AxiosMockAdapter from 'axios-mock-adapter';
import {IS_AXIO_MOCK} from '@env';
const axiosLiveInstance = axios.create({
  timeout: 10000,
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
  },
});
const axiosMockInstance = axios.create();

export const axiosMockAdapterInstance = new AxiosMockAdapter(
  axiosMockInstance,
  {delayResponse: 0},
);

export const api: AxiosInstance =
  IS_AXIO_MOCK === 'true' ? axiosMockInstance : axiosLiveInstance;

if (__DEV__) {
  api.interceptors.request.use((request) => {
    console.log('>>> Request', request);
    return request;
  });

  api.interceptors.response.use(
    (response) => {
      console.log('<<< Response:', response);
      return response;
    },
    (error) => {
      console.log('*** ', error);
      return Promise.reject(error);
    },
  );
}
