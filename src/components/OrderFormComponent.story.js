import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderFormComponent from './OrderFormComponent';

let customerInfo = {
	name: 'Nestor Toro',
	phone: '(650) 533-8676',
	address: '123 Main Street, Oakland, CA'
};

storiesOf('OrderFormComponent', module).add('Happy Path', () =>
	<OrderFormComponent defaultCustomerInfo={customerInfo} />
);
