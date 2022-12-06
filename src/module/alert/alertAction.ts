import * as CONST from './alertConstant';

export const setErrorMessage = (payload: string) => ({
  type: CONST.SET_ERROR_MESSAGE,
  payload,
});
