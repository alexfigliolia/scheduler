import React, { Component } from 'react';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: (window.innerWidth > 799) ? (window.innerHeight - 50) + "px" : (window.innerHeight - 50) + "px" ,
			scheduleHeight: (window.innerWidth > 799) ? (window.innerHeight - 112.5) + "px" : (window.innerHeight - 87.5) + "px",
			hours: [],
			barClasses: "slot",
			month: []
		}
	}
	componentDidMount(){
		var self = this;
		window.addEventListener('resize', function(){
			self.setState({
				height: (window.innerWidth > 799) ? (window.innerHeight - 50) + "px" : (window.innerHeight - 50) + "px" ,
				scheduleHeight: (window.innerWidth > 799) ? (window.innerHeight - 112.5) + "px" : (window.innerHeight - 87.5) + "px"
			})
		});
		self.createHours(this.props.startDay, this.props.endDay);
		setTimeout(function(){
			this.setState({
				barClasses: "slot slotted"
			});
		}.bind(self), 1000);
		this.getDays(getDaysInMonth(8));
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

	handleClick(e){
		var target = (e.target.tagName === "P") ? e.target.parentNode : e.target,
			day = target.dataset.day,
			shift = target.dataset.shift;
		this.props.editShift(day, shift);
	}

	render(){
		const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
		return(
			<section className={this.props.classes} style={{height: this.state.height}}>
				<div>
					<div className="days">
						<div className="time-header"></div>
						{
							week.map((day, i) => {
								return (
									<div 
										className="day"
										data-sm={day.substring(0,3)}
										data-lg={day}
										key={i}>
									</div>
								);
							})
						}
					</div>
					<div className="schedule" style={{height: this.state.scheduleHeight}}>
						<div className="date-picker">
							<h3>Manage your schedules</h3>
							<div className="buttons">
								<button>Create</button>
								<button>Edit</button>
							</div>
							<h3>Select a date</h3>
							<div className="picker">
								<div className="month-picker">
									August
								</div>
								<div className="day-picker">
									{
										this.state.month.map((day, i) => {
											return(
												<div data-num={i + 1} key={i}>{i+1}</div>
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
							this.props.schedule.map((day, i) => {
								return(
									<div key={i} className="fullday">
										{
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
															transition: "transform 0.5s 0." + j + "s, top 0.3s 0s"
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
};