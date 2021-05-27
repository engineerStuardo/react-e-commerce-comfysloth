import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Wrapper } from './styled';
import { useProductsContext } from '../../context/custom_hooks';
import { useCartContext } from '../../context/custom_hooks';
import { useUserContext } from '../../context/custom_hooks';

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        Cart{' '}
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      {!myUser ? (
        <button type='button' className='auth-btn' onClick={loginWithRedirect}>
          Login
          <FaUserPlus />
        </button>
      ) : (
        <button
          type='button'
          className='auth-btn'
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout
          <FaUserMinus />
        </button>
      )}
    </Wrapper>
  );
};

export default CartButtons;
