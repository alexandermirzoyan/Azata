import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage.js';
import SuggestionPopUp from '../components/SuggestionPopUp/SuggestionPopUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route exact path="/" component={HomePage} />
    {/*<Route exact path="/pop-up" component={SuggestionPopUp} /> */}
      </BrowserRouter>
    )
  }
}

export default App;
