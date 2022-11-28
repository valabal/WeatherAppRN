import * as CONST from './alertConstant';

export const setErrorMessage = (payload) => ({
  type: CONST.SET_ERROR_MESSAGE,
  payload,
});
