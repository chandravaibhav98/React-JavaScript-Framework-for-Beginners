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

	useEffect(() => {
		fetchMeals(allMealsUrl);
	}, []);

	useEffect(() => {
		if (!searchTerm) return;
		fetchMeals(`${allMealsUrl}${searchTerm}`);
	}, [searchTerm]);

	return (
		<AppContext.Provider value={{ loading, meals, setSearchTerm, fetchRandomMeal, showModal }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
