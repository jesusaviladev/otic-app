import { useState, useEffect } from 'react'
import getRequests from '../services/getRequests.js'

const useRequests = ({ token = null }) => {

	const [ requests, setRequests ] = useState([])
	const [ isLoading, setIsLoading ] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		getRequests(token)
			.then(response => {
				const { data } = response
				console.log(data)
				setRequests(data)
				setIsLoading(false)
			})
			.catch(error => {
				console.log(error)
				setIsLoading(false)
			})

		return () => {
			console.log('cleanup')		
		}


	}, [token])

	return {
		requests,
		isLoading
	}
}

export default useRequests