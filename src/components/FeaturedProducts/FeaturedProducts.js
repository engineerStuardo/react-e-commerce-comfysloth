import React from 'react';

import { Wrapper } from './styled';
import { useProductsContext } from '../../context/custom_hooks';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {featured.slice(0, 3).map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </Wrapper>
  );
};

export default FeaturedProducts;
