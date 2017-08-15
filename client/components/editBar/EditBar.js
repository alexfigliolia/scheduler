import React, { Component } from "react";

export default class EditBar extends Component {
	render(){
		return(
			<div className={this.props.classes} id="editBar">
				<div>
					<h3>Edit {this.props.currentShift.employee}'s Hours for {this.props.shiftDay}</h3>
					<div style={{background: this.props.currentShift.color}}>
						<input type="text" placeholder={this.props.currentShift.times.on} />
						<h4>to</h4>
						<input type="text" placeholder={this.props.currentShift.times.off} />
					</div>
					<button style={{color: this.props.currentShift.color,
													border: "2px solid " + this.props.currentShift.color}}>Done</button>
				</div>
				<svg 
					style={{border: "2px solid " + this.props.currentShift.color}}
					onClick={this.props.editShift}
					fill={this.props.currentShift.color} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
					    <path d="M0 0h24v24H0z" fill="none"/>
					</svg>
			</div>
		);
	}
}