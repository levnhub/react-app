import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import NavLink from "../../NavLink";
import PageMenu from './menus/PageMenu';
import PostMenu from './menus/PostMenu';

const SidebarMenu = ( props ) => {

  const [ store ] = useContext( AppContext );

  return (
    <nav id="sidebar" className={ store.sidebarActive ? 'sidebar active' : 'sidebar' }>
      <ul className="list-unstyled components">
        <PostMenu/>
        <PageMenu/>
        <NavLink to="/#">Media</NavLink>
        <NavLink to="/#">Users</NavLink>
      </ul>
    </nav>
  )
}

export default SidebarMenu
