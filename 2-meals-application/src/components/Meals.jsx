import { useGlobalContext } from '../context';
import { BsHandThumbsUp } from 'react-icons/bs';

const Meals = () => {
	const { loading, meals, selectMeal } = useGlobalContext();
	console.log(meals);

	if (loading) {
		return (
			<section className='section'>
				<h4>Loading...</h4>
			</section>
		);
	}
	if (meals.length < 1) {
		return (
			<section className='section'>
				<h4>No Meals matched your search. Please try again.</h4>
			</section>
		);
	}

	return (
		<section className='section-center'>
			{meals.map((singleMeal) => {
				const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
				return (
					<article
						key={idMeal}
						className='single-meal'>
						<img
							src={image}
							alt='no-img'
							style={{ width: '200px' }}
							className='img'
							onClick={() => selectMeal(idMeal)}
						/>
						<footer>
							<h5>{title}</h5>
							<button
								className='like-btn'
								onClick={() => addToFavorites(idMeal)}>
								<BsHandThumbsUp />
							</button>
						</footer>
					</article>
				);
			})}
		</section>
	);
};

export default Meals;
