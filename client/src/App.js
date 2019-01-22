import React, { Component } from 'react';
import './App.css';
import MultiplicationDrill from './MultiplicationDrill';
import Menu from './Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Menu} />
            <Route exact path="/multiplication-drill" component={MultiplicationDrill} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
