import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
	<nav className='navbar navbar-expand-lg navbar-dark bg-primary '>
		<div className='container-fluid'>
			<div className='navbar-brand'>Github Search</div>
			<ul className='navbar-nav flex-row'>
				<li className='nav-item m-1'>
					<Link to='/' className='nav-link'>
						Main
					</Link>
				</li>
				<li className='nav-item m-1'>
					<Link to='/about' className='nav-link'>
						About
					</Link>
				</li>
			</ul>
		</div>
	</nav>
);
