import * as CONST from '@my-module/alert/alertConstant';

const initialState = {
  message: '',
};

export const alert = (state = initialState, action) => {
  const {payload, type} = action;
  const actions = {
    [CONST.SET_ERROR_MESSAGE]: () => ({
      message: payload,
    }),
    DEFAULT: () => state,
  };
  return (actions[type] || actions.DEFAULT)();
};
