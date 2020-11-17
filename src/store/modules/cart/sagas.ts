import { AxiosResponse } from 'axios';
import { all, takeLatest, select, call, put } from 'redux-saga/effects';

import { IState } from '../..';
import api from '../../../services/api';
import IStockResponse from '../../../dtos/IStockResponse';
import { ActionTypes, AddProductToCartRequestAction } from './types';
import { addProductToCartSuccess, addProductToCartFailure } from './actions';

function* addToCart(action: AddProductToCartRequestAction) {
  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find(item => item.product.id === action.payload.id)
        ?.quantity ?? 0
    );
  });

  try {
    const availableStock: AxiosResponse<IStockResponse> = yield call(
      api.get,
      `stock/${action.payload.id}`,
    );

    if (availableStock.data.quantity > currentQuantity) {
      yield put(addProductToCartSuccess(action.payload));
    } else {
      yield put(addProductToCartFailure(action.payload.id));
    }
  } catch {
    yield put(addProductToCartFailure(action.payload.id));
  }
}

export default all([
  takeLatest(ActionTypes.ADD_PRODUCT_TO_CART_REQUEST, addToCart),
]);
