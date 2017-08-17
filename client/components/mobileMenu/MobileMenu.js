import React, { Component } from 'react';

export default class MobileMenu extends Component {
	render(){
		return(
			<div className={this.props.classes}>
				<div>
					<a>Create a skedge</a>
					<a>manage eemployees</a>
					<a>Log Out</a>
				</div>
			</div>
		);
	}
}