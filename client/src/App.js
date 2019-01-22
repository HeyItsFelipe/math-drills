import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MultiplicationDrill from './MultiplicationDrill';
import Menu from './Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Menu} />
          <Route exact path="/multiplication-drill" component={MultiplicationDrill} />
        </div>
      </Router>
    );
  }
}

export default App;
