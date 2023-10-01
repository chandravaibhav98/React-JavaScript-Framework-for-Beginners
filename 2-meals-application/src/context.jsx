import React, { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

export const AppProvider = ({ children }) => {
	const [meals, setMeals] = useState([]);

	const fetchMeals = async (url) => {
		try {
			const { data } = await axios.get(url);
			setMeals(data.meals);
		} catch (e) {
			console.log(e.response);
		}
	};

	useEffect(() => {
		fetchMeals(allMealsUrl);
	}, []);

	return <AppContext.Provider value={{ meals }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
	console.log(AppContext);
	return useContext(AppContext);
};
