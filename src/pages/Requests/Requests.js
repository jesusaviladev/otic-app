import React from 'react'
import DataTable from '../../components/DataTable/DataTable.js'
import Spinner from '../../components/Spinner/Spinner.js'
import useSession from '../../hooks/useSession.js'
import useRequests from '../../hooks/useRequests.js'
import './Requests.css'

const Requests = () => {

	const { token } = useSession()

	const { requests, isLoading } = useRequests({ token })

	const tableHeaders = ['Titulo', 'Usuario', 'Status', 'Fecha', 'Detalles']

	return (
	<>

		<section className="requests">

			<h1 className="requests__title">
				Solicitudes de inspección de equipos
			</h1>
			
			{
				isLoading  
				? <Spinner/> 
				: <DataTable data={requests} headers={tableHeaders}/>
			}

		</section>

	</>
		)
}

export default Requests