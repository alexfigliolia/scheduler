import React, { Component } from 'react';

export default class MobileMenu extends Component {
	render(){
		return(
			<div className={this.props.classes}>
				<div>
					<a>Employees</a>
					<a>Farts</a>
					<a>Log Out</a>
				</div>
			</div>
		);
	}
}