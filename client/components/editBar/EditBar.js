import React, { Component } from "react";

export default class EditBar extends Component {
	render(){
		return(
			<div className={this.props.classes} id="editBar">
				<div>
					<h3>Edit {this.props.currentShift.employee}'s Hours</h3>
					<div style={{background: this.props.currentShift.color}}>
						<input type="text" placeholder={this.props.currentShift.times.on} />
						<h4>to</h4>
						<input type="text" placeholder={this.props.currentShift.times.off} />
					</div>
					<button style={{color: this.props.currentShift.color,
													border: "2px solid " + this.props.currentShift.color}}>Done</button>
				</div>
				<button style={{ background: this.props.currentShift.color + " url('cross.svg') no-repeat center", backgroundSize: "65% 65%" }} onClick={this.props.editShift}></button>
			</div>
		);
	}
}