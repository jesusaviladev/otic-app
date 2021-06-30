import React from 'react'
import './LandingPage.css'
import banner from './membrete.png'
import Login from '../../components/Login/Login.js'

const LandingPage = () => {

	return (
		<>
			<header className="main-header">
				
				<div className="main-header__banner">

				<img src={banner} alt="ME banner" className="main-header__image"/>
					
				</div>

				<h1 className="main-header__title">
					Oficina de Tecnología, Información y Comunicación
				</h1>

				<h2 className="main-header__subtitle">
				Universidad Politécnica Territorial "José Félix Ribas"</h2>
				
			</header>

			<main className="main-page">
				<Login/>
			</main>
		</>
		)
}

export default LandingPage