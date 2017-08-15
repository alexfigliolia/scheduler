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
      height: (window.innerHeight - 50) + "px",
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
            color: "#D46096"
          },
          {
            employee: "Larry", 
            times: {
              on: "10am",
              off: "7pm"
            },
            color: "#91D723"
          }
        ],
        [
          {
            employee: "Steve", 
            times: {
              on: "8am",
              off: "5pm"
            },
            color: "#D46096"
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
              on: "4pm",
              off: "7pm"
            },
            color: "#91D723"
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
            color: "#D46096"
          },
          {
            employee: "Larry", 
            times: {
              on: "12am",
              off: "6pm"
            },
            color: "#91D723"
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
            color: "#D46096"
          },
          {
            employee: "Larry", 
            times: {
              on: "12pm",
              off: "7pm"
            },
            color: "#91D723"
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
            color: "#D46096"
          },
          {
            employee: "Larry", 
            times: {
              on: "8pm",
              off: "7pm"
            },
            color: "#91D723"
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
            color: "#D46096"
          },
          {
            employee: "Larry", 
            times: {
              on: "4pm",
              off: "7pm"
            },
            color: "#91D723"
          }
        ],
        [
          {
            employee: "Steve", 
            times: {
              on: "12pm",
              off: "7pm"
            },
            color: "#D46096"
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
            color: "#91D723"
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
      }
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
        dashboardClasses : (prevState.dashboardClasses === "dashboard") ? 
                          "dashboard dashboard-move" : 
                          "dashboard",
        menuClasses : (prevState.menuClasses === "mobile-menu") ? 
                          "mobile-menu mobile-menu-show" : 
                          "mobile-menu"
      }
    });
  }

  editShift(day, shift){
    if(this.state.editBarClasses === "edit-bar") {
      var skedge = this.state.schedule;
      var c = skedge[day][shift];
      this.setState({
        editBarClasses: "edit-bar edit-bar-show",
        currentShift: c
      });
    } else {
      this.setState({
        editBarClasses: "edit-bar"
      });
    }
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
          editShift={this.editShift.bind(this)} />

        <MobileMenu
          classes={this.state.menuClasses} />

        <EditBar 
          classes={this.state.editBarClasses}
          currentShift={this.state.currentShift}
          editShift={this.editShift.bind(this)} />

			</div>
		);
	}
}