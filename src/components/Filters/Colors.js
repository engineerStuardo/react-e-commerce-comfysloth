import React from 'react';
import { FaCheck } from 'react-icons/fa';

export const Colors = ({ allColors, updateFilters, colors }) => (
  <div className='form-control'>
    <h5>colors</h5>
    <div className='colors'>
      {allColors.map((colorItem, index) => {
        if (colorItem === 'all')
          return (
            <button
              key={index}
              name='colors'
              onClick={updateFilters}
              data-color={colorItem}
              className={`${
                colorItem === colors ? 'all-btn active' : 'all-btn'
              }`}
            >
              all
            </button>
          );
        return (
          <button
            key={index}
            name='colors'
            style={{ background: colorItem }}
            className={`${
              colorItem === colors ? 'color-btn active' : 'color-btn'
            }`}
            data-color={colorItem}
            onClick={updateFilters}
          >
            {colorItem === colors ? <FaCheck /> : null}
          </button>
        );
      })}
    </div>
  </div>
);
