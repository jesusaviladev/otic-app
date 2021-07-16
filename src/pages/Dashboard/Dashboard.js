import React, { useState } from 'react'
import useSession from '../../hooks/useSession.js'
import Navbar from '../../components/Navbar/Navbar.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import Home from '../Home/Home.js'
import Requests from '../Requests/Requests.js'
import NewRequest from '../NewRequest/NewRequest.js'
import { Redirect, Switch, Route, useRouteMatch } from 'react-router-dom'
import './Dashboard.css'


const Dashboard = () => {

	const { token } = useSession()

	const { path } = useRouteMatch()

	const [ showMenu, setShowMenu ] = useState()

	const toggleMenu = () => {
	 
		if(window.innerWidth < 1024) setShowMenu(!showMenu)
	}


	if(!token) return <Redirect to="/"/>

	return (
		<>
			<Navbar toggleMenu={toggleMenu}/>

			<main className="main">

				<Sidebar isActive={showMenu} toggleMenu={toggleMenu}/>

				<Switch>

						<Route exact path={path} component={Home}/>

						<Route exact path={`${path}/requests`} component={Requests}/>

						<Route exact path={`${path}/requests/new`} component={NewRequest}/>

				</Switch>

			</main>
		</>
		)
}

export default Dashboard