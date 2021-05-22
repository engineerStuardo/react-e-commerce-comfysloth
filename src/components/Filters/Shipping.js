import React from 'react';

export const Shipping = ({ updateFilters, shipping }) => (
  <div className='form-control shipping'>
    <label htmlFor='shipping'>free shipping</label>
    <input
      type='checkbox'
      name='shipping'
      id='shipping'
      onChange={updateFilters}
      checked={shipping}
    />
  </div>
);
