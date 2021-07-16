import axios from 'axios'
import { API_URL } from './config.js'

const getRequests = (token = null) => {

	const config = {
		'headers': {
			'Authorization': `Bearer ${token}`
		}
	}

	return axios.get(`${API_URL}/requests`, config)
}

export default getRequests