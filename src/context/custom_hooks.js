import { useContext } from 'react';

import {
  ProductsContext,
  CartContext,
  FilterContext,
  UserContext,
} from './index';

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export const useUserContext = () => {
  return useContext(UserContext);
};
