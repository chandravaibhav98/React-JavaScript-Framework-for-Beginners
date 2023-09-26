import React, { createContext, useContext } from 'react';
import { useGlobalContext } from '../context';

const Meals = () => {
	const context = useGlobalContext();
	console.log(context);
	return (
		<main>
			<div>
				<h2>Meals</h2>
			</div>
			<hr />
		</main>
	);
};

export default Meals;
