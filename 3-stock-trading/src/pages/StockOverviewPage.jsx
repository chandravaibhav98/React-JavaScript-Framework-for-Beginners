import AutoComplete from '../components/AutoComplete';
import StockList from '../components/StockList';

const StockOverviewPage = () => {
	return (
		<div>
			<h2 className='mt-5'>Stock Overview</h2>
			<AutoComplete />
			<StockList />
		</div>
	);
};

export default StockOverviewPage;
