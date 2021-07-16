import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import useSession from '../../hooks/useSession.js'
import addRequest from '../../services/addRequest.js'
import Modal from '../../components/Modal/Modal.js'
import UsersSelect from '../../components/UsersSelect/UsersSelect.js'
import * as Yup from 'yup'
import './NewRequest.css'

const NewRequest = () => {
	const [ showModal, setShowModal ] = useState(false)

	const { token } = useSession()

	const closeModal = () => setShowModal(false)

	return (
		<section className="new-request">
		
			<h1 className="new-request__title">Nueva solicitud</h1>
		<Formik 
		initialValues={{
			title:'',
			user: '',
			deviceName:'',
			deviceSerial: '',
			deviceType:'',
			personName:'',
			personLastname:'',
			personCi:''
		}}
		validationSchema= { Yup.object({
		       	title: Yup.string().required('Este campo es requerido'),
		       	user: Yup.string(),
		       	deviceName: Yup.string().required('Este campo es requerido'),
		    	deviceSerial: Yup.string().required('Este campo es requerido'),
		    	deviceType: Yup.string().required('Este campo es requerido'),
		       	personName: Yup.string().required('Este campo es requerido'),
		    	personLastname: Yup.string().required('Este campo es requerido'),
		    	personCi: Yup.string().required('Este campo es requerido')
		     })}
		onSubmit={(values) => {
			
			return addRequest(values, token)
			.then(response => {
				console.log(response)
				setShowModal(true)
			})
			.catch(error => console.log(error))
		}}>

		{

		({errors, isSubmitting}) => (

		<Form className="form">
				<fieldset>
					<legend>Datos de solicitud</legend>
					<div className="form__field">

						<label htmlFor="title" className="form__label">
							Titulo
						</label>

						<Field
						type="text" 
						className="form__input"
						name="title"
						id="title"
						placeholder="Titulo de la solicitud"
						/>
						<ErrorMessage 
						className="form__error" 
						name="title" 
						component='p'/>

					</div>

				<UsersSelect/>

				</fieldset>

				<fieldset>
					<legend>Datos del equipo</legend>
					<div className="form__field">

						<label htmlFor="deviceName" className="form__label">
							Nombre
						</label>

						<Field 
						type="text" 
						className="form__input"
						name="deviceName"
						id="deviceName"
						placeholder="Nombre del equipo"
						/>
						<ErrorMessage
						className="form__error"  
						name="deviceName" 
						component='p'/>

					</div>
					<div className="form__field">

						<label htmlFor="deviceSerial" className="form__label">
							Serial
						</label>

						<Field
						type="text" 
						className="form__input"
						name="deviceSerial"
						id="deviceSerial"
						placeholder="Serial del equipo"
						/>
						<ErrorMessage
						className="form__error"  
						name="deviceSerial" 
						component='p'/>

					</div>
					<div className="form__field">

						<p>Selecciona un tipo</p>
						<div className="new-request__radio-group" role="group">
							<label htmlFor="escritorio">
								Escritorio
								<Field
								type="radio" 
								name="deviceType"
								value="escritorio"
								id="escritorio"
								/>
							</label>

							<label htmlFor="laptop">
								Laptop
								<Field
								type="radio" 
								name="deviceType"
								value="laptop"
								id="laptop"
								/>
							</label>

							<label htmlFor="movil">
								Móvil
								<Field
								type="radio" 
								name="deviceType"
								value="movil"
								id="movil"
								/>
							</label>

							<label htmlFor="otro">
								Otro
								<Field
								type="radio" 
								name="deviceType"
								value="otro"
								id="otro"
								/>
							</label>

						</div>
						<ErrorMessage
						className="form__error"  
						name="deviceType" 
						component='p'/>

					</div>
				</fieldset>

				<fieldset>
					<legend>Datos del solicitante</legend>
					<div className="form__field">

						<label htmlFor="personName" className="form__label">
							Nombre
						</label>

						<Field
						type="text" 
						className="form__input"
						name="personName"
						id="personName"
						placeholder="Nombre del solicitante"
						/>
						<ErrorMessage
						className="form__error"  
						name="personName" 
						component='p'/>

					</div>
					<div className="form__field">

						<label htmlFor="personLastname" className="form__label">
							Apellido
						</label>

						<Field
						type="text" 
						className="form__input"
						name="personLastname"
						id="personLastname"
						placeholder="Apellido del solicitante"
						/>
						<ErrorMessage
						className="form__error"  
						name="personLastname" 
						component='p'/>

					</div>
					<div className="form__field">

						<label htmlFor="personCi" className="form__label">
							C.I.
						</label>

						<Field
						type="text" 
						className="form__input"
						name="personCi"
						id="personCi"
						placeholder="Cédula de identidad del solicitante"
						/>
						<ErrorMessage 
						className="form__error" 
						name="personCi" 
						component='p'/>

					</div>
				</fieldset>

				<input 
				type="submit" 
				value={!isSubmitting ? 'Agregar' : 'Procesando...'} 
				className="button button--purple"
				disabled={isSubmitting}
				/>

				</Form>
			)
			
		}
			</Formik>
			{showModal ? <Modal onClose={closeModal} message="Solicitud agregada correctamente"/> : null}		
		</section>
		)
}



export default NewRequest