import React, { Component } from 'react';

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

	updateNumberShit(){
		this.getDays(getDaysInMonth(this.state.currentMonth));
		this.setState({
      mondays: getMondays(this.state.currentMonth + 1)
		});
	}

	getDays(num){
    var m = [];
    for(var i = 0; i<num; i++) {
      var d = i + 1
      m.push(d);
    }
    this.setState({
      month: m
    });
  }

	changeMonth(e){
		var dir = e.target.dataset.dir;
		var cm = this.state.currentMonth;
		if(dir === "next") {
			cm += 1;
			if(cm === 12) {
				cm = 0;
			}
		} else {
			cm -= 1;
			if(cm === -1) {
				cm = 11;
			}
		}
		this.setState({
			currentMonth: cm
		}, this.updateNumberShit);
	}

	createSkedge(e){
		var year = new Date().getUTCFullYear(),
				month = this.state.currentMonth,
				day = e.target.dataset.num;
		// console.log(month + "/" + day + "/" + year);
		this.props.createSkedge(year, month, day);
	}

	render(){
		var mondays = this.state.mondays, dates = [];
		for(var i = 0; i < mondays.length; i++) {
			dates.push(new Date(mondays[i]).getDate() - 1);
		}
		return(
			<div className={this.props.classes}>
				<h3>Choose a date</h3>
				<div className="month-picker">
					<button 
						onClick={this.changeMonth.bind(this)}
						data-dir="prev"
						className="prevMonth"></button>
					{this.months[this.state.currentMonth]}
					<button 
						onClick={this.changeMonth.bind(this)}
						data-dir="next"
						className="nextMonth"></button>
				</div>
				<div className="day-picker">
					{
						this.state.month.map((day, i) => {
							return(
								<div 
									className={(i === dates[0] || i === dates[1] || i === dates[2] || i === dates[3]) ? "date-on" : ""}
									onClick={(i === dates[0] || i === dates[1] || i === dates[2] || i === dates[3]) ? this.createSkedge.bind(this) : null}
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

var getDaysInMonth = function(month, year = 2017) {
 return new Date(year, month, 0).getDate();
}

function getMondays(month, year = 2017) {
    var d = new Date(year, month, 0),
        month = d.getMonth(),
        mondays = [];

    d.setDate(1);

    // Get the first Monday in the month
    while (d.getDay() !== 1) {
        d.setDate(d.getDate() + 1);
    }

    // Get all the other Mondays in the month
    while (d.getMonth() === month) {
        mondays.push(new Date(d.getTime()));
        d.setDate(d.getDate() + 7);
    }
    return mondays;
}