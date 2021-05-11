import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Wrapper } from './styled';
import { useProductsContext } from '../../context/custom_hooks';
import { useCartContext } from '../../context/custom_hooks';
import { useUserContext } from '../../context/custom_hooks';

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();

  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        Cart{' '}
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>12</span>
        </span>
      </Link>
      <button type='button' className='auth-btn'>
        Login
        <FaUserPlus />
      </button>
    </Wrapper>
  );
};

export default CartButtons;
