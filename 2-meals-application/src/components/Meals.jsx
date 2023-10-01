import { useGlobalContext } from '../context';

const Meals = () => {
	const { meals } = useGlobalContext();

	return (
		<div>
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
						/>
						<footer>
							<h5>{title}</h5>
							<button className='like-btn'>click me</button>
						</footer>
					</article>
				);
			})}
		</div>
	);
};

export default Meals;
