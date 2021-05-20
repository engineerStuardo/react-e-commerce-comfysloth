import React, { useEffect, useContext, useReducer } from 'react';

import reducer from '../reducers/filter_reducer';
import { useProductsContext } from './custom_hooks';
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    colors: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

export const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = e => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort, products, state.filters]);

  const updateFilters = e => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'category') value = e.target.textContent;
    if (name === 'colors') value = e.target.dataset.color;
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {};

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
