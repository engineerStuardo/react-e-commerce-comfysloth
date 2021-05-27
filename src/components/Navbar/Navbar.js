import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { NavContainer } from './styled';
import { links } from '../../utils/constants';
import CartButtons from '../CartButtons/CartButtons';
import { useProductsContext } from '../../context/custom_hooks';
import { useUserContext } from '../../context/custom_hooks';

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='comfy sloth' />
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map(({ id, text, url }) => (
            <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          ))}
          {myUser && (
            <li>
              <Link to='/checkout'>checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

export default Nav;
