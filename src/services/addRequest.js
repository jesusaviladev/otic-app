import axios from 'axios'
import { API_URL } from './config.js'

const addRequest = (data, token) => {

	const apiURL = `${API_URL}/requests`

	const requestData = {
		title: data.title,
		deviceInfo: {
			name: data.deviceName,
			serial: data.deviceSerial,
			type: data.deviceType
		},
		personInfo: {
			name: data.personName,
			lastName: data.personLastname,
			ci: data.personCi
		}
	}

	if(data.user) requestData.assignedUser = data.user

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}


	return axios.post(apiURL, requestData, config)
}

export default addRequest