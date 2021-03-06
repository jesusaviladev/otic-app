import React, { useState, useEffect } from 'react'
import getUsers from '../../services/getUsers.js'
import { Field } from 'formik'

const UsersSelect = ({ token = null }) => {

	const [ users, setUsers ] = useState([])

	useEffect(() => {

		getUsers(token)
			.then(response => {

				const usersData = response.data

				setUsers(usersData)

			})
			.catch(error => console.log(error))

	}, [token])

	return (
		<div className="form__field">

			<label htmlFor="user" className="form__label">
				Asignar usuario (Opcional)
			</label>

			<Field as="select" name="user" id="user" className="form__select">

				<option defaultValue>Selecciona un usuario</option>
				{
					users.map(user => (
						<option key={user.id} value={user.id}>{`${user.name} ${user.lastName}`}</option>
						)
					)
				}

			</Field>
			

		</div>
		)
}

export default UsersSelect