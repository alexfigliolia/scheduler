import React, { Component } from 'react';
import Burger from './burger/Burger.js';

export default class Header extends Component {
	render(){
		return(
			<header className="header">
				<div>
					<h1>Skedge</h1>
					<Burger classes={this.props.burgerStuff} burger={this.props.burger}/>
					<nav>
						<a onClick={this.props.showAddEmployee}>Employees</a>
						<a onClick={this.props.dJDP}>Create a skedge</a>
						<a>Log Out</a>
					</nav>
				</div>
			</header>
		);
	}
}