import React from 'react';
import { useGlobalContext } from '../context';

const Modal = () => {
	const { selectedMeal, closeModal } = useGlobalContext();
	const {
		strMealThumb: image,
		strMeal: title,
		strInstructions: text,
		strSource: source,
	} = selectedMeal;

	return (
		<main>
			<aside className='modal-overlay'>
				<div className='modal-container'>
					<img
						src={image}
						className='img modal-img'
					/>
					<div className='modal-content'>
						<h4>{title}</h4>
						<p>Cooking Instructions</p>
						<p>{text}</p>
						<a
							href={source}
							target='_blank'
							rel='noreferrer'>
							Original Source
						</a>
						<button
							className='btn btn-hipster close-btn'
							onClick={closeModal}>
							Back
						</button>
					</div>
				</div>
			</aside>
		</main>
	);
};

export default Modal;
