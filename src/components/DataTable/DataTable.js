import React from 'react'
import './DataTable.css'

const DataTable = ({data = [], headers = []}) => {

	return (
		<>
			<table className="table">
				<thead>
					<tr className="table__head">
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
							<tr key={field._id}>
								<td className="table__cell">{field.title}</td>
								<td className="table__cell">{field.assignedUser || 'Sin usuario'}</td>
								<td className="table__cell">{field.status}</td>
								<td className="table__cell">{field.date}</td>
								<td className="table__cell"><a href="http://google.com">Ver detalles</a></td>
							</tr>

							) 
						} )
					}
				</tbody>
			</table>
		</>
		)
}

export default React.memo(DataTable)