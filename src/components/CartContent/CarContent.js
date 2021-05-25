import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from './styled';
import { useCartContext } from '../../context/custom_hooks';
import CartColumns from '../CartColumns/CartColumns';
import CartItem from '../CartItem/CartItem';
import CartTotals from '../CartTotals/CartTotals';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper className='section section-center'>
      <CartColumns />
      {cart.map(item => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <div className='link-container'>
        <Link to='/products' className='link-btn'>
          continue shopping
        </Link>
        <button
          type='button'
          className='link-btn clear-btn'
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};

export default CartContent;
