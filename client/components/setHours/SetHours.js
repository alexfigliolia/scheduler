import React, { Component } from 'react';

export default class SetHours extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMessage: false
		}
	}

	setNewHours = () => {
		const onValid = this.refs.on.value.length >= 3 && this.refs.on.value.length <= 4,
					offValid = this.refs.off.value.length >= 3 && this.refs.off.value.length <= 4;
		if(onValid && offValid) {
			this.setState({
				showMessage: false
			}, this.props.setNewHours(this.refs.on.value, this.refs.off.value));
		} else {
			this.setState({
				showMessage: true
			});
		}
	}

	close = () => {
		this.props.close();
		this.refs.on.value = "";
		this.refs.off.value = "";
		this.setState({
			showMessage: false
		});
	}

	render = () => {
		return (
			<section className={this.props.classes}>
				<button onClick={this.close}></button>
				<div>
					<h2>When does your business open and close?</h2>
					{
						this.state.showMessage &&
						<h3>Dont forget "am" & "pm"!</h3>
					}
					<div>
						<div>
							<input ref="on" type="text" maxLength="4" minLength="3" placeholder={this.props.on} />
						</div>
						to
						<div>
							<input ref="off" type="text" maxLength="4" minLength="3" placeholder={this.props.off} />
						</div>
					</div>
					<button onClick={this.setNewHours}>Set Hours</button>
				</div>
			</section>
		);
	}
}