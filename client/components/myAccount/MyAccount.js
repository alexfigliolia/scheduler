import React, { Component } from 'react';

export default class MyAccount extends Component {
	render = () => {
		return (
			<section className={this.props.classes}>
				<div>
					<a onClick={this.props.displayEditPayment}>Edit Payment Info</a>
					<a onClick={this.props.deleteAccount}>Remove Account</a>
					<a onClick={this.props.logout}>Log Out</a>
				</div>
			</section> 
		);
	}
}