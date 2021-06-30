import React, { useContext } from 'react'
import UserContext from '../../context/UserContext.js'
import { Redirect } from 'wouter'
import './Dashboard.css'

const Dashboard = () => {

	const { token, setToken } = useContext(UserContext)

	if(!token) return <Redirect to="/"/>

	return (
		<h1>Dashboard</h1>
		)
}

export default Dashboard