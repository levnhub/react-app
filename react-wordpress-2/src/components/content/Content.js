import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Navbar from "../Navbar";

const Content = ( props ) => {

  const [ store ] = useContext( AppContext );

  return(
    <div id="content" className={ store.sidebarActive ? 'content active' : 'content' }>
      {/* Top Navbar */}
      <Navbar />
      {/* Main Content */}
      <div className="main-content">
        { props.children }
      </div>
    </div>
  )
};

export default Content;