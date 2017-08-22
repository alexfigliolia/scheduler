import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import update from 'immutability-helper';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import MobileMenu from './components/mobileMenu/MobileMenu';
import EditBar from './components/editBar/EditBar';
import Create from './components/create/Create';
import DatePicker from './components/datePicker/DatePicker';
import ManageEmployees from './components/manageEmployees/ManageEmployees';
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
      fixedPickerClasses: "picker fixed-picker",
      manageEmployeesClasses: "manage-employees",
      height: window.innerHeight + "px",
      startDay: 8,
      endDay: 7,
      colors: ["#48CBC3", "#EB7CDA", "#7D78D4", "#FEABAD", "#FD9462", "#FD5A54", "#FFD66C", "#9DE39E", "#3F60E9", "#64CE87", "#EA366B", "#53A8FF"],
      employees: [{employee: "Alex", color: "#48CBC3"}, 
                  {employee: "Steve", color: "#EB7CDA"}, 
                  {employee: "Larry", color: "#7D78D4"}],
      schedule: 
      [
        [
          {
            created: new Date(),
            for: "Mon Aug 14 2017 00:00:00 GMT-0400 (EDT)"
          },
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
      currentSkedgeIndex: 0,
      month: [],
      mondays: [],
      length: 0
		}
    this.week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	}

  componentDidMount(){
    var self = this,
        d = new Date().getMonth();
    window.addEventListener('resize', function(){
      self.setState({
        height: window.innerHeight + "px"
      })
    });
    this.getDays(getDaysInMonth(d));
    this.setState({
      mondays: getMondays(d),
      length: this.state.schedule.length
    });
  }

  getDays(num){
    var m = [];
    for(var i = 0; i<num; i++) {
      var d = i + 1
      m.push(d);
    }
    this.setState({
      month: m
    });
  }

	//MOBILE MENU OPEN AND CLOSE
  toggleBurger(){
    this.setState((prevState, prevProps) => {
      if(prevState.fixedPickerClasses === "picker fixed-picker date-picker-show") {
        return {
          burgerClasses: "hamburglar is-open",
          burgerToggle: true,
          dashboardClasses: "dashboard",
          menuClasses: "mobile-menu",
          fixedPickerClasses: "picker fixed-picker"
        }
      } else {
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
                            "mobile-menu",
          manageEmployeesClasses: "manage-employees"
        }
      }
    });
  }

  displayPicker(){
    this.setState((prevState, prevProps) => {
      return {
        menuClasses : (prevState.menuClasses === "mobile-menu") ? 
                          "mobile-menu mobile-menu-show" : 
                          "mobile-menu",
        fixedPickerClasses: (prevState.fixedPickerClasses === "picker fixed-picker") ?
                          "picker fixed-picker date-picker-show" :
                          "picker fixed-picker"
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

  createSkedge(year = "", month = "", day = ""){
    var state = this.state.schedule,
        emptySkedge = [[],[],[],[],[],[],[],[]],
        newSkedge = emptySkedge.map((day, i) => {
          return day[0] = [];
        });
        newSkedge[0] = {
          created: new Date(),
          for: new Date(year, month, day)
        }
        newState = update(state, {$push: [newSkedge]});
    this.setState({
      schedule: newState,
      canCreate: false,
      currentSkedgeIndex: this.state.currentSkedgeIndex + 1,
      burgerToggle: false,
      burgerClasses: "hamburglar is-open",
      dashboardClasses: "dashboard",
      menuClasses: "mobile-menu",
      length: this.state.length + 1
    });
    this.state.fixedPickerClasses === "picker fixed-picker date-picker-show" && this.toggleBurger();
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

  saveShift(employee, color, start, end){
    var state = this.state.schedule,
        day = this.week.indexOf(this.state.currentShiftDay) + 1,
        shift = {
          employee: employee, 
          times: {
            on: start,
            off: end
          },
          color: color
        },
        newState = update(state, {[this.state.currentSkedgeIndex]: {[day]: {$push: [shift]}}});
    this.setState({
      schedule: newState,
      canCreate: true
    });
  }

  renderSkedge(e){
    var cur = this.state.currentSkedgeIndex,
        dir = e.target.dataset.dir;
    if(e.target.dataset.dir === "prev"){
      var newState = update(cur, {$apply: function(x) {return x - 1;}});
      if(newState < 0) {
        newState = update(newState, {$set: 0});
      }
    } else {
      var newState = update(cur, {$apply: function(x) {return x + 1;}});
      if(newState > this.state.schedule.length - 1) {
        newState = update(newState, {$set: this.state.schedule.length - 1});
      }
    }
    this.setState({
      currentSkedgeIndex: newState
    });
  }

  showAddEmployee(){ 
    if(this.state.manageEmployeesClasses === "manage-employees") {
      if(this.state.burgerToggle === false) {
        this.toggleBurger();
        setTimeout(function(){
          this.setState({
            manageEmployeesClasses: "manage-employees manage-employees-show"
          });
        }.bind(this), 500);
      } else {
        this.setState({
          manageEmployeesClasses: "manage-employees manage-employees-show"
        });
      }
    } else {
      this.setState({
        manageEmployeesClasses: "manage-employees"
      });
    }
  }

  addEmployee(employee, color){
    let state = this.state.employees,
        newState = update(state, {$push: [{employee: employee, color: color}]});
    this.setState({
      employees: newState
    });
    setTimeout(function(){
      this.showAddEmployee();
    }.bind(this), 1600)
  }

	render(){
		return (
			<div className="App" style={{height: this.state.height}}>

				<Header
					burgerStuff={this.state.burgerClasses}
					burger={this.toggleBurger.bind(this)}
          createSkedge={this.createSkedge.bind(this)} />

        <Dashboard
          classes={this.state.dashboardClasses}
          schedule={this.state.schedule[this.state.currentSkedgeIndex]}
          startDay={this.state.startDay}
          endDay={this.state.endDay}
          month={this.state.month}
          idx={this.state.currentSkedgeIndex}
          skedgeNumber={this.state.length}
          createSkedge={this.createSkedge.bind(this)}
          editShift={this.displayEditShift.bind(this)}
          displayAddAShift={this.displayAddAShift.bind(this)}
          renderSkedge={this.renderSkedge.bind(this)} />

        <MobileMenu
          classes={this.state.menuClasses}
          month={this.state.month}
          createSkedge={this.createSkedge.bind(this)}
          displayPicker={this.displayPicker.bind(this)} 
          showAddEmployee={this.showAddEmployee.bind(this)}/>

        <DatePicker
          classes={this.state.fixedPickerClasses}
          displayPicker={this.displayPicker.bind(this)}
          createSkedge={this.createSkedge.bind(this)} />

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
          flip={this.flip.bind(this)}
          saveShift={this.saveShift.bind(this)} />

        <ManageEmployees 
          classes={this.state.manageEmployeesClasses}
          employees={this.state.employees}
          colors={this.state.colors}
          addEmployee={this.addEmployee.bind(this)}
          showAddEmployee={this.showAddEmployee.bind(this)} />

			</div>
		);
	}
}

var getDaysInMonth = function(month, year = 2017) {
 return new Date(year, month, 0).getDate();
}

function getMondays(month, year = 2017) {
    var d = new Date(year, month, 0),
        month = d.getMonth(),
        mondays = [];

    d.setDate(1);

    // Get the first Monday in the month
    while (d.getDay() !== 1) {
        d.setDate(d.getDate() + 1);
    }

    // Get all the other Mondays in the month
    while (d.getMonth() === month) {
        mondays.push(new Date(d.getTime()));
        d.setDate(d.getDate() + 7);
    }
    return mondays;
}