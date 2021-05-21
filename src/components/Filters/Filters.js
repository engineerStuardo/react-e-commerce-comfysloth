import React from 'react';

import { useFilterContext } from '../../context/custom_hooks';
import { getUniqueValues } from '../../utils/helpers';
import { Wrapper } from './styled';
import { SearchInput, Category, Company, Colors, Price } from '../Filters';

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      colors,
      price,
      min_price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const allColors = getUniqueValues(all_products, 'colors');

  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={e => e.preventDefault()}>
          <SearchInput text={text} updateFilters={updateFilters} />
          <div className='form-control'>
            <Category
              categories={categories}
              updateFilters={updateFilters}
              category={category}
            />
            <Company
              updateFilters={updateFilters}
              company={company}
              companies={companies}
            />
            <Colors
              allColors={allColors}
              updateFilters={updateFilters}
              colors={colors}
            />
          </div>
          <Price
            price={price}
            updateFilters={updateFilters}
            min_price={min_price}
            max_price={max_price}
          />
        </form>
      </div>
    </Wrapper>
  );
};

export default Filters;
