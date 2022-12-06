import * as CONST from '@my-module/alert/alertConstant';
import {Action} from '@my-util/types';

interface AlertStateModel {
  message: string;
}

const initialState: AlertStateModel = {
  message: '',
};

type AlertActionCallback = () => AlertStateModel;

export const alert = (
  state: AlertStateModel = initialState,
  action: Action,
) => {
  const {payload, type} = action;
  const actions: {[key: string]: AlertActionCallback} = {
    [CONST.SET_ERROR_MESSAGE]: () => ({
      message: payload as string,
    }),
    DEFAULT: () => state,
  };
  return (actions[type] || actions.DEFAULT)();
};
