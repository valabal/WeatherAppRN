import {createStore, applyMiddleware, compose} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware, {Saga, Task} from 'redux-saga';
import bootstrapReducers from '@my-bootstrap/bootstrapReducers';
import Persist from './persist';

let finalReducers = bootstrapReducers;
if (Persist.active) {
  const persistConfig = Persist.storeConfig;
  finalReducers = persistReducer(persistConfig, bootstrapReducers);
}

const windows = window as {[key: string]: any};

const composeEnhancer =
  __DEV__ && (windows.__REDUX_DEVTOOLS_EXTENSION__ as typeof compose)
    ? (windows.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose)
    : compose;

export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  finalReducers,
  composeEnhancer(applyMiddleware(sagaMiddleware)),
);
export const persistor = persistStore(store);

let sagaRunner: Task;

export const runSaga = (rootSaga: Saga) => {
  if (__DEV__ && (module as any).hot && sagaRunner) {
    sagaRunner.cancel();
  }
  sagaRunner = sagaMiddleware.run(rootSaga);
};

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
