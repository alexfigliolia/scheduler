import React, { Component } from "react";

export default class EditBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			timeOn: "",
			timeOff: ""
		}
		this.week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			timeOn: nextProps.currentShift.times.on,
			timeOff: nextProps.currentShift.times.off,
		});
	}

	editShift = () => {
		const on = this.refs.timeOn.value,
				  off = this.refs.timeOff.value,
				  day = this.week.indexOf(this.props.shiftDay);
		this.props.editShift(on, off, day);
	}

	timeOnChange = (e) => {
		this.setState({
			timeOn: e.target.value
		});
	}

	timeOffChange = (e) => {
		this.setState({
			timeOff: e.target.value
		});
	}

	render = () => {
		return(
			<div className={this.props.classes} id="editBar">
				<div>
					<h3 style={{color: this.props.currentShift.color}}>Edit or remove {this.props.currentShift.employee}'s Hours for {this.props.shiftDay}</h3>
					<div className="bubble" style={{background: this.props.currentShift.color}}>
						<input 
							onChange={this.timeOnChange}
							ref="timeOn" 
							type="text" 
							value={this.state.timeOn} />
						<h4>to</h4>
						<input 
							onChange={this.timeOffChange}
							ref="timeOff" 
							type="text" 
							value={this.state.timeOff} />
					</div>
					<div className="buttons">
						<button
							onClick={this.props.removeShift}
							style={{color: this.props.currentShift.color,
									border: "2px solid " + this.props.currentShift.color}}>Remove</button>
						<button 
							onClick={this.editShift.bind(this)}
							style={{color: this.props.currentShift.color,
									border: "2px solid " + this.props.currentShift.color}}>Update</button>
					</div>
				</div>
				<svg
					onClick={this.props.displayEditShift}
					fill={this.props.currentShift.color} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
					    <path d="M0 0h24v24H0z" fill="none"/>
					</svg>
			</div>
		);
	}
}