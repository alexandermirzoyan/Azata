import React, { Component, Fragment } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from "../pages/HomePage/HomePage.js"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <HomePage/>
          <Switch>

          </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
