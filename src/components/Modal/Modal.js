import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({ children, onClose }) => {


	return ReactDOM.createPortal(

		<div className="modal">
			<div className="modal__container">
				<button className="modal__button">
					<i className="fas fa-times" onClick={onClose}></i>
				</button>					
				{ children }
			</div>
		</div>

		, document.getElementById('modal'))
}

export default Modal