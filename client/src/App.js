import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import MultiplicationDrill from './MultiplicationDrill';
import Menu from './Menu';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Header />
        <Body /> */}
          {/* <MultiplicationDrill /> */}
          <Route exact path="/" component={Menu} />
          <Route exact path="/multiplication-drill" component={MultiplicationDrill} />
        </div>
      </Router>
    );
  }
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
}

export default App;
