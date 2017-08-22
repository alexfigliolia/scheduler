import React, { Component } from 'react';

export default class ManageEmployees extends Component {
	constructor(props){
		super(props);
		this.state = {
			employee: "",
			firstScreenClasses: "manage-screen1",
			pickColorClasses: "pick-color"
		}
	}

	addEmployee(){
		this.setState({
			firstScreenClasses: "manage-screen1 manage-screen1-move",
			pickColorClasses: "pick-color pick-color-show"
		});
	}

	selectAColor(){
		this.setState({
			firstScreenClasses: "manage-screen1",
			pickColorClasses: "pick-color"
		});
	}

	handleChange(e){
		this.setState({
			employee: e.target.value
		});
	}

	render(){
		return(
			<div className={this.props.classes}>
				<div className={this.state.firstScreenClasses}>
					<h2>Manage your Employees</h2>
					<div>
						{
							this.props.employees.map((employee, i) => {
								return(
									<div 
										style={{background: employee.color,
														transitionDelay: (0.1 + (i/10)) + "s"}}
										className="employee"
										key={i}>
										<h3>{employee.employee}</h3>
									</div>
								);
							})
						}
					</div>
					<div>
						<input 
							onChange={this.handleChange.bind(this)}
							type="text" 
							placeholder="Employee"
							value={this.state.employee} />
						<button onClick={this.addEmployee.bind(this)}>
							<img src="add.svg" />
						</button>
					</div>
				</div>
				<div className={this.state.pickColorClasses}>
					<div>
						<h2>Pick a color!</h2>
						<div className="colors">
							{
								this.props.colors.map((color, i) => {
									return (
										<div 
											key={i}
											onClick={this.selectAColor.bind(this)}
											style={{background: color,
															transitionDelay: (0.9 + (i/20)) + "s"}}
											className="color"></div>
									);
								})
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}