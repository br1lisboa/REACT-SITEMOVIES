//Libraries
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<nav className='bg-slate-600'>
				<ul className='flex items-center justify-around text-white w-full py-4'>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/listado'>Listado</Link></li>
					<li><Link to='/listado'>Contacto</Link></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;