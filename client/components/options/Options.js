import React, { Component } from 'react';

export default class Options extends Component {
	constructor(props){
		super(props);
		this.state = {
			ays: "ays",
			sad: "sad"
		}
	}

	selectADate(){
		this.setState({
			sad: "sad sad-show"
		});
		this.props.copySkedge();
	}

	areYouSure(){
		this.setState({
			ays: "ays ays-show"
		});
	}

	deleteSkedge(){
		this.setState({
			ays: "ays",
			sad: "sad"
		});
		this.props.deleteSkedge();
	}

	cancelDelete(){
		this.setState({
			ays: "ays"
		});
	}

	reset(){
		this.setState({
			ays: "ays",
			sad: "sad"
		});
		this.props.displayOptions();
	}

	render(){
		return(
			<div className={this.props.classes}>
				<button onClick={this.reset.bind(this)}></button>
				<div>
					<h3 onClick={this.selectADate.bind(this)}>Copy this skedge</h3>
					<h3 onClick={this.areYouSure.bind(this)}>Delete this skedge</h3>
				</div>
				<div className={this.state.ays}>
					<h3>Are you sure?</h3>
					<div>
						<button onClick={this.cancelDelete.bind(this)}>NO</button>
						<button onClick={this.deleteSkedge.bind(this)}>YES</button>
					</div>
				</div>
				<div className={this.state.sad}>
					<h3 onClick={this.props.displaySmallDatePicker}>Select a monday</h3>
				</div>
			</div>
		);
	}
}