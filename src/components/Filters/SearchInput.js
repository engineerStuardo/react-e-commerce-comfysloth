import React from 'react';

export const SearchInput = ({ text, updateFilters }) => (
  <div className='form-control'>
    <input
      type='text'
      name='text'
      placeholder='search'
      className='search-input'
      value={text}
      onChange={updateFilters}
    />
  </div>
);
