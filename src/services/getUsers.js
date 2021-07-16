import axios from 'axios'
import { API_URL } from './config.js'

const getUsers = () => {

	const apiURL = `${API_URL}/users`

	return axios.get(apiURL)
}

export default getUsers