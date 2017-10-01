import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/sketchActions'
import SketchCard from '../components/SketchCard'

class SketchesPage extends Component {

  componentDidMount(){
    this.props.actions.fetchSketches()
  }
  render(){
    return(
      <div className="sketch-cards-container">{
        this.props.sketches.map((sketch, key) =>{ return(
          <SketchCard sketch={sketch} key={sketch.id}/>
        )})}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {sketches: state.sketches.sketches}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default SketchesPage = connect(mapStateToProps, mapDispatchToProps)(SketchesPage)
