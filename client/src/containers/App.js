import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import '../App.css';
import Canvas from './Canvas'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path='/' component={Canvas}/>
        </Router>
      </div>
    );
  }
}

export default App;
