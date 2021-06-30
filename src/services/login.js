import axios from 'axios'

const login = ({ username, password }) => {

	const apiURL = 'https://otic-api.herokuapp.com/login'

	return axios.post(apiURL, {
		username,
		password
	})
	
}

export default login