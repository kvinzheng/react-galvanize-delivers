import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderTableComponent from './OrderTableComponent';

let orderItems = [
	{
		name: "Archer's Burger",
		quantity: 3,
		price: 8.99,
		productId: 1
	},
	{
		name: 'The 3.14',
		quantity: 2,
		price: 11.99,
		productId: 2
	},
	{
		name: 'Babe',
		quantity: 1,
		price: 14.99,
		productId: 3
	},
	{
		name: 'I Scream',
		quantity: 4,
		price: 7.99,
		productId: 4
	}
];

storiesOf('OrderTableComponent', module).add('Happy Path', () =>
	<OrderTableComponent items={orderItems} />
);
