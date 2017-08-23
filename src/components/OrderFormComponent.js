import React from 'react';
import './OrderFormComponent.story.css';

export default function OrderFormComponent({ defaultCustomerInfo }) {
	return (
		<div className="OrderFormComponent">
			<form>
				<div className="row">
					<div className="input-field">
						<i className="material-icons prefix">account_circle</i>
						<input
							id="name"
							type="text"
							className="validate"
							required
							value={defaultCustomerInfo.name}
							readOnly
						/>
						{/* <label htmlFor="name">Name</label> */}
					</div>
				</div>
				<br />
				<div className="row">
					<div className="input-field">
						<i className="material-icons prefix">phone</i>
						<input
							id="phone"
							type="tel"
							className="validate"
							required
							value={defaultCustomerInfo.phone}
							readOnly
						/>
						{/* <label htmlFor="icon_telephone">Phone Number</label> */}
					</div>
				</div>
				<br />
				<div className="row">
					<div className="input-field">
						<i className="material-icons prefix">home</i>
						<input
							id="address"
							type="text"
							className="validate"
							required
							value={defaultCustomerInfo.address}
							readOnly
						/>
						{/* <label htmlFor="address">Address</label> */}
					</div>
				</div>
				<button
					className="btn-large waves-effect waves-light light-blue"
					type="submit"
					name="action">
					Place an Order
				</button>
			</form>
		</div>
	);
}
