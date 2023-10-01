import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';

const Search = () => {
	const { search } = useGlobalContext();
	console.log(search);

	const [text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<main>
			<h2>Search</h2>
			<div className='search-container'>
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
		</main>
	);
};

export default Search;
