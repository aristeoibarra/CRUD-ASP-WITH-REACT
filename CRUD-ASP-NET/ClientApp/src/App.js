import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Employees from './components/Employees';
import Departments from './components/Departments';
import Positions from './components/Positions';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Employees} />
        <Route path='/positions' component={Positions} />
        <Route path='/departments' component={Departments} />
      </Layout>
    );
  }
}
