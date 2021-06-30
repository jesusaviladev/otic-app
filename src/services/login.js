import axios from 'axios'

const login = ({ username, password }) => {

	const apiURL = 'http://localhost:3001/login'

	return axios.post(apiURL, {
		username,
		password
	})
	
}

export default login