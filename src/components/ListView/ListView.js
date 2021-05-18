import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from './styled';
import { formatPrice } from '../../utils/helpers';

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map(({ id, image, name, price, description }) => (
        <article key={id}>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <h5 className='price'>{formatPrice(price)}</h5>
            <p>{description.substring(0, 150)}...</p>
            <Link to={`/products/${id}`} className='btn'>
              Details
            </Link>
          </div>
        </article>
      ))}
    </Wrapper>
  );
};

export default ListView;
