import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

import { SidebarContainer } from './styled';
import logo from '../../assets/logo.svg';
import { useProductsContext } from '../../context/custom_hooks';
import { links } from '../../utils/constants';
import CartButtons from '../CartButtons/CartButtons';
import { useUserContext } from '../../context/custom_hooks';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <img src={logo} alt='comfy sloth' className='logo' />
          <button className='close-btn' type='button' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => (
            <li key={id}>
              <Link to={url} onClick={closeSidebar}>
                {text}
              </Link>
            </li>
          ))}
          <li>
            <Link to='/checkout' onClick={closeSidebar}>
              checkout
            </Link>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;
