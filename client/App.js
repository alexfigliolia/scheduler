import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import update from 'immutability-helper';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import MobileMenu from './components/mobileMenu/MobileMenu';
import EditBar from './components/editBar/EditBar';
import Create from './components/create/Create';
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
      createClasses: "create",
      height: window.innerHeight + "px",
      startDay: 8,
      endDay: 7,
      employees: [{employee: "Alex", color: "#48CBC3"}, 
                  {employee: "Steve", color: "#EB7CDA"}, 
                  {employee: "Larry", color: "#7D78D4"}],
      schedule: 
      [
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
          ]
        ]
      ],
      currentShift: {
        employee: "Alex", 
        times: {
          on: "10am",
          off: "4pm"
        },
        color: "#48CBC3"
      },
      currentShiftDay: "Monday",
      currentSkedgeIndex: 0
		}
    this.week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	}

  componentDidMount(){
    var self = this;
    window.addEventListener('resize', function(){
      self.setState({
        height: window.innerHeight + "px"
      })
    });
    console.log(self.state.schedule);
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
      var skedge = this.state.schedule[this.state.currentSkedgeIndex];
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
    for(var i = 0; i<skedge[this.state.currentSkedgeIndex][day].length; i++) {
      if(skedge[this.state.currentSkedgeIndex][day][i].employee === this.state.currentShift.employee) { employee = i; break;}
    }
    var updateTimeOn = update(skedge, {[this.state.currentSkedgeIndex] : {[day]: {[employee]: {times: {on: {$set: timeOn}}}}}});
    var updateTimeOnAndOff = update(updateTimeOn, {[this.state.currentSkedgeIndex]: {[day]: {[employee]: {times: {off: {$set: timeOff}}}}}});
    this.setState({
      schedule: updateTimeOnAndOff
    }, this.displayEditShift());
  }

  createSkedge(){
    var state = this.state.schedule,
        emptySkedge = [[],[],[],[],[],[],[]],
        emptyShift = {
          employee: "", 
          times: {
            on: "",
            off: ""
          },
          color: ""
        },
        newSkedge = emptySkedge.map((day, i) => {
          return day[0] = [];
        }),
        newState = update(state, {$push: [newSkedge]});
    this.setState({
      schedule: newState,
      currentSkedgeIndex: this.state.currentSkedgeIndex + 1
    });
  }

  displayAddAShift(e){
    if(this.state.createClasses === "create") {
      var day = e.target.dataset.lg;
      this.setState({
        createClasses: "create create-show",
        currentShiftDay: day
      });
    } else {
      this.setState({
        createClasses: "create"
      });
    }
  }

  flip(){
    if(this.state.createClasses === "create create-show") {
      this.setState({
        createClasses: "create create-show create-flip"
      });
    }
    if(this.state.createClasses === "create create-show create-flip") {
      this.setState({
        createClasses: "create create-show"
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
          schedule={this.state.schedule[this.state.schedule.length - 1]}
          startDay={this.state.startDay}
          endDay={this.state.endDay}
          createSkedge={this.createSkedge.bind(this)}
          editShift={this.displayEditShift.bind(this)}
          displayAddAShift={this.displayAddAShift.bind(this)} />

        <MobileMenu
          classes={this.state.menuClasses} />

        <EditBar 
          classes={this.state.editBarClasses}
          currentShift={this.state.currentShift}
          currentShiftDay={this.state.currentShiftDay}
          shiftDay={this.state.currentShiftDay}
          displayEditShift={this.displayEditShift.bind(this)}
          editShift={this.editShift.bind(this)} />

        <Create 
          classes={this.state.createClasses}
          day={this.state.currentShiftDay}
          employees={this.state.employees}
          displayAddAShift={this.displayAddAShift.bind(this)}
          flip={this.flip.bind(this)} />

			</div>
		);
	}
}