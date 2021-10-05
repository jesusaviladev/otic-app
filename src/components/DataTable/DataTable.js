import React from 'react'
import Pagination from '../Pagination/Pagination.js'
import './DataTable.css'

const DataTable = ({data = [], headers = []}) => {

	return (
		<>
			
			<table className="table">
				<thead>
					<tr className="table__head">
						<th className="table__heading"><input type="checkbox" className="checkbox"/></th>
						{
							headers.map((heading) => (
								<th
								className="table__heading" 
								key={heading}>{heading}
								</th>))
						}
					</tr>
				</thead>
				<tbody>
					{
						data.map(( field )=> {
							
							return (
							<tr className="table__row" key={field._id}>
								<td className="table__cell"><input type="checkbox" className="checkbox"/></td>
								<td className="table__cell">{field.title}</td>
								<td className="table__cell">{field.assignedUser ? `${field.assignedUser.name} ${field.assignedUser.lastName}` : 'Sin usuario'}</td>
								<td className="table__cell">{field.status}</td>
								<td className="table__cell">{field.date}</td>
								<td className="table__cell"><a href={`http://localhost:3000/dashboard/requests/${field._id}`}>Ver detalles</a></td>
							</tr>

							) 
						} )
					}
				</tbody>
			</table>
			<Pagination/>
		</>
		)
}

export default React.memo(DataTable)