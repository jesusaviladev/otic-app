import axios from 'axios'
import { API_URL } from './config.js'

const getUsers = (token = null) => {

	const apiURL = `${API_URL}/users`

	const config = {
		'headers': {
			'Authorization': `Bearer ${token}`
		}
	}

	return axios.get(apiURL, config)
}

export default getUsers