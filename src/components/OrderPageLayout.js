import React from 'react';
import NavHeaderComponent from './NavHeaderComponent';
import FooterComponent from './FooterComponent';

export default function OrderPageLayout(props) {
	if (!props.children || !props.children[0] || !props.children[1]) return null;
	return (
		<div>
			<NavHeaderComponent />
			<div className="OrderPageLayout">
				<div className="leftColumn">
					<h3>Menu</h3>
					{props.children[0]}
				</div>
				<div className="rightColumn">
					<h3>Order</h3>
					{props.children[1]}
					{props.children[2]}
				</div>
			</div>
			<FooterComponent />
		</div>
	);
}
