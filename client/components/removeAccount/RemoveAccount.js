import React, { Component } from 'react';

export default class removeAccount extends Component {
	render = () => {
		return (
			<section className={this.props.classes}>
				<div>
					<h2>Are you sure?</h2>
					<p>This will permenantly delete your account as well as your skedges. It will not be possible to retreive them!</p>
					<div>
						<button onClick={this.props.cancel}>Cancel</button>
						<button onClick={this.props.deleteAccount}>Remove Account</button>
					</div>
				</div>
			</section>
		);
	}
}