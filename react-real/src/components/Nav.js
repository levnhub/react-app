import React, { useState } from 'react';
import { Link } from '@reach/router';
import { menuData } from '../menu-data';
import Search from './Search';

const Nav = () => {

	const [isSidebarOpen, setSidebarOpen] = useState(false);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">Home</Link>
			<button className="navbar-toggler" type="button" onClick={ () => setSidebarOpen( ! isSidebarOpen ) } style={{ width: '45px' }}>
				{ isSidebarOpen ? (
					<i className="fas fa-times"></i>
				) : (
					<i className="fas fa-bars"></i>		
				) }
			</button>

			<div className={ `collapse navbar-collapse ${ isSidebarOpen ? 'show' : '' }` } id="navbarColor02">
				{ menuData.length && (
					<ul className="navbar-nav mr-auto">
						{ menuData.map( item => (
							<li key={ item.label } className="nav-item">
								<Link className="nav-link" to={ item.url }>{ item.label }</Link>
							</li>
						) ) }
					</ul>
				) }
				<Search/>
			</div>
		</nav>
	)
}

export default Nav;



