import React, { useContext } from 'react';
import NavLink from './NavLink';
import { isLoggedIn } from './functions';
import ToggleSidebarBtn from './dashboard/sidebar/ToggleSidebarBtn';
import AppContext from './context/AppContext';

const Navbar = () => {

	const [ store, setStore ] = useContext( AppContext );
	
	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('userName');

		setStore({
			...store,
			token: '',
			userName: ''
		})

		window.location.href = "/";
	}
	
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

			<div className="navbar-collapse collapse" id="navbarColor02">
				<ul className="navbar-nav" style={{width: '100%'}}>
					<li className="nav-item mr-auto">
						<strong>
							<NavLink to="/">React with WP</NavLink>
						</strong>
					</li>
					<li className="nav-item">
						<NavLink to="/">Home</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/blogs">Blogs</NavLink>
					</li>
					{ isLoggedIn() ? (
						<React.Fragment>
							<li className="nav-item">
								<NavLink to={ `/dashboard` }>Dashboard</NavLink>
							</li>
							<li className="nav-item">
								<button onClick={ handleLogout } className="btn btn-secondary ml-3">Logout</button>
							</li>
						</React.Fragment>
					) : (
						<li className="nav-item">
							<NavLink to="/login">Login</NavLink>
						</li>
					) }
				</ul>
			</div>
			{/* If on dashboard page */}
			{ window.location.pathname.includes( 'dashboard' ) ? (
				<ToggleSidebarBtn/>
			) : '' }
		</nav>
	);
}

export default Navbar