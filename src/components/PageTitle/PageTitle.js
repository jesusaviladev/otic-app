import React from 'react'
import './PageTitle.css'

const PageTitle = ({ content }) => {



	return (

		<header className="header">
		
			<h1 className="header__title">
				{content}
			</h1>	

		</header>


		) 
}

export default React.memo(PageTitle)