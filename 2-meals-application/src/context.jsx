import { useState, createContext, useContext, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	useEffect(() => {
		const fetchData = async () => {
			console.group('fetchData');
			try {
				const response = await fetch('https://randomuser.me/api/');
				const data = await response.json();
				console.info(data);
			} catch (error) {
				console.error(error);
			}
			console.groupEnd();
		};
		fetchData();
	}, []);

	return (
		<AppContext.Provider value={{ name: 'Vaibhav', role: 'Student' }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	console.log(AppContext);
	return useContext(AppContext);
};
