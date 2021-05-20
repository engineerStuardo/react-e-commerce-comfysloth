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

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map(p => p.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
    case SET_GRIDVIEW:
      return {
        ...state,
        grid_view: true,
      };
    case SET_LISTVIEW:
      return {
        ...state,
        grid_view: false,
      };
    case UPDATE_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case SORT_PRODUCTS:
      const { sort, filtered_products } = state;
      let sortArr = [...filtered_products];
      if (sort === 'price-lowest') {
        sortArr = sortArr.sort((a, b) => a.price - b.price);
      } else if (sort === 'price-highest') {
        sortArr = sortArr.sort((a, b) => b.price - a.price);
      } else if (sort === 'price-a') {
        sortArr = sortArr.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sort === 'price-z') {
        sortArr = sortArr.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        filtered_products: sortArr,
      };
    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };
    case FILTER_PRODUCTS:
      console.log('filtering products');
      return { ...state };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filter_reducer;
