import React from 'react';
import MenuItemComponent from './MenuItemComponent';

export default function MenuComponent({ items, onAddItem }) {
	return (
		<div className="MenuComponent">
			{items.map(item => <MenuItemComponent key={item.id} item={item} onClick={onAddItem} />)}
		</div>
	);
}
