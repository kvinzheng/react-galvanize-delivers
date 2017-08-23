import React from 'react';

export default function FooterComponent() {
	return (
		<footer className="col s12 page-footer light-blue">
			<div className="container">
				<div className="row">
					<div className="col l6 s12">
						<h5 className="white-text">Galvanize Delivers</h5>
						<p className="grey-text text-lighten-4">Fine Dining, Delivered.</p>
					</div>
					<div className="col l3 s12">
						<ul>
							<li>
								<a className="white-text" href="index.html">
									Home
								</a>
							</li>
							<li>
								<a className="white-text" href="order.html">
									Order Delivery
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				<div className="container">&copy;2017 Galvanize Delivers</div>
			</div>
		</footer>
	);
}
