import { ADD_PRODUCT } from '../actions/CartActions';

const initialState = {
  list: []
};

export default function homeReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case ADD_PRODUCT:
      const { list } = state;
      const { item } = action.payload;
      if (list.length) {
        const index = list.findIndex(cartItem => cartItem.id === item.id);
        if (index !== undefined && index >= 0) {
          const newItem = { ...list[index] };
          newItem.quantity = ++newItem.quantity;
          newState.list[index] = newItem;
          return newState;
        }
      }
      newState.list.push({ ...item, quantity: 1 });
      return newState;
    case REMOVE_PRODUCT:
      const { list } = newState;
      const { index } = action.payload;
      if (list[index].quantity > 2) {
        const newItem = { ...list[index] };
        newItem.quantity = --newItem.quantity;
        newState.list[index] = newItem;
        return newState;
      } else {
        newState.list.splice(index, 1);
        return newState;
      }

    default:
      return state;
  }
}
