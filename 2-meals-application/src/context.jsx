import { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

export const AppProvider = ({ children }) => {
	const [meals, setMeals] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	const [showModal, setShowModal] = useState(false);
	const [selectedMeal, setSelectedMeal] = useState(null);
	const [favorites, setFavorites] = useState([]);

	const fetchMeals = async (url) => {
		setLoading(true);
		try {
			const { data } = await axios.get(url);
			if (data.meals) {
				setMeals(data.meals);
			} else {
				setMeals([]);
			}
		} catch (error) {
			console.log(error.response);
		}
		setLoading(false);
	};

	const fetchRandomMeal = () => {
		fetchMeals(randomMealUrl);
	};

	const selectMeal = (idMeal, favoriteMeal) => {
		let meal;
		meal = meals.find((meal) => meal.idMeal === idMeal);
		console.log(`selectMeal: ${idMeal}`);
		setSelectedMeal(meal);
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	const addToFavorites = (idMeal) => {
		const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal);
		if (alreadyFavorite) return;
		console.log(`addToFavorites: ${idMeal}`);
		const meal = meals.find((meal) => meal.idMeal === idMeal);
		const updateFavorites = [...favorites, meal];
		setFavorites(updateFavorites);
	};

	const removeFromFavorites = (idMeal) => {
		const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
		setFavorites(updatedFavorites);
	};

	useEffect(() => {
		fetchMeals(allMealsUrl);
	}, []);

	useEffect(() => {
		if (!searchTerm) return;
		fetchMeals(`${allMealsUrl}${searchTerm}`);
	}, [searchTerm]);

	return (
		<AppContext.Provider
			value={{
				loading,
				meals,
				setSearchTerm,
				fetchRandomMeal,
				showModal,
				selectedMeal,
				selectMeal,
				closeModal,
				favorites,
				addToFavorites,
				removeFromFavorites,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
