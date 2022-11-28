import axios from 'axios';
import { BASE_URL, API_KEY } from '@my-util/constant';

export const api = axios.create({
  timeout: 10000,
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY
  },
});

if (__DEV__) {
  api.interceptors.request.use((request) => {
    console.log('>>> Request', request);
    return request;
  });

  api.interceptors.response.use(
    (response) => {
    //  console.log('<<< Response:', response);
      return response;
    },
    (error) => {
      console.log('*** ', error);
      return Promise.reject(error);
    }
  );
}