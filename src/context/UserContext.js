import React, { useState } from 'react'

const UserContext = React.createContext({ default: 'default context' })

export const UserContextProvider = (props) => {

	const [ token, setToken ] = useState(
		() => window.sessionStorage.getItem('token') || null)

	return (
		<UserContext.Provider value={{ token, setToken }}>
			{props.children}
		</UserContext.Provider>
		)
}

export default UserContext


