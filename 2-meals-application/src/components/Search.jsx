import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';

const Search = () => {
	// const { search } = useGlobalContext();
	// console.log(search);

	const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

	const [text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text) {
			setSearchTerm(text);
			// setText('');
		}
	};

	const handleRandomMeal = () => {
		setSearchTerm('');
		// setText('');
		fetchRandomMeal();
	};

	return (
		<main>
			<h4>Search</h4>
			<section className='search-container'>
				<form onSubmit={handleSubmit}>
					<input
						className='form-input'
						type='text'
						placeholder='Meal'
						onChange={handleChange}
						value={text}
					/>
					<button
						className='btn'
						type='submit'>
						Search
					</button>
					<button
						className='btn btn-hipster'
						type='button'
						onClick={handleRandomMeal}>
						Randomize
					</button>
				</form>
			</section>
		</main>
	);
};

export default Search;
