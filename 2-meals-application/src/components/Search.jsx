import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';

const Search = () => {
	const context = useGlobalContext();
	const [text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<main>
			<div className='search-container'>
				<h2>Search</h2>
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
						type='button'>
						Randomize
					</button>
				</form>
			</div>
			<hr />
		</main>
	);
};

export default Search;
