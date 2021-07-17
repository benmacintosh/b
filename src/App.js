import React, { Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import './App.css';

import home from './home.js'
import aac from './aac.js'


class App extends Component {
  render() {
    return (
      <div>

      <Switch>
            <Route exact path='/' component={home} />
            <Route exact path='/aac' component={aac} />
          </Switch>

      </div>
    );
  }
}

export default App;
