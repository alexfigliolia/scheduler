import React, { Component } from 'react';

export default class Options extends Component {
	constructor(props){
		super(props);
		this.state = {
			ays: "ays",
			sad: "sad"
		}
	}

	selectADate = () => {
		this.setState({
			sad: "sad sad-show"
		});
	}

	areYouSure = () => {
		this.setState({
			ays: "ays ays-show"
		});
	}

	deleteSkedge = () => {
		this.setState({
			ays: "ays",
			sad: "sad"
		}, this.props.deleteSkedge());
	}

	cancelDelete = () => {
		this.setState({
			ays: "ays"
		});
	}

	reset = () => {
		this.setState({
			ays: "ays",
			sad: "sad"
		}, this.props.displayOptions());
	}

	selectMondayPrompt = (e) => {
		this.setState({
			ays: "ays",
			sad: "sad"
		}, this.props.displayJustDatePicker(e));
	}

	render(){
		return(
			<div className={this.props.classes}>
				<button onClick={this.reset}></button>
				<div>
					<h3 onClick={this.selectADate}>Copy this skedge</h3>
					<h3 onClick={this.areYouSure}>Delete this skedge</h3>
				</div>
				<div className={this.state.ays}>
					<h3>Are you sure?</h3>
					<div>
						<button onClick={this.cancelDelete}>NO</button>
						<button onClick={this.deleteSkedge}>YES</button>
					</div>
				</div>
				<div className={this.state.sad}>
					<h3 onClick={this.selectMondayPrompt}>Select a monday</h3>
				</div>
			</div>
		);
	}
}