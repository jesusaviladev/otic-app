import { useContext, useState, useCallback } from 'react'
import UserContext from '../context/UserContext.js'
import login from '../services/login.js'
import { useHistory } from 'react-router-dom'

const useSession = () => {
	//hook para gestionar la sesion del usuario

	const { push } = useHistory()
	//recuperamos token del contexto
	const { token, setToken } = useContext(UserContext)

	const [isLoginLoading, setIsLoginLoading] = useState(false)
	const [loginError, setLoginError] = useState(false)

	const logUser = useCallback(( { user, password } ) => {

		setIsLoginLoading(true)

		login({ username: user, password: password })
			.then(response => {

				setIsLoginLoading(false)

				const { token } = response.data

				setToken(token)

				window.sessionStorage.setItem('token', token)

				push('/dashboard')


			})
			.catch(error => {
				console.log(error)

				setIsLoginLoading(false)
				setLoginError(true)
			})

	}, [push, setToken])


	const logout = useCallback(() => {

		setToken(null)
		window.sessionStorage.removeItem('token')
		push('/')

	}, [push, setToken])

	return {
		token,
		logUser,
		logout,
		isLoginLoading,
		loginError
	}
}

export default useSession