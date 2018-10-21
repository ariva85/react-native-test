import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './reducers/RootReducer';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  RootReducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);
