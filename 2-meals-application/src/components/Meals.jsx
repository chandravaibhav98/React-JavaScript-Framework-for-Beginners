import { useGlobalContext } from '../context';

const Meals = () => {
	const context = useGlobalContext();
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
