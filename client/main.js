import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../startup/accounts-config.js';
import App from './App.js';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('root'));
});