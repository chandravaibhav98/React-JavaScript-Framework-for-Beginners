import './App.css';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';

function App() {
	return (
		<div className='App'>
			<main>
				<h1>Meals / Recipes</h1>
				<hr />
				{/* <Search />
				<Favorites />
				<Modal /> */}
				<Meals />
			</main>
		</div>
	);
}

export default App;
