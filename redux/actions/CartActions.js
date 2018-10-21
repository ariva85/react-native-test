export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const addProduct = item => ({ type: ADD_PRODUCT, payload: { item } });
export const removeProduct = index => ({
  type: REMOVE_PRODUCT,
  payload: { index }
});
