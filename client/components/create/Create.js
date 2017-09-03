import React, { Component } from 'react';

export default class Create extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectOptionsClasses: "select-options",
			selectText: "Select an employee",
			employee: "",
			color: "#666DD2"
		}
	}

	selectADude(e){
		if(this.state.selectOptionsClasses === "select-options") {
			this.setState({
				selectOptionsClasses: "select-options select-options-show"
			});
		} else {
			var dude = (e.target.className === "select-option") ? e.target.dataset.dude : "Select an employee",
				color = (e.target.className === "select-option") ? e.target.dataset.color : "#666DD2";
			this.setState({
				selectOptionsClasses: "select-options",
				selectText: dude,
				employee: dude,
				color: color
			});
		}
	}

	initFlip(){
		if(this.state.selectText !== "Select an employee") { this.props.flip() }
	}

	saveShift(){
		var on = this.refs.timeOn.value,
			off = this.refs.timeOff.value;
		if(on !== "" & off !== "") {
			this.props.saveShift(this.state.employee, this.state.color, on, off);
			this.resetState();
		}
	}

	resetState(e){
		this.refs.timeOn.value = "";
		this.refs.timeOff.value = "";
		this.setState({
			selectOptionsClasses: "select-options",
			selectText: "Select an employee",
			employee: "",
			color: "#666DD2"
		}, this.props.flip);
		if(e !== undefined) {
			e.target.tagName !== "BUTTON" && this.props.displayAddAShift();
		}
	}

	render(){
		return(
			<div className={this.props.classes}>
				<div className="front">
					<h3 style={{color: this.state.color}}>Add a shift for {this.props.day}</h3>
					<div
						style={{background: this.state.color}} 
						className="select" 
						onClick={this.selectADude.bind(this)}>{this.state.selectText}
						<div className={this.state.selectOptionsClasses}>
							{
								this.props.employees.map((dude, i) => {
									return <div
											style={{color: dude.color}} 
											key={dude.employee} 
											data-dude={dude.employee}
											data-color={dude.color}
											className="select-option">
											{dude.employee}</div>
								})
							}
						</div>
					</div>
					<button 
						onClick={this.initFlip.bind(this)}
						style={{color: this.state.color, border: "2px solid " + this.state.color}}>Set times</button>
				</div>
				<div className="back">
					<h3 style={{color: this.state.color}}>Add a times for {this.state.employee}'s shift</h3>
					<div className="bubble" style={{background: this.state.color}}>
						<input ref="timeOn" placeholder="8am" />
						<h4>To</h4>
						<input ref="timeOff" placeholder="7pm" />
					</div>
					<div className="back-buttons">
						<button 
							onClick={this.resetState.bind(this)}
							style={{color: this.state.color, border: "2px solid " + this.state.color}}>Cancel</button>
						<button 
							onClick={this.saveShift.bind(this)}
							style={{color: this.state.color, border: "2px solid " + this.state.color}}>Save</button>
					</div>
				</div>
				<svg
					onClick={this.resetState.bind(this)}
					fill={this.state.color} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
					    <path d="M0 0h24v24H0z" fill="none"/>
				</svg>
			</div>
		);
	}
}