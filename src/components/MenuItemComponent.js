import React from 'react';

export default function MenuItemComponent({ item }) {
	if (!item) return null;
	return (
		<div className="card MenuItemComponent">
			<div className="card-image">
				<img src={item.imagePath || '//via.placeholder.com/300x200'} alt={item.name} />
			</div>
			<div className="card-content">
				<h5 className="card-title">
					{item.name || `Name Unavailable`}
				</h5>
				<p>
					{item.price && typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : `N/A`}
				</p>
			</div>
			<div className="card-action">
				<a href="#">ADD TO ORDER</a>
			</div>
		</div>
	);
}
