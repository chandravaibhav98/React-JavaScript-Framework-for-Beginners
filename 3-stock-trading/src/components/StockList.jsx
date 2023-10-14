import { useState, useEffect } from 'react';
import finnHub from '../apis/finnHub';

const StockList = () => {
	const [stock, setStock] = useState();
	const [watchList, setWatchList] = useState(['GOOGL', 'MSFT', 'AMZN']);

	useEffect(() => {
		let isMounted = true;
		console.group(`StockList: fetchData`);
		const fetchData = async () => {
			try {
				const responses = await Promise.all(
					watchList.map((stock) => {
						return finnHub.get('/quote', {
							params: {
								symbol: stock,
							},
						});
					}),
				);
				console.log(responses);
				const data = responses.map((response) => {
					return { data: response.data, symbol: response.config.params.symbol };
				});
				console.log(data);
				if (isMounted) {
					setStock(data);
					console.log(stock);
				}
			} catch (error) {
				console.log(error);
			}
			console.groupEnd();
		};
		fetchData();
	}, [watchList]);
	return (
		<div>
			<h2>Stock List</h2>
		</div>
	);
};

export default StockList;
