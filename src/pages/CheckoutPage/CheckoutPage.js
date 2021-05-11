import React from 'react';
import { Link } from 'react-router-dom';

import { PageHero, StripeCheckout } from '../../components';
import { useCartContext } from '../../context/cart_context';
import { Wrapper } from './styled';

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        <h1>checkout here</h1>
      </Wrapper>
    </main>
  );
};

export default CheckoutPage;
