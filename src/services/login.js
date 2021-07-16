import axios from 'axios'
import { API_URL } from './config.js'

const login = ({ username, password }) => {

	const apiURL = `${API_URL}/login`

	return axios.post(apiURL, {
		username,
		password
	})
	
}

export default login