import React, { Component } from 'react';

export default class MobileMenu extends Component {
	render = () => {
		return(
			<div className={this.props.classes}>
				<div>
					<a onClick={this.props.displayPicker}>Create a skedge</a>
					<a onClick={this.props.showAddEmployee}>Manage Employees</a>
					<a onClick={this.props.showList}>My Skedges</a>
					<a onClick={this.props.accountStuff}>My Account</a>
				</div>
				<div className="account-related">
					<button onClick={this.props.accountStuff}></button>
					<a onClick={this.props.displayEditPayment}>Edit Payment Info</a>
					<a onClick={this.props.deleteAccount}>Remove Account</a>
					<a onClick={this.props.logout}>Log Out</a>
				</div>
			</div>
		);
	}
}