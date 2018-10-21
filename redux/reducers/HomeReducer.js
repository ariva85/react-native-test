import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS
} from '../actions/HomeActions';

const initialState = {
  products: [],
  loading: false,
  error: null
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload.products, loading: false };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        error: action.payload.error,
        loading: false
      };
    default:
      return state;
  }
}
