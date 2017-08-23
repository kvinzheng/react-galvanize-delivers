import React from 'react';

export default function NavHeaderComponent() {
	return (
		<div className="navbar-fixed">
			<nav className="light-blue">
				<a href="index.html" className="brand-logo" style={{ paddingLeft: 15 + 'px' }}>
					Galvanize Delivers
				</a>
				<a href="#" data-activates="mobile-demo" className="button-collapse">
					<i className="material-icons">menu</i>
				</a>
				<ul className="right hide-on-med-and-down">
					<li className="active">
						<a className="white-text" href="order.html">
							Order Delivery
						</a>
					</li>
				</ul>
				{/* <!--nav on mobile--> */}
				<ul className="side-nav light-blue" id="mobile-demo">
					<li>
						<a className="active" href="order.html">
							Order Delivery
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
