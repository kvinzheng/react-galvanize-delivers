import React from 'react';
import './OrderTableComponent.story.css';

export default function OrderTableComponent({ items }) {
	let subtotal = items.reduce(function(sum, value) {
		return sum + value.quantity * value.price;
	}, 0);
	let tax = subtotal * 0.075;
	return (
		<div className="OrderTableComponent">
			<table className="striped">
				<thead>
					<tr>
						<th>Item</th>
						<th>Qty</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody id="order">
					{items.map(
						item =>
							item.quantity
								? <tr key={item.id}>
										<td>
											{item.name}
										</td>
										<td>
											{item.quantity}
										</td>
										<td>
											{`$${item.quantity * item.price}`}
										</td>
									</tr>
								: <tr key={item.id} />
					)}
				</tbody>
			</table>
			<br />

			<table>
				<tbody>
					<tr>
						<td>Subtotal</td>
						<td>
							{`$${subtotal.toFixed(2)}`}
						</td>
					</tr>
					<tr>
						<td>Tax</td>
						<td>
							{`$${tax.toFixed(2)}`}
						</td>
					</tr>
					<tr>
						<td>Total</td>
						<td>
							{`$${(subtotal + tax).toFixed(2)}`}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
