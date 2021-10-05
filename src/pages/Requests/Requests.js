import React, { useState } from 'react'
import DataTable from '../../components/DataTable/DataTable.js'
import Spinner from '../../components/Spinner/Spinner.js'
import Modal from '../../components/Modal/Modal.js'
import NewRequest from '../../components/NewRequest/NewRequest.js'
import useSession from '../../hooks/useSession.js'
import useRequests from '../../hooks/useRequests.js'
import PageTitle from '../../components/PageTitle/PageTitle.js'
import './Requests.css'

const Requests = () => {

	const { token } = useSession()

	const { requests, isLoading } = useRequests({ token })

	const tableHeaders = ['Titulo', 'Usuario', 'Status', 'Fecha', 'Detalles']

	const [ showModal, setShowModal ] = useState(false)

	if(isLoading) return <Spinner/>

	const handleShowModal = () => setShowModal(true)

	const closeModal = () => setShowModal(false) 

	return (
	<>

		<section className="requests">

			<PageTitle content="Solicitudes"/>

			<div className="requests__container">
				<div className="requests__actions">
					<button className="button button--green" onClick={handleShowModal}>
						Nueva solicitud <i className="fas fa-plus"></i>
					</button>
				</div>

				<DataTable data={requests} headers={tableHeaders}/>
			</div>

			{
			 	showModal ? <Modal onClose={closeModal}>
			 		<NewRequest closeModal={closeModal}/>
			 	</Modal> : null
			}

		</section>

	</>
		)
}

export default Requests