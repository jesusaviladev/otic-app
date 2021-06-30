import React, { useState } from 'react'
import Spinner from '../Spinner/Spinner.js'
import { useLocation } from 'wouter'
import login from '../../services/login.js'
import useSession from '../../hooks/useSession.js'
import './Login.css'

const Login = () => {

	const [ , navigateTo ] = useLocation()

	const { 
		setToken,
		isLoginLoading,
		setIsLoginLoading, 
		loginError,
		setLoginError
	  } = useSession()

	//estados del formulario
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')

	const handleUser = (e) => {
		setUser(e.target.value)
	}

	const handlePassword = (e) => {
		setPassword(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		setIsLoginLoading(true)

		login({ username: user, password: password })
			.then(response => {

				setIsLoginLoading(false)

				const { token } = response.data

				setToken(token)

				navigateTo('/dashboard')

				window.sessionStorage.setItem('token', token)

			})
			.catch(error => {
				console.log(error)

				setIsLoginLoading(false)
				setLoginError(true)
			})
	}

	if(isLoginLoading) return <div className="login"><Spinner/></div>

	const fieldClass = loginError ? 'form__field--error' : 'form__field'

	return (
		<>
			<div className="login">
				<div className="login__icon">
					<i className="far fa-user"></i>
				</div>
				<h2 className="login__title">Inicia sesión</h2>
				{loginError ? <p className="login__error"> Usuario o contraseña inválidos</p> : null}
				<form className="form" onSubmit={handleSubmit}>
					<div className={fieldClass}>
						<label htmlFor="username" 
						className="form__label">Nombre de usuario</label>
						<input 
						type="text" 
						className="form__input" 
						name="username" 
						id="username"
						placeholder="Usuario"
						onChange={handleUser}
						/>
					</div>

					<div className={fieldClass}>
						<label htmlFor="password"
						className="form__label">Contraseña</label>
						<input 
						type="password" 
						className="form__input" 
						name="password" 
						id="password"
						placeholder="Contraseña"
						onChange={handlePassword}
						/>
					</div>

					<input type="submit" 
					value="Ingresar" 
					className="button button--purple"/>
				</form>
			</div>
		</>
		)
}

export default Login