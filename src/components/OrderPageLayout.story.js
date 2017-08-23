import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderTableComponent from './OrderTableComponent';
import MenuComponent from './MenuComponent';
import OrderFormComponent from './OrderFormComponent';
import OrderPageLayout from './OrderPageLayout';
import NavHeaderComponent from './NavHeaderComponent';
import FooterComponent from './FooterComponent';
import data from '../data/data.JSON';

storiesOf('OrderPageLayout', module).add('Happy Path', () =>
	<OrderPageLayout>
		<NavHeaderComponent />
		<MenuComponent items={data.menuItems} />
		<OrderTableComponent items={data.orderItems} />
		<OrderFormComponent defaultCustomerInfo={data.customerInfo} />
		<FooterComponent />
	</OrderPageLayout>
);
