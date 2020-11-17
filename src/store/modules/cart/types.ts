import { IProduct } from '../../../models/IProduct';
import { ICartItem } from '../../../models/ICartItem';
import { PayloadAction, ICommonState } from '../types';

export interface ICartState extends ICommonState {
  items: ICartItem[];
  failedStockCheck: number[];
}

export enum ActionTypes {
  ADD_PRODUCT_TO_CART_REQUEST = 'ADD_PRODUCT_TO_CART_REQUEST',
  ADD_PRODUCT_TO_CART_SUCCESS = 'ADD_PRODUCT_TO_CART_SUCCESS',
  ADD_PRODUCT_TO_CART_FAILURE = 'ADD_PRODUCT_TO_CART_FAILURE',
  CHECK_PRODUCT_STOCK_REQUEST = 'CHECK_PRODUCT_STOCK_REQUEST',
}

export type AddProductToCartRequestAction = PayloadAction<
  ActionTypes.ADD_PRODUCT_TO_CART_REQUEST,
  IProduct
>;

export type AddProductToCartSuccessAction = PayloadAction<
  ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS,
  IProduct
>;

export type AddProductToCartFailureAction = PayloadAction<
  ActionTypes.ADD_PRODUCT_TO_CART_FAILURE,
  number
>;

export type CartActions =
  | AddProductToCartRequestAction
  | AddProductToCartSuccessAction
  | AddProductToCartFailureAction;
