import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';

import { Wrapper } from './styled';
import { useFilterContext } from '../../context/custom_hooks';

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
  } = useFilterContext();

  return (
    <Wrapper>
      <div className='btn-container'>
        <button
          type='button'
          className={`${grid_view ? 'active' : null}`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type='button'
          className={`${!grid_view ? 'active' : null}`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor='sort'>sort by:</label>
        <select name='sort' id='sort' className='sort-input'>
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='price-a'>name (a-z)</option>
          <option value='price-z'>name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

export default Sort;
