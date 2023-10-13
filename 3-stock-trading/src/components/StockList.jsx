import { useState, useEffect } from 'react';
import finnHub from '../apis/finnHub';

const StockList = () => {
	const [watchList, setWatchList] = useState(['GOOGL', 'MSFT', 'AMZN']);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await finnHub.get(
					'/quote?symbol=MSFT&token=ckke501r01qnn8pdtjugckke501r01qnn8pdtjv0',
				);
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
	return (
		<div>
			<h2>Stock List</h2>
		</div>
	);
};

export default StockList;
