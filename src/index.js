import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OrderPage from './components/OrderPage';
import data from './data/data';

let orderItems = [
	{
		name: "Archer's Burger",
		price: 8.99,
		imagePath: '/img/burger.jpg',
		id: 1,
		quantity: 0
	},
	{
		name: 'The 3.14',
		price: 11.99,
		imagePath: '/img/pizza.jpg',
		id: 2,
		quantity: 0
	},
	{
		name: 'Babe',
		price: 14.99,
		imagePath: '/img/ribs.jpg',
		id: 3,
		quantity: 0
	},
	{
		name: 'I Scream',
		price: 7.99,
		imagePath: '/img/ice_cream.jpg',
		id: 4,
		quantity: 0
	}
];

function handleAddItem(itemId) {
	orderItems.forEach(item => (item.id === itemId ? item.quantity++ : false));
	render();
}

function render() {
	ReactDOM.render(
		<OrderPage
			menuItems={data.menuItems}
			orderItems={orderItems}
			customerInfo={data.customerInfo}
			onAddItem={handleAddItem}
		/>,
		document.getElementById('root')
	);
}

render();
