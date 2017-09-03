import React, { Component } from 'react';

export default class MySkedges extends Component {
	render(){
		const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		return(
			<div className={this.props.classes}>
				<div>
					<button onClick={this.props.hideSkedgeList}></button>
					<h2>My Skeges</h2>
					<div>
						{
							(this.props.schedules.length > 0) ?
							this.props.schedules.map((skedge, i) => {
								var d1 = new Date(skedge.schedule[0].for),
										d2 = new Date(d1.getTime() + 6 * 24 * 60 * 60 * 1000),
										month1 = d1.getMonth(),
										month2 = d2.getMonth(),
										date1 = d1.getDate(),
										date2 = d2.getDate();
								return (
									<div 
										onClick={this.props.pickSkedge}
										key={i} 
										data-index={i}
										className='skedge'>
										{"Monday " + months[month1] + " " + date1 + " - " + months[month2] + " " + date2}
									</div>
								);
							})
							: <div>Create your first skedge!</div>
						}
					</div>
				</div>
			</div>
		);
	}
}