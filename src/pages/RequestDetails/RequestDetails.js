import React from 'react'
import { useParams } from 'react-router-dom'
import './RequestDetails.css'

const RequestDetails = () => {

	const { id } = useParams()

	

	return (

		<section className="request-details">
			
			<h1 className="request-details__title">Detalles de solicitud</h1>

			<article className="request-card">

				<h2>Titulo de solicitud</h2>
				Nombre
				Fecha
				Usuario
				Status
				
			</article>

		</section>

		)
}

export default RequestDetails