import React, { Component } from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage/HomePage'
import AboutUs from '../pages/AboutUs/AboutUs'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route exact path="/" component={HomePage} />
          <Route path="/about-us" component={AboutUs} />
      </BrowserRouter>
    )
  }
}

export default App;
