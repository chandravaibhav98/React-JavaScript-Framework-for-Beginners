import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import StockOverviewPage from './pages/StockOverviewPage';
import StockDetailPage from './pages/StockDetailPage';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<StockOverviewPage />}
					/>
					<Route
						path='/detail/:symbol'
						element={<StockDetailPage />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
