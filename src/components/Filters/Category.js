import React from 'react';

export const Category = ({ categories, updateFilters, category }) => (
  <div className='form-control'>
    <h5>category</h5>
    <div>
      {categories.map((categoryItem, index) => (
        <button
          key={index}
          onClick={updateFilters}
          name='category'
          type='button'
          className={`${
            categoryItem.toLowerCase() === category ? 'active' : null
          }`}
        >
          {categoryItem}
        </button>
      ))}
    </div>
  </div>
);
