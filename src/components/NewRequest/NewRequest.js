import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import useSession from '../../hooks/useSession.js'
import addRequest from '../../services/addRequest.js'
import Modal from '../../components/Modal/Modal.js'
import PageTitle from '../../components/PageTitle/PageTitle.js'
import UsersSelect from '../../components/UsersSelect/UsersSelect.js'
import * as Yup from 'yup'
import './NewRequest.css'

const NewRequest = ({ closeModal }) => {

	const { token } = useSession()

	return (
		<section className="new-request">

		<h2 className="new-request__title">Nueva solicitud</h2>

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
				
			})
			.catch(error => console.log(error))
		}}>

		{

		({touched, errors, isSubmitting}) => (

		<Form className="form">

				<fieldset className="form__fieldset">
					<legend className="form__legend">Datos de solicitud</legend>
				<div className="form__field-container">
					<div className={touched.title && errors.title ? 'form__field--error': 'form__field'}>

						<label htmlFor="title" className="form__label">
							Titulo <span className="required-label">*</span>
						</label>

						<Field
						type="text" 
						className="form__input form__input--light"
						name="title"
						id="title"
						placeholder="Titulo de la solicitud"
						/>
						<ErrorMessage 
						className="form__error" 
						name="title" 
						component='p'/>

					</div>

				<UsersSelect token={token}/>
				</div>
				</fieldset>

				<fieldset className="form__fieldset">
					<legend className="form__legend">Datos del equipo</legend>
					<div className={touched.deviceName && errors.deviceName ? 'form__field--error': 'form__field'}>

						<label htmlFor="deviceName" className="form__label">
							Nombre <span className="required-label">*</span>
						</label>

						<Field 
						type="text" 
						className="form__input form__input--light"
						name="deviceName"
						id="deviceName"
						placeholder="Nombre del equipo"
						/>
						<ErrorMessage
						className="form__error"  
						name="deviceName" 
						component='p'/>

					</div>
					<div className={touched.deviceSerial && errors.deviceSerial ? 'form__field--error': 'form__field'}>

						<label htmlFor="deviceSerial" className="form__label">
							Serial <span className="required-label">*</span>
						</label>

						<Field
						type="text" 
						className="form__input form__input--light"
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

						<p>Selecciona un tipo <span className="required-label">*</span></p>

						<Field as="select" className="form__select" name="deviceType" id="deviceType">
							<option value="escritorio">Escritorio</option>
							<option value="laptop">Laptop</option>
							<option value="movil">Móvil</option>
							<option value="otro">Otro</option>
						</Field>

						<ErrorMessage
						className="form__error"  
						name="deviceType" 
						component='p'/>

					</div>
				</fieldset>

				<fieldset className="form__fieldset grid">
					<legend className="form__legend">Datos del solicitante</legend>

					<div className="form__field-container">
						<div className={touched.personName && errors.personName ? 'form__field--error': 'form__field'}>

							<label htmlFor="personName" className="form__label">
								Nombre <span className="required-label">*</span>
							</label>

							<Field
							type="text" 
							className="form__input form__input--light"
							name="personName"
							id="personName"
							placeholder="Nombre del solicitante"
							/>
							<ErrorMessage
							className="form__error"  
							name="personName" 
							component='p'/>

						</div>
						<div className={touched.personLastname && errors.personLastname ? 'form__field--error': 'form__field'}>

							<label htmlFor="personLastname" className="form__label">
								Apellido <span className="required-label">*</span>
							</label>

							<Field
							type="text" 
							className="form__input form__input--light"
							name="personLastname"
							id="personLastname"
							placeholder="Apellido del solicitante"
							/>
							<ErrorMessage
							className="form__error"  
							name="personLastname" 
							component='p'/>

						</div>
					</div>
					<div className={touched.personCi && errors.personCi ? 'form__field--error': 'form__field'}>

						<label htmlFor="personCi" className="form__label">
							C.I. <span className="required-label">*</span>
						</label>

						<Field
						type="text" 
						className="form__input form__input--light"
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

				<div className="form__buttons">
					<button className="button button--light" type="button" onClick={closeModal}>
						Cancelar
					</button>
						<input 
					type="submit" 
					value={!isSubmitting ? 'Agregar' : 'Procesando...'} 
					className="button button--blue"
					disabled={isSubmitting}
					/>
				</div>

				</Form>
			)
			
		}
			</Formik>
				
		</section>
		)
}



export default NewRequest