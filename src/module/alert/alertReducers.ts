import * as CONST from '@my-module/alert/alertConstant';
import {Action} from '@my-util/types';

const initialState = {
  message: '',
};

export const alert = (state = initialState, action: Action) => {
  const {payload, type} = action;
  const actions: {[key: string]: any} = {
    [CONST.SET_ERROR_MESSAGE]: () => ({
      message: payload as string,
    }),
    DEFAULT: () => state,
  };
  return (actions[type] || actions.DEFAULT)();
};
