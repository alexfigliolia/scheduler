import React, { Component } from 'react';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: (window.innerHeight - 50) + "px",
			scheduleHeight: (window.innerHeight - 130) + "px",
			hours: [],
			barClasses: "slot",
			colors: ["#48CBC3", "#D463C5", "#E2C83C"]
		}
	}
	componentDidMount(){
		var self = this;
		window.addEventListener('resize', function(){
			self.setState({
				height: (window.innerHeight - 50) + "px",
				scheduleHeight: (window.innerHeight - 130) + "px"
			})
		});
		self.createHours(this.props.startDay, this.props.endDay);
		setTimeout(function(){
			this.setState({
				barClasses: "slot slotted"
			});
		}.bind(self), 1000)
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

	render(){
		const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
		return(
			<section className={this.props.classes} style={{height: this.state.height}}>
				<div>
					<div className="select-week">
						<h2>Current Week</h2>
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
										key={i}>
									</div>
								);
							})
						}
					</div>
					<div className="schedule" style={{height: this.state.scheduleHeight}}>
						<div className="times">
							{
								this.state.hours.map((hour, i) => {
									return (
										<div 
											key={(hour > 12) ? (hour - 12) + "pm" : hour + "am"} 
											className="time">
											<div>{(hour > 12) ? (hour - 12) + "pm" : hour + "am"}</div>
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
												console.log(80 / day.length + "%");
												return (
													<div 
														key={j} 
														className={this.state.barClasses} 
														style={{
															top: this.calcDif(this.props.startDay, parseInt(slot.times.on.substring( 0, slot.times.on.length-2 ))) * (100 / this.state.hours.length) + "%",
															height: this.calcDif(parseInt(slot.times.on.substring( 0, slot.times.on.length-2 )), parseInt(slot.times.off.substring( 0, slot.times.on.length-2 ))) * (100 / this.state.hours.length) + "%",
															width: 80 / day.length + "%",
															left: ((80 / day.length) * j) + 10 + "%",
															background: this.state.colors[j],
															transition: "transform 0.5s 0." + j + "s"
														}}>
														<p>{slot.employee}</p>
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