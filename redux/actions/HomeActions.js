export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST
});

export const fetchProductSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export function fetchProducts() {
  return function(dispatch) {
    dispatch(fetchProductsRequest());
    return fetch(`http://www.mocky.io/v2/5bcb2e832f0000610075be9b`)
      .then(
        response => response.json(),
        error => dispatch(fetchProductFailure(error))
      )
      .then(json => dispatch(fetchProductSuccess(json.list)));
  };
}
