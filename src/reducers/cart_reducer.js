import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, color, amount, product } = action.payload;
      const tmpItem = state.cart.find(i => i.id === id + color);
      if (tmpItem) {
        const tmpCart = state.cart.map(cartItem => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > cartItem.max) newAmount = cartItem.max;
            return {
              ...cartItem,
              amount: newAmount,
            };
          } else {
            return cartItem;
          }
        });
        return {
          ...state,
          cart: tmpCart,
        };
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return {
          ...state,
          cart: [...state.cart, newItem],
        };
      }
    case REMOVE_CART_ITEM:
      const tmpCart = state.cart.filter(item => item.id !== action.payload);
      return {
        ...state,
        cart: tmpCart,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case TOGGLE_CART_ITEM_AMOUNT:
      const tempCart = state.cart.map(item => {
        if (item.id === action.payload.id) {
          if (action.payload.value === 'inc') {
            let newAmount = item.amount + 1;
            if (newAmount > item.max) newAmount = item.max;
            return { ...item, amount: newAmount };
          } else {
            let newAmount = item.amount - 1;
            if (newAmount < 1) newAmount = 1;
            return { ...item, amount: newAmount };
          }
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: tempCart,
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default cart_reducer;
