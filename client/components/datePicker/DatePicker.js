import React, { Component } from 'react';
import { getDaysInMonth, getMondays } from '../../../helpers/helpers';

export default class DatePicker extends Component {
	constructor(props){
		super(props);
		this.state = {
			month: [],
			currentMonth: new Date().getMonth(),
			mondays: []
		}
		this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	}

	componentDidMount(){
		this.updateNumberShit();
	}

	updateNumberShit = () => {
		this.getDays(getDaysInMonth(this.state.currentMonth + 1));
		this.setState({
	  		mondays: getMondays(this.state.currentMonth + 1)
		});
	}

	getDays = (num) =>{
	    let m = [];
	    for(let i = 0; i<num; i++) {
	      let d = i + 1
	      m.push(d);
	    }
	    this.setState({
	      month: m
	    });
	 }

	changeMonth = (e) => {
		const dir = e.target.dataset.dir;
		let cm = this.state.currentMonth;
		if(dir === "next") {
			cm += 1;
			if(cm > 11) {
				cm = 0;
			}
		} else {
			cm -= 1;
			if(cm < 0) {
				cm = 11;
			}
		}
		this.setState({
			currentMonth: cm
		}, this.updateNumberShit);
	}

	createSkedge = (e) => {
		let year = new Date().getUTCFullYear(),
				month = this.state.currentMonth,
				day = e.target.dataset.num;
		// console.log(month + "/" + day + "/" + year);
		this.props.createSkedge(year, month, day);
	}

	render = () => {
		let mondays = this.state.mondays, dates = [];
		for(let i = 0; i < mondays.length; i++) {
			dates.push(new Date(mondays[i]).getDate() - 1);
		}
		return(
			<div className={this.props.classes}>
				<h3>Choose a date</h3>
				<div className="month-picker">
					<button 
						onClick={this.changeMonth}
						data-dir="prev"
						className="prevMonth"></button>
					{this.months[this.state.currentMonth]}
					<button 
						onClick={this.changeMonth}
						data-dir="next"
						className="nextMonth"></button>
				</div>
				<div className="day-picker">
					{
						this.state.month.map((day, i) => {
							return(
								<div 
									className={(i === dates[0] || i === dates[1] || i === dates[2] || i === dates[3]) ? "date-on" : ""}
									onClick={(i === dates[0] || i === dates[1] || i === dates[2] || i === dates[3]) ? this.createSkedge : null}
									data-num={i + 1} 
									key={i}>
										{i+1}
								</div>
							);
						})
					}
				</div>
			</div>
		);
	}
}