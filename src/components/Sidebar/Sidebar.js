import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = ({ isActive, toggleMenu }) => {

	const { url } = useRouteMatch()

	const menuClass = !isActive ? 'menu-sidebar' : 'menu-sidebar menu--show' 

	return (
		<nav className={menuClass} onClick={toggleMenu}>
			<div className="menu-sidebar__logo">OTIC</div>
			<ul className="menu-sidebar__list">
				<li className="menu-sidebar__item">
					<NavLink exact to={`${url}`} className="menu-sidebar__link">
						<span className="menu-sidebar__icon">
							<i className="fas fa-home"></i>
						</span>
						Inicio
					</NavLink>
				</li>
				<li className="menu-sidebar__item">
					<NavLink exact to={`${url}/requests`} className="menu-sidebar__link">
						<span className="menu-sidebar__icon">
							<i className="far fa-file"></i>
						</span>
						Solicitudes
					</NavLink>
				</li>
				<li className="menu-sidebar__item">
					<NavLink exact to="" className="menu-sidebar__link">
						<span className="menu-sidebar__icon">
							<i className="far fa-clipboard"></i>
						</span>
						Reportes
					</NavLink>
				</li>
				<li className="menu-sidebar__item">
					<NavLink exact to="" className="menu-sidebar__link">
						<span className="menu-sidebar__icon">
							<i className="fas fa-paste"></i>
						</span>
						Nuevo reporte
					</NavLink>
				</li>
			</ul>
		</nav>
		)
}

export default React.memo(Sidebar)