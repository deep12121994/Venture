import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import HomePage from './HomePage';
import LogIn from "./auth/LogIn";


class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/" component={LogIn} />
          </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
