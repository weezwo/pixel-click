import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import '../App.css';
import Canvas from './Canvas'
import SketchesPage from './SketchesPage'
import SketchesShow from './SketchesShow'
import NavBar from '../components/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>PixelClick</h1>
          <NavBar/>
        </header>
      <Router>
        <Switch>
          <Route exact path='/' component={Canvas}/>
          <Route exact path='/sketches' component={SketchesPage}/>
          <Route exact path='/sketches/:sketchId' component={SketchesShow}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
