import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import '../App.css';
import Canvas from './Canvas'
import SketchesPage from './SketchesPage'

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Canvas}/>
          <Route path='/sketches' component={SketchesPage}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
