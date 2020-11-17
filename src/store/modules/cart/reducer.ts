import { Reducer } from 'redux';

import produce from 'immer';

import { ActionTypes, ICartState, CartActions } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
  error: '',
  loading: false,
  failedStockCheck: [],
};

const cart: Reducer<ICartState, CartActions> = (
  state = INITIAL_STATE,
  action,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS: {
        const productInCart = draft.items.find(
          item => item.product.id === action.payload.id,
        );

        const productInCartIndex = draft.items.findIndex(
          item => item.product.id === action.payload.id,
        );

        if (productInCart) {
          productInCart.quantity += 1;
          draft.items.splice(productInCartIndex, 1);
          draft.items.push(productInCart);
        } else {
          draft.items.push({
            product: action.payload,
            quantity: 1,
          });
        }

        return draft;
      }

      case ActionTypes.ADD_PRODUCT_TO_CART_FAILURE: {
        draft.failedStockCheck.push(action.payload);
        return draft;
      }

      default: {
        return draft;
      }
    }
  });
};

export default cart;
