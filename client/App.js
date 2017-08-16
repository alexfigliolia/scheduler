import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import update from 'immutability-helper';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import MobileMenu from './components/mobileMenu/MobileMenu';
import EditBar from './components/editBar/EditBar';
import './App.scss';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			burgerClasses: "hamburglar is-open",
			burgerToggle: true,
      dashboardClasses: "dashboard",
      menuClasses: "mobile-menu",
      editBarClasses: "edit-bar",
      height: window.innerHeight + "px",
      startDay: 8,
      endDay: 7,
      schedule: 
      [
        [
          {
            employee: "Alex", 
            times: {
              on: "10am",
              off: "4pm"
            },
            color: "#48CBC3"
          },
          {
            employee: "Steve", 
            times: {
              on: "8am",
              off: "7pm"
            },
            color: "#EB7CDA"
          },
          {
            employee: "Larry", 
            times: {
              on: "10am",
              off: "7pm"
            },
            color: "#7D78D4"
          }
        ],
        [
          {
            employee: "Steve", 
            times: {
              on: "8am",
              off: "5pm"
            },
            color: "#EB7CDA"
          },
          {
            employee: "Alex", 
            times: {
              on: "9am",
              off: "4pm"
            },
            color: "#48CBC3"
          },
          {
            employee: "Larry", 
            times: {
              on: "3pm",
              off: "7pm"
            },
            color: "#7D78D4"
          }
        ],
        [
          {
            employee: "Alex", 
            times: {
              on: "10am",
              off: "4pm"
            },
            color: "#48CBC3"
          },
          {
            employee: "Steve", 
            times: {
              on: "8am",
              off: "7pm"
            },
            color: "#EB7CDA"
          },
          {
            employee: "Larry", 
            times: {
              on: "12pm",
              off: "6pm"
            },
            color: "#7D78D4"
          }
        ],
        [
          {
            employee: "Alex", 
            times: {
              on: "8am",
              off: "4pm"
            },
            color: "#48CBC3"
          },
          {
            employee: "Steve", 
            times: {
              on: "8am",
              off: "3pm"
            },
            color: "#EB7CDA"
          },
          {
            employee: "Larry", 
            times: {
              on: "12pm",
              off: "7pm"
            },
            color: "#7D78D4"
          }
        ],
        [
          {
            employee: "Alex", 
            times: {
              on: "12pm",
              off: "4pm"
            },
            color: "#48CBC3"
          },
          {
            employee: "Steve", 
            times: {
              on: "12pm",
              off: "4pm"
            },
            color: "#EB7CDA"
          },
          {
            employee: "Larry", 
            times: {
              on: "8am",
              off: "7pm"
            },
            color: "#7D78D4"
          }
        ],
        [
          {
            employee: "Alex", 
            times: {
              on: "8am",
              off: "7pm"
            },
            color: "#48CBC3"
          },
          {
            employee: "Steve", 
            times: {
              on: "12pm",
              off: "7pm"
            },
            color: "#EB7CDA"
          },
          {
            employee: "Larry", 
            times: {
              on: "3pm",
              off: "7pm"
            },
            color: "#7D78D4"
          }
        ],
        [
          {
            employee: "Steve", 
            times: {
              on: "12pm",
              off: "7pm"
            },
            color: "#EB7CDA"
          },
          {
            employee: "Alex", 
            times: {
              on: "10am",
              off: "4pm"
            },
            color: "#48CBC3"
          },
          {
            employee: "Larry", 
            times: {
              on: "8am",
              off: "4pm"
            },
            color: "#7D78D4"
          }
        ],
      ],
      currentShift: {
        employee: "Alex", 
        times: {
          on: "10am",
          off: "4pm"
        },
        color: "#48CBC3"
      },
      currentShiftDay: "Monday"
		}
    this.week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	}

  componentWillMount(){
    var self = this;
    window.addEventListener('resize', function(){
      self.setState({
        height: window.innerHeight + "px"
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
        dashboardClasses : (prevState.dashboardClasses === "dashboard") ? 
                          "dashboard dashboard-move" : 
                          "dashboard",
        menuClasses : (prevState.menuClasses === "mobile-menu") ? 
                          "mobile-menu mobile-menu-show" : 
                          "mobile-menu"
      }
    });
  }

  displayEditShift(day, shift){
    if(this.state.editBarClasses === "edit-bar") {
      var skedge = this.state.schedule;
      var c = skedge[day][shift];
      this.setState({
        editBarClasses: "edit-bar edit-bar-show",
        currentShift: c,
        currentShiftDay: this.week[day]
      });
    } else {
      this.setState({
        editBarClasses: "edit-bar"
      });
    }
  }

  editShift(timeOn, timeOff, day){
    var skedge = this.state.schedule,
        employee;
    for(var i = 0; i<skedge[day].length; i++) {
      if(skedge[day][i].employee === this.state.currentShift.employee) { employee = i; break;}
    }
    var updateTimeOn = update(skedge, {[day]: {[employee]: {times: {on: {$set: timeOn}}}}});
    var updateTimeOnAndOff = update(updateTimeOn, {[day]: {[employee]: {times: {off: {$set: timeOff}}}}});
    this.setState({
      schedule: updateTimeOnAndOff
    }, this.displayEditShift());
  }

	render(){
		return (
			<div className="App" style={{height: this.state.height}}>

				<Header
					burgerStuff={this.state.burgerClasses}
					burger={this.toggleBurger.bind(this)} />

        <Dashboard
          classes={this.state.dashboardClasses}
          schedule={this.state.schedule}
          startDay={this.state.startDay}
          endDay={this.state.endDay}
          editShift={this.displayEditShift.bind(this)} />

        <MobileMenu
          classes={this.state.menuClasses} />

        <EditBar 
          classes={this.state.editBarClasses}
          currentShift={this.state.currentShift}
          currentShiftDay={this.state.currentShiftDay}
          shiftDay={this.state.currentShiftDay}
          displayEditShift={this.displayEditShift.bind(this)}
          editShift={this.editShift.bind(this)} />

			</div>
		);
	}
}