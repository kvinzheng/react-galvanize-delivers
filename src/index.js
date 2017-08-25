import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OrderPage from './components/OrderPage';
import data from './data/data';

function handleAddItem(itemId) {
	data.menuItems.forEach(item => (item.id === itemId ? item.quantity++ : false));
	render();
}

function render() {
	ReactDOM.render(
		<OrderPage
			menuItems={data.menuItems}
			orderItems={data.menuItems}
			customerInfo={data.customerInfo}
			onAddItem={handleAddItem}
		/>,
		document.getElementById('root')
	);
}

render();
