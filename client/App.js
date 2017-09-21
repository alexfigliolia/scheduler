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
                  {employee: "Larry", color: "#7D78D4"},
                  {employee: "Carl", color: "#53A8FF"},
                  {employee: "Louis", color: "#64CE87"}],
      schedule: [
        // [
        //   {
        //     created: new Date(),
        //     for: "Mon Aug 14 2017 00:00:00 GMT-0400 (EDT)"
        //   },
        //   [
        //     {
        //       employee: "Alex", 
        //       times: {
        //         on: "10am",
        //         off: "4pm"
        //       },
        //       color: "#48CBC3"
        //     },
        //     {
        //       employee: "Steve", 
        //       times: {
        //         on: "8am",
        //         off: "7pm"
        //       },
        //       color: "#EB7CDA"
        //     },
        //     {
        //       employee: "Larry", 
        //       times: {
        //         on: "10am",
        //         off: "7pm"
        //       },
        //       color: "#7D78D4"
        //     }
        //   ],
        //   [
        //     {
        //       employee: "Steve", 
        //       times: {
        //         on: "8am",
        //         off: "5pm"
        //       },
        //       color: "#EB7CDA"
        //     },
        //     {
        //       employee: "Alex", 
        //       times: {
        //         on: "9am",
        //         off: "4pm"
        //       },
        //       color: "#48CBC3"
        //     },
        //     {
        //       employee: "Larry", 
        //       times: {
        //         on: "3pm",
        //         off: "7pm"
        //       },
        //       color: "#7D78D4"
        //     }
        //   ],
        //   [
        //     {
        //       employee: "Alex", 
        //       times: {
        //         on: "10am",
        //         off: "4pm"
        //       },
        //       color: "#48CBC3"
        //     },
        //     {
        //       employee: "Steve", 
        //       times: {
        //         on: "8am",
        //         off: "7pm"
        //       },
        //       color: "#EB7CDA"
        //     },
        //     {
        //       employee: "Larry", 
        //       times: {
        //         on: "12pm",
        //         off: "6pm"
        //       },
        //       color: "#7D78D4"
        //     }
        //   ],
        //   [
        //     {
        //       employee: "Alex", 
        //       times: {
        //         on: "8am",
        //         off: "4pm"
        //       },
        //       color: "#48CBC3"
        //     },
        //     {
        //       employee: "Steve", 
        //       times: {
        //         on: "8am",
        //         off: "3pm"
        //       },
        //       color: "#EB7CDA"
        //     },
        //     {
        //       employee: "Larry", 
        //       times: {
        //         on: "12pm",
        //         off: "7pm"
        //       },
        //       color: "#7D78D4"
        //     }
        //   ],
        //   [
        //     {
        //       employee: "Alex", 
        //       times: {
        //         on: "12pm",
        //         off: "4pm"
        //       },
        //       color: "#48CBC3"
        //     },
        //     {
        //       employee: "Steve", 
        //       times: {
        //         on: "12pm",
        //         off: "4pm"
        //       },
        //       color: "#EB7CDA"
        //     },
        //     {
        //       employee: "Larry", 
        //       times: {
        //         on: "8am",
        //         off: "7pm"
        //       },
        //       color: "#7D78D4"
        //     }
        //   ],
        //   [
        //     {
        //       employee: "Alex", 
        //       times: {
        //         on: "8am",
        //         off: "7pm"
        //       },
        //       color: "#48CBC3"
        //     },
        //     {
        //       employee: "Steve", 
        //       times: {
        //         on: "12pm",
        //         off: "7pm"
        //       },
        //       color: "#EB7CDA"
        //     },
        //     {
        //       employee: "Larry", 
        //       times: {
        //         on: "3pm",
        //         off: "7pm"
        //       },
        //       color: "#7D78D4"
        //     }
        //   ],
        //   [
        //     {
        //       employee: "Steve", 
        //       times: {
        //         on: "12pm",
        //         off: "7pm"
        //       },
        //       color: "#EB7CDA"
        //     },
        //     {
        //       employee: "Alex", 
        //       times: {
        //         on: "10am",
        //         off: "4pm"
        //       },
        //       color: "#48CBC3"
        //     },
        //     {
        //       employee: "Larry", 
        //       times: {
        //         on: "8am",
        //         off: "4pm"
        //       },
        //       color: "#7D78D4"
        //     }
        //   ]
        // ],
        // [
        //   {
        //     created: new Date(),
        //     for: "Mon Aug 21 2017 00:00:00 GMT-0400 (EDT)"
        //   },
        //   [
        //     {
        //       employee: "Alex", 
        //       times: {
        //         on: "8am",
        //         off: "2pm"
        //       },
        //       color: "#48CBC3"
        //     },
        //     {
        //       employee: "Steve", 
        //       times: {
        //         on: "10am",
        //         off: "4pm"
        //       },
        //       color: "#EB7CDA"
        //     },
        //     {
        //       employee: "Larry", 
        //       times: {
        //         on: "11am",
        //         off: "7pm"
        //       },
        //       color: "#7D78D4"
        //     }
        //   ],
        //   [
        //     {
        //       employee: "Steve", 
        //       times: {
        //         on: "10am",
        //         off: "7pm"
        //       },
        //       color: "#EB7CDA"
        //     },
        //     {
        //       employee: "Alex", 
        //       times: {
        //         on: "8am",
        //         off: "5pm"
        //       },
        //       color: "#48CBC3"
        //     },
        //     {
        //       employee: "Larry", 
        //       times: {
        //         on: "12pm",
        //         off: "7pm"
        //       },
        //       color: "#7D78D4"
        //     }
        //   ],
        //   [
        //     {
        //       employee: "Alex", 
        //       times: {
        //         on: "10am",
        //         off: "4pm"
        //       },
        //       color: "#48CBC3"
        //     },
        //     {
        //       employee: "Steve", 
        //       times: {
        //         on: "8am",
        //         off: "7pm"
        //       },
        //       color: "#EB7CDA"
        //     },
        //     {
        //       employee: "Larry", 
        //       times: {
        //         on: "12pm",
        //         off: "6pm"
        //       },
        //       color: "#7D78D4"
        //     }
        //   ],
        //   [
        //     {
        //       employee: "Alex", 
        //       times: {
        //         on: "8am",
        //         off: "4pm"
        //       },
        //       color: "#48CBC3"
        //     },
        //     {
        //       employee: "Steve", 
        //       times: {
        //         on: "8am",
        //         off: "3pm"
        //       },
        //       color: "#EB7CDA"
        //     },
        //     {
        //       employee: "Larry", 
        //       times: {
        //         on: "12pm",
        //         off: "7pm"
        //       },
        //       color: "#7D78D4"
        //     }
        //   ],
        //   [
        //     {
        //       employee: "Alex", 
        //       times: {
        //         on: "12pm",
        //         off: "4pm"
        //       },
        //       color: "#48CBC3"
        //     },
        //     {
        //       employee: "Steve", 
        //       times: {
        //         on: "12pm",
        //         off: "4pm"
        //       },
        //       color: "#EB7CDA"
        //     },
        //     {
        //       employee: "Larry", 
        //       times: {
        //         on: "8am",
        //         off: "7pm"
        //       },
        //       color: "#7D78D4"
        //     }
        //   ],
        //   [
        //     {
        //       employee: "Alex", 
        //       times: {
        //         on: "8am",
        //         off: "7pm"
        //       },
        //       color: "#48CBC3"
        //     },
        //     {
        //       employee: "Steve", 
        //       times: {
        //         on: "12pm",
        //         off: "7pm"
        //       },
        //       color: "#EB7CDA"
        //     },
        //     {
        //       employee: "Larry", 
        //       times: {
        //         on: "3pm",
        //         off: "7pm"
        //       },
        //       color: "#7D78D4"
        //     }
        //   ],
        //   [
        //     {
        //       employee: "Steve", 
        //       times: {
        //         on: "12pm",
        //         off: "7pm"
        //       },
        //       color: "#EB7CDA"
        //     },
        //     {
        //       employee: "Alex", 
        //       times: {
        //         on: "10am",
        //         off: "4pm"
        //       },
        //       color: "#48CBC3"
        //     },
        //     {
        //       employee: "Larry", 
        //       times: {
        //         on: "8am",
        //         off: "4pm"
        //       },
        //       color: "#7D78D4"
        //     }
        //   ]
        // ]
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
    this.loader = document.getElementById('appLoader');
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

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps){
      console.log(nextProps);
      if(nextProps.user === null) {
        if(this.loader !== null) {
          this.loader.remove();
        }
        this.setState({
          loggedIn: false
        });
      } else {
        if(Meteor.user().roll === "employee") {
          this.setState({
            loginErrors: "This app is for your employers! Please sign into the employees' app.",
            loginClasses: "login",
            loggedIn: false
          });
          if(this.loader !== null) {
            this.loader.remove();
          }
        } else {
          this.consumeDB(nextProps);
        }
      }
    }
  }

  consumeDB(path){
    this.setState({
      schedule: path.schedules,
      employees: path.employees,
      currentSkedgeIndex: this.state.schedule !== undefined && path.schedules.length === this.state.schedule.length ? this.state.currentSkedgeIndex : path.schedules.length - 1,
      length: path.schedules.length,
      user: path.user
    });
    setTimeout(function(){
      this.setState({
        loggedIn: true,
      }, this.hideLoader());
    }.bind(this), 1800);
  }

  hideLoader(){
    if(this.loader !== null) {
      setTimeout(function(){
        this.loader.classList.add('app-loader-hidden');
      }.bind(this), 2000);
      setTimeout(function(){
        this.loader.remove();
      }.bind(this), 2600);
    }
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
        setTimeout(function(){
          this.setState({
            loginErrors: "",
            loginClasses: "login login-loading login-remove"
          });
        }.bind(this), 500);
        setTimeout(function(){
          this.setState({
            loggedIn: true
          });
        }.bind(this), 1800);
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
            Meteor.call('group.create', n);
            setTimeout(function(){
              this.setState({
                loginErrors: "",
                loginClasses: "login login-loading login-remove"
              });
            }.bind(this), 500);
            setTimeout(function(){
              this.setState({
                loggedIn: true
              });
            }.bind(this), 1800);
          }
        });
      }
    });
  }

  logout(e){
    if(e.target.parentNode.parentNode.classList.contains('mobile-menu')){
      this.toggleBurger();
      setTimeout(function(){
        this.setState({
          loginErrors: "",
          loginClasses: "login",
          loggedIn: false
        }, Meteor.logout());
      }.bind(this), 500);
    } else {
      this.setState({
        loginErrors: "",
        loginClasses: "login",
        loggedIn: false
      }, Meteor.logout());
    }
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
      var c = skedge.schedule[day][shift];
      this.setState({
        editBarClasses: "edit-bar edit-bar-show",
        currentShift: c,
        currentShiftDay: this.week[day - 1],
        currentSkedgeIndex: this.state.currentSkedgeIndex
      });
    } else {
      this.setState({
        editBarClasses: "edit-bar"
      });
    }
  }

  //EDIT A SHIFT
  editShift(timeOn, timeOff, day){
    var state = this.state.schedule,
        dIndex = day + 1,
        skedge = state[this.state.currentSkedgeIndex];
    for(var i = 0; i<skedge.schedule[day + 1].length; i++) {
      if(skedge.schedule[day + 1][i].employee === this.state.currentShift.employee) { employee = i; break;}
    }
    this.displayEditShift();
    Meteor.call('shift.edit', timeOn, timeOff, dIndex, employee, skedge.schedule[0].for);
  }

  //DELETE A SHIFT
  removeShift(){
    var skedge = this.state.schedule,
        index = this.state.currentSkedgeIndex,
        day = this.week.indexOf(this.state.currentShiftDay),
        dIndex = day + 1,
        employee;
    for(var i = 0; i<skedge[index].schedule[dIndex].length; i++) {
      if(skedge[index].schedule[dIndex][i].employee === this.state.currentShift.employee) { employee = i; break;}
    }
    this.displayEditShift();
    Meteor.call('shift.remove', dIndex, employee, this.state.currentShift.employee, skedge[index].schedule[0].for);
  }

  //CREATE A NEW SKEDGE
  createSkedge(year = "", month = "", day = ""){
    var state = this.state.schedule, 
        newState, 
        dates = {created: new Date(), for: new Date(year, month, day)};
    if(this.state.copied) {
      var index = this.state.currentSkedgeIndex,
          copy = state.slice(0)[index];
      newState = copy.schedule;
      newState[0].created = dates.created;
      newState[0].for = dates.for;
    } else {
      var emptySkedge = [[],[],[],[],[],[],[],[]],
          newSkedge = emptySkedge.map((day, i) => {
            return day[0] = [];
          });
      newSkedge[0] = dates;
      newState = newSkedge;
    }
    Meteor.call('schedules.add', newState);
    this.setState({
      canCreate: false,
      burgerToggle: false,
      burgerClasses: "hamburglar is-open",
      dashboardClasses: "dashboard",
      menuClasses: "mobile-menu",
      drawerPickerClasses: "date-picker",
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
        skedge = state[this.state.currentSkedgeIndex];
        Meteor.call('shift.add', shift, day, skedge.schedule[0].for);
  }

  //NAVIGATE THROUGH SKEDGES WITH RIGHT/LEFT ARROWS
  renderSkedge(e){
    var cur = this.state.currentSkedgeIndex,
        dir = e.target.dataset.dir;
    if(dir === "prev"){
      this.setState({
        currentSkedgeIndex: (this.state.currentSkedgeIndex - 1 < 0) ? 0 : this.state.currentSkedgeIndex - 1
      });
    } else {
      this.setState({
        currentSkedgeIndex: (this.state.currentSkedgeIndex + 1 >= this.state.length) ? this.state.length - 1 : this.state.currentSkedgeIndex + 1
      });
    }
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
    Meteor.call('employee.add', employee, color);
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
    var date = this.state.schedule[this.state.currentSkedgeIndex].schedule[0].for;
    console.log(date);
    Meteor.call('schedules.remove', date);
    this.setState({
      currentSkedgeIndex: (this.state.currentSkedgeIndex - 1 < 0) ? 0 : this.state.currentSkedgeIndex - 1,
      length: this.state.schedule.length - 1
    }, this.displayOptions);
  }

  //UPDATE THE NAME OF AN EMPLOYEE
  updateEmployeeName(name, oldName, index){
    var id = this.state.employees[index]._id;
    Meteor.call('employee.updateName', id, name, oldName);
  }

  //UPDATE THE COLOR FOR THE EMPLOYEE
  updateEmployeeColor(name, color, index){
    var id = this.state.employees[index]._id;
    Meteor.call('employee.updateColor', id, color, name);
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

        {
          !this.state.loggedIn &&
          <Login 
            classes={this.state.loginClasses}
            errors={this.state.loginErrors}
            login={this.login.bind(this)}
            signUp={this.signUp.bind(this)} />
        }

				{
          this.state.loggedIn && 
          <Header
            burgerStuff={this.state.burgerClasses}
            burger={this.toggleBurger.bind(this)}
            createSkedge={this.createSkedge.bind(this)}
            showAddEmployee={this.showAddEmployee.bind(this)}
            dJDP={this.displayJustDatePicker.bind(this)}
            displayOptions={this.displayOptions.bind(this)}
            showList={this.displaySkedgeList.bind(this)}
            logout={this.logout.bind(this)} />
          }

        {
          this.state.loggedIn &&
          <Dashboard
            classes={this.state.dashboardClasses}
            datePickerClasses={this.state.drawerPickerClasses}
            schedule={this.props.schedules[this.state.currentSkedgeIndex]}
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
        }

        {
          this.state.loggedIn &&
          <MobileMenu
            classes={this.state.menuClasses}
            month={this.state.month}
            createSkedge={this.createSkedge.bind(this)}
            displayPicker={this.displayPicker.bind(this)} 
            showAddEmployee={this.showAddEmployee.bind(this)}
            showList={this.displaySkedgeList.bind(this)}
            logout={this.logout.bind(this)} />
        }

        {
          this.state.loggedIn &&
          <DatePicker
            classes={this.state.fixedPickerClasses}
            displayPicker={this.displayPicker.bind(this)}
            createSkedge={this.createSkedge.bind(this)} />
          }

        {
          this.state.loggedIn &&
          <EditBar 
            classes={this.state.editBarClasses}
            currentShift={this.state.currentShift}
            currentShiftDay={this.state.currentShiftDay}
            shiftDay={this.state.currentShiftDay}
            displayEditShift={this.displayEditShift.bind(this)}
            editShift={this.editShift.bind(this)}
            removeShift={this.removeShift.bind(this)} />
        }

        {
          this.state.loggedIn &&
          <Create 
            classes={this.state.createClasses}
            day={this.state.currentShiftDay}
            employees={this.props.employees}
            displayAddAShift={this.displayAddAShift.bind(this)}
            flip={this.flip.bind(this)}
            saveShift={this.saveShift.bind(this)} />
        }

        {
          this.state.loggedIn &&
          <ManageEmployees 
            classes={this.state.manageEmployeesClasses}
            employees={this.props.employees}
            colors={this.state.colors}
            addEmployee={this.addEmployee.bind(this)}
            showAddEmployee={this.showAddEmployee.bind(this)}
            updateName={this.updateEmployeeName.bind(this)}
            updateColor={this.updateEmployeeColor.bind(this)} />
        }

        {
          this.state.loggedIn &&
          <Options 
            classes={this.state.optionsClasses}
            deleteSkedge={this.deleteSkedge.bind(this)}
            displayOptions={this.displayOptions.bind(this)}
            displayJustDatePicker={this.displayJustDatePicker.bind(this)} />
        }

        {
          this.state.loggedIn &&
          <MySkedges 
            schedules={this.props.schedules}
            classes={this.state.listSkedgesClasses}
            pickSkedge={this.pickSkedgeFromList.bind(this)}
            hideSkedgeList={this.displaySkedgeList.bind(this)} />
        }

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