import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import update from 'immutability-helper';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import './App.scss';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			burgerClasses: "hamburglar is-open",
			burgerToggle: true,
      height: (window.innerHeight - 50) + "px",
      startDay: 8,
      endDay: 7,
      schedule: 
      [
        [
          {
            employee: "Name", 
            times: {
              on: "10am",
              off: "4pm"
            }
          },
          {
            employee: "Farts", 
            times: {
              on: "8am",
              off: "7pm"
            }
          }
        ],
        [
          {
            employee: "Name", 
            times: {
              on: "9am",
              off: "4pm"
            }
          }
        ],
        [
          {
            employee: "Name", 
            times: {
              on: "10am",
              off: "4pm"
            }
          }
        ],
        [
          {
            employee: "Name", 
            times: {
              on: "8am",
              off: "4pm"
            }
          }
        ],
        [
          {
            employee: "Name", 
            times: {
              on: "12pm",
              off: "4pm"
            }
          }
        ],
        [
          {
            employee: "Name", 
            times: {
              on: "4pm",
              off: "7pm"
            }
          }
        ],
        [
          {
            employee: "Name", 
            times: {
              on: "10am",
              off: "4pm"
            }
          }
        ],
      ]
		}
	}

  componentWillMount(){
    var self = this;
    window.addEventListener('resize', function(){
      self.setState({
        height: (window.innerHeight - 50) + "px"
      })
    });
  }

	//MOBILE MENU OPEN AND CLOSE
  toggleBurger(){
    this.setState((prevState, prevProps) => {
      return {
        burgerToggle : !prevState.burgerToggle,
        burgerClasses : (prevState.burgerClasses === "hamburglar is-closed") ? 
                          "hamburglar is-open" : 
                          "hamburglar is-closed",
        // menuClasses : (prevState.menuClasses === "mobile-menu") ? 
        //                   "mobile-menu mobile-menu-show" : 
        //                   "mobile-menu",
        // dashboardClasses : (prevState.dashboardClasses === "dashboard") ? 
        //                   "dashboard dashboard-move-left" : 
        //                   "dashboard",
        // newPropertyFormClasses : (!prevState.burgerToggle) ? 
        //                   "new-property-form" : 
        //                   prevState.newPropertyFormClasses,
        // propertyPageClasses: (prevState.menuClasses === "mobile-menu") ?
        //                   prevState.propertyPageClasses + " property-page-shift" :
        //                   prevState.propertyPageClasses.replace("property-page-shift", "")
      }
    });
  }

	render(){
		return (
			<div className="App" style={{height: this.state.height}}>

				<Header
					burgerStuff={this.state.burgerClasses}
					burger={this.toggleBurger.bind(this)} />

        <Dashboard
          schedule={this.state.schedule}
          startDay={this.state.startDay}
          endDay={this.state.endDay} />

			</div>
		);
	}
}