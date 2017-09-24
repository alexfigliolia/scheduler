import React, { Component } from 'react';

export default class ManageEmployees extends Component {
	constructor(props){
		super(props);
		this.state = {
			employee: "",
			color: "",
			firstScreenClasses: "manage-screen1",
			pickColorClasses: "pick-color",
			editScreenClasses: "edit-screen",
			editingEmployee: "Selected",
			editingColor: "#000",
			editingIndex: null,
			showForm: false
		}
	}

	addEmployee = () => {
		if(this.state.employee !== "") {
			this.setState({
				firstScreenClasses: "manage-screen1 manage-screen1-move",
				pickColorClasses: "pick-color pick-color-show"
			});
		}
	}

	selectAColor = (e) => {
		const color = e.target.dataset.color;
		if(this.state.employee !== "") {
			this.setState({
				firstScreenClasses: "manage-screen1",
				pickColorClasses: "pick-color",
				color: color
			}, this.clearAndSend(color));
		} else {
			let name = this.state.editingEmployee,
					index = this.state.editingIndex;
			this.props.updateColor(name, color, index);
			this.setState({
				firstScreenClasses: "manage-screen1",
				pickColorClasses: "pick-color",
				editingColor: color,
				editScreenClasses: "edit-screen editing-screen-show"
			});
		}
	}

	clearAndSend = (color) => {
		this.props.addEmployee(this.state.employee, color)
		this.setState({
			color: "",
			employee: ""
		});
	}

	handleChange = (e) => {
		this.setState({
			employee: e.target.value
		});
	}

	employeeClicked = (e) => {
		let name = (e.target.tagName === "DIV") ? e.target.dataset.name : e.target.parentNode.dataset.name,
				color = (e.target.tagName === "DIV") ? e.target.dataset.color : e.target.parentNode.dataset.color,
				index = (e.target.tagName === "DIV") ? e.target.dataset.index : e.target.parentNode.dataset.index;
		this.setState({
			editingEmployee: name,
			editingColor: color,
			editingIndex: index,
			editScreenClasses: "edit-screen edit-screen-show"
		});
	}

	editClose = () => {
		this.setState({
			editScreenClasses: "edit-screen",
			showForm: false
		});
	}

	nameChangeFocus = () => {
		this.setState({
			editScreenClasses: "edit-screen edit-screen-show edit-focused"
		});
	}

	nameChangeBlur = (e) => {
		if(e.target.value === ""){
			this.setState({
				editScreenClasses: "edit-screen edit-screen-show"
			});
		}
	}

	showForm = () => {
		this.setState({
			showForm: true
		});
	}

	cancelUpdateName = () => {
		this.refs.updateName.value = "";
		this.setState({
			showForm: false
		});
	}

	updateName = () => {
		if(this.refs.updateName.value !== "") {
			const newName = this.refs.updateName.value,
						oldName = this.state.editingEmployee,
						index = this.state.editingIndex;
			this.props.updateName(newName, oldName, index);
			this.setState({
				editScreenClasses: "edit-screen editing-screen-show",
				showForm: false
			});
			this.refs.updateName.value = "";
		}
	}

	viewColors = () => {
		this.setState({
			editScreenClasses: "edit-screen"
		});
		setTimeout(() => {
			this.setState({
				firstScreenClasses: "manage-screen1 manage-screen1-move",
				pickColorClasses: "pick-color pick-color-show"
			});
		}, 300)
	}

	removeEmployee = () => {
		this.setState({
			editScreenClasses: "edit-screen"
		}, this.props.removeEmployee(this.state.editingEmployee));
	}

	render = () => {
		return(
			<div className={this.props.classes}>
				<div className={this.state.firstScreenClasses}>
					<button onClick={this.props.showAddEmployee}>
					</button>
					<h2>Manage your Employees</h2>
					<div>
						{
							this.props.employees.map((employee, i) => {
								return(
									<div 
										onClick={this.employeeClicked}
										style={{background: employee.color,
												transitionDelay: (this.state.firstScreenClasses === "manage-screen1") ? 
												(0.9 + (i/10)) + "s" : (0.1 + (i/10)) + "s"}}
										className="employee"
										key={i}
										data-name={employee.employee}
										data-color={employee.color}
										data-index={i}>
										<h3>{employee.employee}</h3>
									</div>
								);
							})
						}
					</div>
					<div>
						<input 
							onChange={this.handleChange}
							type="text" 
							placeholder="Employee"
							value={this.state.employee} />
						<button onClick={this.addEmployee}>
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
											data-color={color}
											onClick={this.selectAColor}
											style={{background: color,
															transitionDelay: (this.state.pickColorClasses === "pick-color") ? 
																							 (i/50) + "s" : (0.9 + (i/20)) + "s"}}
											className="color"></div>
									);
								})
							}
						</div>
					</div>
				</div>
				<div className={this.state.editScreenClasses}>
					<div>
						<button onClick={this.editClose}>
							<svg fill={this.state.editingColor} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
							    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
							    <path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</button>
						<h2 
							style={{
								color: this.state.editingColor
							}}>Edit {this.state.editingEmployee}</h2>
						<div>
							{
								this.state.showForm && 
									<label 
										style={{color: this.state.editingColor}}
										htmlFor="nameChange">Edit Name</label>
							}
							{
								this.state.showForm &&
									<input 
										ref="updateName"
										style={{borderBottom: "2px solid" + this.state.editingColor, color: this.state.editingColor}}	
										onFocus={this.nameChangeFocus}
										onBlur={this.nameChangeBlur}
										type="text"
										id="nameChange" />
							}
							<div className="update-name-buttons">
								{
									this.state.showForm &&
										<button
											onClick={this.cancelUpdateName}
											style={{
												color: this.state.editingColor,
												border: "2px solid " + this.state.editingColor
											}}>Cancel</button>
								}
								{
									this.state.showForm &&
										<button
											onClick={this.updateName}
											style={{
												color: this.state.editingColor,
												border: "2px solid " + this.state.editingColor
											}}>Update Name</button>
								}
							</div>
							{
								!this.state.showForm && 
									<button
										onClick={this.showForm}
										style={{
											color: this.state.editingColor,
											border: "2px solid " + this.state.editingColor
										}}>Edit Name</button>
							}
							{
								!this.state.showForm &&
								<button
									onClick={this.viewColors}
									style={{
										color: this.state.editingColor,
										border: "2px solid " + this.state.editingColor
									}}>Change Color</button>
							}
							{
								!this.state.showForm &&
								<button
									onClick={this.removeEmployee}
									style={{
										color: this.state.editingColor,
										border: "2px solid " + this.state.editingColor
									}}>Remove</button>
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}