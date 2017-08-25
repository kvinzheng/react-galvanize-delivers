import React from 'react';
import OrderPageLayout from './OrderPageLayout';
import OrderTableComponent from './OrderTableComponent';
import MenuComponent from './MenuComponent';
import OrderFormComponent from './OrderFormComponent';

export default function OrderPage({ menuItems, orderItems, customerInfo, onAddItem }) {
	return (
		<OrderPageLayout>
			<MenuComponent items={menuItems} onAddItem={onAddItem} />
			<OrderTableComponent items={orderItems} />
			<OrderFormComponent defaultCustomerInfo={customerInfo} />
		</OrderPageLayout>
	);
}
