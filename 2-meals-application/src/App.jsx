import './App.css';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';
import { useGlobalContext } from './context';

function App() {
	const { showModal } = useGlobalContext();
	return (
		<div className='App'>
			<main>
				<Search />
				{Favorites.length > 0 && <Favorites />}
				<hr />
				<Meals />
				{showModal && <Modal />}
			</main>
		</div>
	);
}

export default App;
