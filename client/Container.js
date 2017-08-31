import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from './App.js';

export default AppContainer = createContainer(() => {
  const users = Meteor.subscribe('userData');
  const user = Meteor.userId()
  return {
    user
  };
}, App);