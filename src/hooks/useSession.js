import { useContext, useState } from 'react'
import UserContext from '../context/UserContext.js'

const useSession = () => {
	//componente para gestionar la sesion del usuario

	const { token, setToken } = useContext(UserContext)

	const [isLoginLoading, setIsLoginLoading] = useState(false)
	const [loginError, setLoginError] = useState(false)

	return {
		token,
		setToken,
		isLoginLoading,
		setIsLoginLoading,
		loginError,
		setLoginError
	}
}

export default useSession