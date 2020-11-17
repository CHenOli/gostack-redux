import { IProduct } from '../../../models/IProduct';

import {
  ActionTypes,
  AddProductToCartRequestAction,
  AddProductToCartSuccessAction,
  AddProductToCartFailureAction,
} from './types';

export const addProductToCartRequest = (
  product: IProduct,
): AddProductToCartRequestAction => {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART_REQUEST,
    payload: product,
  };
};

export const addProductToCartSuccess = (
  product: IProduct,
): AddProductToCartSuccessAction => {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS,
    payload: product,
  };
};

export const addProductToCartFailure = (
  productId: number,
): AddProductToCartFailureAction => {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART_FAILURE,
    payload: productId,
  };
};
