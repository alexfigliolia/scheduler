import React, { Component } from 'react';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: (window.innerHeight - 50) + "px",
			scheduleHeight: (window.innerHeight - 130) + "px",
			hours: []
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
		return(
			<section className="dashboard" style={{height: this.state.height}}>
				<div>
					<div className="select-week">
						<h2>Current Week</h2>
					</div>
					<div className="days">
						<div className="time-header"></div>
						<div className="day" data-sm="Mon" data-lg="Monday"></div>
						<div className="day" data-sm="Tue" data-lg="Tuesday"></div>
						<div className="day" data-sm="Wed" data-lg="Wednesday"></div>
						<div className="day" data-sm="Thu" data-lg="Thursday"></div>
						<div className="day selected" data-sm="Fri" data-lg="Friday"></div>
						<div className="day" data-sm="Sat" data-lg="Saturday"></div>
						<div className="day" data-sm="Sun" data-lg="Sunday"></div>
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
														className="slot" 
														style={{
															top: this.calcDif(this.props.startDay, parseInt(slot.times.on.substring( 0, slot.times.on.length-2 ))) * (100 / this.state.hours.length) + "%",
															height: this.calcDif(parseInt(slot.times.on.substring( 0, slot.times.on.length-2 )), parseInt(slot.times.off.substring( 0, slot.times.on.length-2 ))) * (100 / this.state.hours.length) + "%"
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