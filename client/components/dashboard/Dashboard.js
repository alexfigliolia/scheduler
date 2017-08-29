import React, { Component } from 'react';
import DatePicker from '../datePicker/DatePicker';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: (window.innerWidth > 799) ? (window.innerHeight - 50) + "px" : (window.innerHeight - 50) + "px" ,
			scheduleHeight: (window.innerWidth > 799) ? (window.innerHeight - 167.5) + "px" : (window.innerHeight - 127.5) + "px",
			hours: [],
			barClasses: "slot",
			month: [],
			currentMonth: new Date().getMonth(),
			mondays: []
		}
		this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	}

	componentDidMount(){
		var self = this;
		window.addEventListener('resize', function(){
			self.setState({
				height: (window.innerWidth > 799) ? (window.innerHeight - 50) + "px" : (window.innerHeight - 50) + "px" ,
				scheduleHeight: (window.innerWidth > 799) ? (window.innerHeight - 167.5) + "px" : (window.innerHeight - 127.5) + "px"
			})
		});
		self.createHours(this.props.startDay, this.props.endDay);
		this.updateNumberShit();
		setTimeout(function(){
			this.setState({
				barClasses: "slot slotted"
			});
		}.bind(self), 1000);
	}

	createHours(start, end){
		var hours = []
		var stop = end + 12;
		for(var i = start; i<stop; i++) {
			hours.push(i);
		}
		this.setState({
			hours: hours
		});
	}

	calcDif(start, end){
		var hours = []
		var stop = end + 13;
		for(var i = start; i<stop; i++) {
			hours.push(i);
		}
		return (hours[hours.length - 1] - hours[0] >= 12) ? (hours[hours.length - 1] - hours[0]) - 12 : hours[hours.length - 1] - hours[0] ;
	}

	updateNumberShit(){
		this.getDays(getDaysInMonth(this.state.currentMonth + 1));
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

	handleClick(e){
		var target = (e.target.tagName === "P") ? e.target.parentNode : e.target,
			day = target.dataset.day,
			shift = target.dataset.shift;
		this.props.editShift(day, shift);
	}

	createSkedge(e){
		var year = new Date().getUTCFullYear(),
				month = this.state.currentMonth,
				day = e.target.dataset.num;
		this.props.createSkedge(year, month, day);
	}

	render(){
		const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
		const forDate = (this.props.schedule !== undefined) ? new Date(this.props.schedule[0].for) : false;
		const mondays = this.state.mondays;
		let dates = [];
		for(var i = 0; i < mondays.length; i++) {
			dates.push(new Date(mondays[i]).getDate() - 1);
		}
		return(
			<section className={this.props.classes} style={{height: this.state.height}}>
				<div>
					<div className="skedge-date">
						<button
							style={{opacity: (this.props.idx === 0 || this.props.skedgeNumber === 0) ? 0.25 : 1}}
							data-dir="prev"
							onClick={this.props.renderSkedge} 
							className="prev-skedge"></button>

						{(!forDate) ? "Create a schedule" : "Monday " + this.months[forDate.getMonth()] + " " + forDate.getDate() + " - " + this.months[new Date(forDate.getTime() + 6 * 24 * 60 * 60 * 1000).getMonth()] + " " + new Date(forDate.getTime() + 6 * 24 * 60 * 60 * 1000).getDate()}

						<button
							style={{opacity: (this.props.idx === this.props.skedgeNumber - 1 || this.props.skedgeNumber === 0) ? 0.25 : 1}}
							data-dir="next" 
							onClick={this.props.renderSkedge}
							className="next-skedge"></button>
					</div>
					<div className="days">
						<div className="time-header"></div>
						{
							week.map((day, i) => {
								return (
									<div 
										className="day"
										data-sm={day.substring(0,3)}
										data-lg={day}
										key={i}
										onClick={this.props.displayAddAShift}>
									</div>
								);
							})
						}
					</div>
					<div className="schedule" style={{height: this.state.scheduleHeight}}>
						<div className={this.props.datePickerClasses}>
							<button onClick={this.props.hideDrawer}></button>
							<h3>To create a new schedule select a Monday</h3>
							<div className="picker" id="pickerLarge">
								<div className="month-picker">
									<button
										onClick={this.changeMonth.bind(this)}
										data-dir="prev"></button>

										{this.months[this.state.currentMonth]}

									<button
										onClick={this.changeMonth.bind(this)}
										data-dir="next"></button>
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
						</div>
						<div className="times" style={{height: this.state.scheduleHeight}}>
							{
								this.state.hours.map((hour, i) => {
									return (
										<div 
											key={(hour >= 12) ? (hour - 12 === 0) ? hour + "pm" : (hour - 12) + "pm": hour + "am"} 
											className="time">
											<div>{(hour >= 12) ? (hour - 12 === 0) ? hour + "pm" : (hour - 12) + "pm": hour + "am"} </div>
										</div>
									);
								})
							}
						</div>
						{
							this.props.schedule !== undefined ? 
							this.props.schedule.map((day, i) => {
								if(i > 0) {
									return(
										<div key={i} className="fullday">
											{
												day.length > 0 &&
												day.map((slot, j) => {
													return (
														<div 
															onClick={this.handleClick.bind(this)}
															key={j} 
															className={this.state.barClasses} 
															style={{
																top: this.calcDif(this.props.startDay, parseInt(slot.times.on.substring( 0, slot.times.on.length-2 ))) * (100 / this.state.hours.length) + "%",
																height: this.calcDif(parseInt(slot.times.on.substring( 0, slot.times.on.length-2 )), parseInt(slot.times.off.substring( 0, slot.times.on.length-2 ))) * (100 / this.state.hours.length) + "%",
																width: 80 / day.length + "%",
																left: ((80 / day.length) * j) + 10 + "%",
																background: slot.color,
																transition: "transform 0.5s 0." + j + "s, top 0.3s 0s, height 0.3s 0s"
															}}
															data-day={i}
															data-shift={j}>
															<p>{slot.times.on}</p>
															<p>{slot.employee}</p>
															<p>{slot.times.off}</p>
														</div>
													);
												})
											}
										</div>
									);
								}
							})
							: week.map((day, i) => {
								return (
									<div key={i} className="fullday"></div>
								);
							})
						}
					</div>
				</div>
			</section>
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

function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}
