import React from 'react';
import { formatPrice } from '../../utils/helpers';

export const Price = ({ price, updateFilters, min_price, max_price }) => (
  <div className='form-control'>
    <h5>price</h5>
    <p className='price'>{formatPrice(price)}</p>
    <input
      type='range'
      name='price'
      onChange={updateFilters}
      min={min_price}
      max={max_price}
      value={price}
    />
  </div>
);
