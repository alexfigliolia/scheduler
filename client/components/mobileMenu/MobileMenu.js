import React, { Component } from 'react';

export default class MobileMenu extends Component {
	render(){
		return(
			<div className={this.props.classes}>
				<div>
					<a onClick={this.props.createSkedge}>Create a skedge</a>
					<a>manage employees</a>
					<a>Log Out</a>
				</div>
			</div>
		);
	}
}