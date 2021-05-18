import React from 'react';

import { Wrapper } from './styled';
import Product from '../Product/Product';

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className='products-container'>
        {products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </Wrapper>
  );
};

export default GridView;
