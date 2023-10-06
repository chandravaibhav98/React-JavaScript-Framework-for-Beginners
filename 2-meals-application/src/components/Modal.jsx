import React from 'react';
import { useGlobalContext } from '../context';

const Modal = () => {
	return (
		<main>
			<aside className='modal-overlay'>
				<div className='modal-container'>
					<h4>Modal</h4>
				</div>
			</aside>
		</main>
	);
};

export default Modal;
