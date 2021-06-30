import React from 'react'
import { Redirect } from 'wouter'
import useSession from '../../hooks/useSession.js'
import './Dashboard.css'

const Dashboard = () => {

	const { token } = useSession()

	if(!token) return <Redirect to="/"/>

	return (
		<h1>Dashboard</h1>
		)
}

export default Dashboard