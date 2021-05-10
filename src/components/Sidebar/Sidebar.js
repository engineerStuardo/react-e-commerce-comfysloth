import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

import { SidebarContainer } from './styled';
import logo from '../../assets/logo.svg';
import { useProductsContext } from '../../context/products_context';
import { links } from '../../utils/constants';
import CartButtons from '../CartButtons/CartButtons';
import { useUserContext } from '../../context/user_context';

const Sidebar = () => {
  const isOpen = true;

  return (
    <SidebarContainer>
      <aside className={`${isOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className='sidebar-header'>
          <img src={logo} alt='comfy sloth' className='logo' />
          <button className='close-btn' type='button'>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => (
            <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          ))}
          <li>
            <Link to='/checkout'>checkout</Link>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;
