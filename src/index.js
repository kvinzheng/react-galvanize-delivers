import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OrderPage from './components/OrderPage';
import data from './data/data';

console.log(data);

ReactDOM.render(
	<OrderPage
		menuItems={data.menuItems}
		orderItems={data.orderItems}
		customerInfo={data.customerInfo}
	/>,
	document.getElementById('root')
);
