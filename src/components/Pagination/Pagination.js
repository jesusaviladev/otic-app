import React from 'react'
import './Pagination.css'

const Pagination = () => {
	
	return (

		<nav className="pagination">
			<p className="pagination__text">
				Mostrando 10 de 25 resultados
			</p>

			<ul className="pagination__list">
				<li className="pagination__item">
					<a className="pagination__prev" href="http://google.com">Anterior</a>
				</li>
				<li className="pagination__item">
					<a className="pagination__link selected" href="http://google.com">1</a>
				</li>
				<li className="pagination__item">
					<a className="pagination__link" href="http://google.com">2</a>
				</li>
				<li className="pagination__item">
					<a className="pagination__link" href="http://google.com">3</a>
				</li>
				<li className="pagination__item">
					<a className="pagination__next" href="http://google.com">Siguiente</a>
				</li>
			</ul>
		</nav>

		)
}

export default Pagination