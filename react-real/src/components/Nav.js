import React, { useState } from 'react';
import { Link } from '@reach/router';
import { menuData } from '../menu-data';

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
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="text" placeholder="Search"/>
					<button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
				</form>
			</div>
		</nav>
	)
}

export default Nav;



