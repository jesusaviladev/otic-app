import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({ children, onClose, message }) => {


	return ReactDOM.createPortal(

		<div className="modal" onClick={onClose}>
			<div className="modal__container">
				<button className="modal__button">
					<i className="fas fa-times" onClick={onClose}></i>
				</button>
				<p className="modal__message">{message}</p>
				{ children }
			</div>
		</div>

		, document.getElementById('modal'))
}

export default Modal