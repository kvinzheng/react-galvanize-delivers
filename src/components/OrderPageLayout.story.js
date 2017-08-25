import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderTableComponent from './OrderTableComponent';
import MenuComponent from './MenuComponent';
import OrderFormComponent from './OrderFormComponent';
import OrderPageLayout from './OrderPageLayout';
import data from '../data/data';

storiesOf('OrderPageLayout', module).add('Happy Path', () =>
	<OrderPageLayout>
		<MenuComponent items={data.menuItems} />
		<OrderTableComponent items={data.orderItems} />
		<OrderFormComponent defaultCustomerInfo={data.customerInfo} />
	</OrderPageLayout>
);
