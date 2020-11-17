import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ICartState } from './modules/cart/types';

import rootSaga from './modules/rootSaga';
import rootReducer from './modules/rootReducer';

export interface IState {
  cart: ICartState;
}

const saga = createSagaMiddleware();

const middlewares = [saga];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

saga.run(rootSaga);

export default store;
