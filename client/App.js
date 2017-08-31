import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import update from 'immutability-helper';
import Login from './components/login/Login';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import MobileMenu from './components/mobileMenu/MobileMenu';
import EditBar from './components/editBar/EditBar';
import Create from './components/create/Create';
import DatePicker from './components/datePicker/DatePicker';
import ManageEmployees from './components/manageEmployees/ManageEmployees';
import Options from './components/options/Options';
import MySkedges from './components/mySkedges/MySkedges';
import './App.scss';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      loggedIn: false,
      loginErrors: "",
      loginClasses: "login",
			burgerClasses: "hamburglar is-open",
			burgerToggle: true,
      dashboardClasses: "dashboard",
      menuClasses: "mobile-menu",
      editBarClasses: "edit-bar",
      createClasses: "create",
      fixedPickerClasses: "picker fixed-picker",
      drawerPickerClasses: "date-picker",
      manageEmployeesClasses: "manage-employees",
      listSkedgesClasses: "my-skedges",
      optionsClasses: "options",
      height: window.innerHeight + "px",
      startDay: 8,
      endDay: 7,
      colors: ["#48CBC3", "#EB7CDA", "#7D78D4", 
               "#FEABAD", "#FC006E", "#FD5A54", 
               "#FFD66C", "#9DE39E", "#3F60E9", 
               "#64CE87", "#1CC3AC", "#53A8FF", 
               "#E84033", "#FD6E76", "#FEB409",
               "#44CD76", "#FD8D3D", "#41CAF6",
               "#A538C9", "#FC5599"],
      employees: [{employee: "Alex", color: "#48CBC3"}, 
                  {employee: "Steve", color: "#EB7CDA"}, 
                  {employee: "Larry", color: "#7D78D4"}],
      schedule: [
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
        ],
        [
          {
            created: new Date(),
            for: "Mon Aug 21 2017 00:00:00 GMT-0400 (EDT)"
          },
          [
            {
              employee: "Alex", 
              times: {
                on: "8am",
                off: "2pm"
              },
              color: "#48CBC3"
            },
            {
              employee: "Steve", 
              times: {
                on: "10am",
                off: "4pm"
              },
              color: "#EB7CDA"
            },
            {
              employee: "Larry", 
              times: {
                on: "11am",
                off: "7pm"
              },
              color: "#7D78D4"
            }
          ],
          [
            {
              employee: "Steve", 
              times: {
                on: "10am",
                off: "7pm"
              },
              color: "#EB7CDA"
            },
            {
              employee: "Alex", 
              times: {
                on: "8am",
                off: "5pm"
              },
              color: "#48CBC3"
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
      length: 0,
      copied: false
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

  login(e, p) {
    e = e.toLowerCase();
    Meteor.loginWithPassword(e, p, (err) => {
      this.setState({
        loginClasses: "login login-loading"
      });
      if(err){
        // console.log(err.reason);
        this.setState({
          loginErrors: err.reason,
          loginClasses: "login"
        });
      } else {
        this.setState({
          loginErrors: "",
          loginClasses: "login login-loading login-remove"
        });
      }
    });
  }

  signUp(n, e, p) {
    Accounts.createUser({name: n, email: e.toLowerCase(), password: p}, (err) => {
      this.setState({
        loginClasses: "login login-loading"
      });
      if(err){
        // console.log(err.reason);
      } else {
        // console.log('creating new user');
        Meteor.loginWithPassword(e, p, (err) => {
          if(err) {
            // console.log(err.reason);
            this.setState({
              loginErrors: err.reason,
              loginClasses: "login"
            });
          } else {
            // console.log('logging in new user');
            this.setState({
              loginErrors: "",
              loginClasses: "login login-loading login-remove"
            });
          }
        });
      }
    });
  }

  //GET DAYS IN MONTH
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

  //DISPLAY DATE PICKER FOR CREATING A SKEDGE
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

  //DISPLAY EDIT SHIFT UI
  displayEditShift(day, shift){
    if(this.state.editBarClasses === "edit-bar") {
      var skedge = this.state.schedule[this.state.currentSkedgeIndex];
      var c = skedge[day][shift];
      this.setState({
        editBarClasses: "edit-bar edit-bar-show",
        currentShift: c,
        currentShiftDay: this.week[day - 1]
      });
    } else {
      this.setState({
        editBarClasses: "edit-bar"
      });
    }
  }

  //EDIT A SHIFT
  editShift(timeOn, timeOff, day){
    var skedge = this.state.schedule,
        employee;
    for(var i = 0; i<skedge[this.state.currentSkedgeIndex][day + 1].length; i++) {
      if(skedge[this.state.currentSkedgeIndex][day + 1][i].employee === this.state.currentShift.employee) { employee = i; break;}
    }
    var updateTimeOn = update(skedge, {[this.state.currentSkedgeIndex] : {[day + 1]: {[employee]: {times: {on: {$set: timeOn}}}}}});
    var updateTimeOnAndOff = update(updateTimeOn, {[this.state.currentSkedgeIndex]: {[day + 1]: {[employee]: {times: {off: {$set: timeOff}}}}}});
    this.setState({
      schedule: updateTimeOnAndOff
    }, this.displayEditShift());
  }

  //DELETE A SHIFT
  removeShift(){
    var skedge = this.state.schedule,
        index = this.state.currentSkedgeIndex,
        day = this.week.indexOf(this.state.currentShiftDay),
        employee;
    for(var i = 0; i<skedge[index][day + 1].length; i++) {
      if(skedge[index][day + 1][i].employee === this.state.currentShift.employee) { employee = i; break;}
    }
    var newState = update(skedge, {[index] : {[day + 1] : {$splice: [[employee, 1]]}}});
    this.setState({
      schedule: newState
    }, this.displayEditShift());
  }

  //CREATE A NEW SKEDGE
  createSkedge(year = "", month = "", day = ""){
    var state = this.state.schedule, 
        newState, 
        dates = {created: new Date(), for: new Date(year, month, day)};
    if(this.state.copied) {
      var index = this.state.currentSkedgeIndex,
          copy = state.slice(0)[index];
      newState = update(state, {$push: [copy]});
      newState = update(newState, {[newState.length - 1]: {[0]: {created: {$set: dates.created}}}});
      newState = update(newState, {[newState.length - 1]: {[0]: {for: {$set: dates.for}}}});
    } else {
      var emptySkedge = [[],[],[],[],[],[],[],[]],
          newSkedge = emptySkedge.map((day, i) => {
            return day[0] = [];
          });
      newSkedge[0] = dates;
      newState = update(state, {$push: [newSkedge]});
    }
    this.setState({
      schedule: newState,
      canCreate: false,
      currentSkedgeIndex: newState.length - 1,
      burgerToggle: false,
      burgerClasses: "hamburglar is-open",
      dashboardClasses: "dashboard",
      menuClasses: "mobile-menu",
      drawerPickerClasses: "date-picker",
      length: newState.length,
      optionsClasses: "options",
      copied: false
    });
    this.state.fixedPickerClasses === "picker fixed-picker date-picker-show" 
      && this.toggleBurger();
  }

  //DISPLAY ADD A SHIFT UI
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

  //HANDLE ANIMATION OF "CREATE SHIFT" UI
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

  //ADD A SHIFT TO THE SCHEDULE
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

  //NAVIGATE THROUGH SKEDGES WITH RIGHT/LEFT ARROWS
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
      if(newState < 0) {
        newState = update(newState, {$set: 0});
      }
    }
    this.setState({
      currentSkedgeIndex: newState
    });
  }

  //DISPLAY MANAGE EMPLOYEE UI
  showAddEmployee(){ 
    if(this.state.manageEmployeesClasses === "manage-employees") {
      if(window.innerWidth < 801) {
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

  //ADD A NEW EMPLOYEE
  addEmployee(employee, color){
    let state = this.state.employees,
        newState = update(state, {$push: [{employee: employee, color: color}]});
    this.setState({
      employees: newState
    });
  }

  //DISPLAY DATE PICKER WHEN COPYING A NEW SKEDGE
  displayJustDatePicker(e){
    if(window.innerWidth < 800) {
      this.toggleBurger();
      this.displayPicker();
    } else {
      if(this.state.drawerPickerClasses === "date-picker") {
        this.setState({
          drawerPickerClasses: "date-picker date-picker-show"
        });
      } else {
         this.setState({
            drawerPickerClasses: "date-picker"
         });
      }
    }
    this.setState({
      optionsClasses: "options"
    });
    e.target.tagName === "H3" &&
      this.setState({
        copied: true
      });
  }

  //DISPLAY SKEDGE OPTIONS
  displayOptions(){
    this.setState((prevState, prevProps) => {
      return {
        optionsClasses: (prevState.optionsClasses === "options") ? "options options-show" : "options"
      }
    })
  }

  //DELETE THE CURRENT SKEDGE
  deleteSkedge(){
    var data = this.state.schedule,
        index = this.state.currentSkedgeIndex,
        newData = update(data, {$splice: [[index, 1]]});
    this.setState({
      schedule: newData,
      currentSkedgeIndex: (newData.length - 1 < 0) ? 0 : newData.length - 1,
      length: newData.length
    }, this.displayOptions);
  }

  //UPDATE THE NAME OF AN EMPLOYEE
  updateEmployeeName(name, oldName, index){
    var employees = this.state.employees,
        schedule = this.state.schedule,
        updateShift = schedule,
        newState = update(employees, {[index] : {employee: {$set: name}}});
    for(var i = 0; i < schedule.length; i++) {
      for(var j = 0; j<schedule[i].length; j++){
        if(j > 0) {
          for(var k = 0; k<schedule[i][j].length; k++) {
            if(schedule[i][j][k].employee === oldName) {
              updateShift = update(updateShift, {[i] : {[j] : {[k]: {employee: {$set: name}}}}});
              this.setState({
                schedule: updateShift
              });
            }
          }
        }
      }
    }
    this.setState({
      employees: newState
    });
  }

  //UPDATE THE COLOR FOR THE EMPLOYEE
  updateEmployeeColor(name, color, index){
    var employees = this.state.employees,
        schedule = this.state.schedule,
        updateShift = schedule,
        newState = update(employees, {[index] : {color: {$set: color}}});
    for(var i = 0; i < schedule.length; i++) {
      for(var j = 0; j<schedule[i].length; j++){
        if(j > 0) {
          for(var k = 0; k<schedule[i][j].length; k++) {
            if(schedule[i][j][k].employee === name) {
              updateShift = update(updateShift, {[i] : {[j] : {[k]: {color: {$set: color}}}}});
              this.setState({
                schedule: updateShift
              });
            }
          }
        }
      }
    }
    this.setState({
      employees: newState
    });
  }

  //PICK A SKEDGE FROM THE MY SKEDGES LIST
  pickSkedgeFromList(e){
    var index = e.target.dataset.index;
    this.setState({
      currentSkedgeIndex: index,
      listSkedgesClasses: "my-skedges"
    });
  }

  //DISPLAY A FULL LIST OF SKEDGES
  displaySkedgeList(){
    if(this.state.listSkedgesClasses === "my-skedges") {
      if(window.innerWidth < 801) {
        this.toggleBurger();
        setTimeout(function(){
          this.setState({
            listSkedgesClasses: "my-skedges my-skedges-show"
          });
        }.bind(this), 500);
      } else {
        this.setState({
          listSkedgesClasses: "my-skedges my-skedges-show"
        });
      }
    } else {
      this.setState({
        listSkedgesClasses: "my-skedges"
      });
    }
  }

	render(){
		return (
			<div className="App" style={{height: this.state.height}}>

        <Login 
          classes={this.state.loginClasses}
          errors={this.state.loginErrors}
          login={this.login.bind(this)}
          signUp={this.signUp.bind(this)} />

				<Header
					burgerStuff={this.state.burgerClasses}
					burger={this.toggleBurger.bind(this)}
          createSkedge={this.createSkedge.bind(this)}
          showAddEmployee={this.showAddEmployee.bind(this)}
          dJDP={this.displayJustDatePicker.bind(this)}
          displayOptions={this.displayOptions.bind(this)}
          showList={this.displaySkedgeList.bind(this)} />

        <Dashboard
          classes={this.state.dashboardClasses}
          datePickerClasses={this.state.drawerPickerClasses}
          schedule={this.state.schedule[this.state.currentSkedgeIndex]}
          startDay={this.state.startDay}
          endDay={this.state.endDay}
          month={this.state.month}
          idx={this.state.currentSkedgeIndex}
          skedgeNumber={this.state.length}
          createSkedge={this.createSkedge.bind(this)}
          editShift={this.displayEditShift.bind(this)}
          displayAddAShift={this.displayAddAShift.bind(this)}
          renderSkedge={this.renderSkedge.bind(this)}
          showAddEmployee={this.showAddEmployee.bind(this)}
          displayOptions={this.displayOptions.bind(this)}
          hideDrawer={this.displayJustDatePicker.bind(this)} />

        <MobileMenu
          classes={this.state.menuClasses}
          month={this.state.month}
          createSkedge={this.createSkedge.bind(this)}
          displayPicker={this.displayPicker.bind(this)} 
          showAddEmployee={this.showAddEmployee.bind(this)}
          showList={this.displaySkedgeList.bind(this)} />

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
          editShift={this.editShift.bind(this)}
          removeShift={this.removeShift.bind(this)} />

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
          showAddEmployee={this.showAddEmployee.bind(this)}
          updateName={this.updateEmployeeName.bind(this)}
          updateColor={this.updateEmployeeColor.bind(this)} />

        <Options 
          classes={this.state.optionsClasses}
          deleteSkedge={this.deleteSkedge.bind(this)}
          displayOptions={this.displayOptions.bind(this)}
          displayJustDatePicker={this.displayJustDatePicker.bind(this)} />

        <MySkedges 
          schedules={this.state.schedule}
          classes={this.state.listSkedgesClasses}
          pickSkedge={this.pickSkedgeFromList.bind(this)}
          hideSkedgeList={this.displaySkedgeList.bind(this)} />

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