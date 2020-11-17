import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../store';
import { IProduct } from '../../models/IProduct';
import { addProductToCartRequest } from '../../store/modules/cart/actions';

interface ICatalogItemProps {
  catalogItem: IProduct;
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ catalogItem }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(catalogItem.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(catalogItem));
  }, [dispatch, catalogItem]);

  return (
    <article key={catalogItem.id}>
      <strong>{catalogItem.title}</strong>
      <span> - </span>
      <span>{catalogItem.price}</span>
      <button
        type="button"
        style={{ marginLeft: '16px' }}
        onClick={handleAddProductToCart}
      >
        Comprar
      </button>

      {hasFailedStockCheck && (
        <span style={{ color: 'red' }}>Falta de Estoque</span>
      )}
    </article>
  );
};

export default CatalogItem;
