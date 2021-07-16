import React, { useState } from 'react'
import useSession from '../../hooks/useSession.js'
import './Navbar.css'

const Navbar = ({ toggleMenu }) => {

	const { logout } = useSession()

	const [ dropdown, setDropdown ] = useState(false)

	const toggleDropdown = () => {
		setDropdown(!dropdown)
	}

	const dropdownClass = dropdown ? 
	'dropdown dropdown--toggle' : 
	'dropdown'

	const rotateClass = dropdown ? 
	'menu-navbar__icon rotate' :
	'menu-navbar__icon'

	return (
		<div className="menu-navbar">
			<div className="menu-navbar__icon toggle" onClick={toggleMenu}>
				<i className="fas fa-bars"></i>
			</div>

			<div className="menu-navbar__icons">
				
				<span className="menu-navbar__icon">
					<i className="fas fa-bell"></i>
				</span>

				<span className="menu-navbar__icon">
					<i className="fas fa-cog"></i>
				</span>
				
				<span className={rotateClass} onClick={toggleDropdown}>
					<i className="fas fa-sort-down"></i>
				</span>

				<ul className={dropdownClass}>
					<li className="dropdown__item">
						<a href="/" className="dropdown__link">Mi usuario</a>
					</li>
					<li className="dropdown__item">
						<a href="/" className="dropdown__link">Opciones</a>
					</li>
					<li className="dropdown__item">
						<button 
						className="dropdown__button" 
						onClick={logout}>Cerrar sesión</button>
					</li>
				</ul>
			</div>

		</div>
		)
}

export default Navbar