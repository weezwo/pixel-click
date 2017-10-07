import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/sketchActions'
import SketchFull from '../components/SketchFull'

class SketchesShow extends Component {

  componentDidMount(){
    this.props.actions.fetchSketch(this.props.sketchId)
  }

  render(){
    const sketch = this.props.sketch
    console.log(sketch)
    return(
      <div>
        {sketch.map((sketch,key) => {return(
          <SketchFull sketch={sketch} key={key}/>
        )})}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    sketchId: ownProps.match.params.sketchId,
    sketch: state.sketches.sketches
    }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default SketchesShow = connect(mapStateToProps, mapDispatchToProps)(SketchesShow)
