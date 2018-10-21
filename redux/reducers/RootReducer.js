import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import CartReducer from './CartReducer';

export default (RootReducer = combineReducers({
  HomeReducer,
  CartReducer
}));
