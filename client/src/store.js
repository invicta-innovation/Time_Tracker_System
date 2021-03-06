import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './_reducers';
import {createLogger} from 'redux-logger';

const initialState = {};
const loggerMiddleware = createLogger();
const middleWare = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleWare) //loggerMiddleware)
  // composeEnhancers(applyMiddleware(...middleWare,loggerMiddleware))
);

export default store;