import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/sketchActions'
import {SketchField, Tools} from 'react-sketch';

class SketchesShow extends Component {

  componentDidMount(){
    this.props.actions.fetchSketch(this.props.sketchId)
    console.log(this.props.sketch)
  }
  render(){
    const sketch = this.props.sketch
    return(
      <div>
      <SketchField
        ref="sketch"
        width='600px'
        height='400px'
        defaultData={sketch.data}
        defaultDataType="json"
        tool={Tools.Pan}
      />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const sketch = actions.fetchSketch(ownProps.match.params.sketchId)
  if (sketch) {
    return {sketch}
  } else {
    return {sketch: {}}
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default SketchesShow = connect(mapStateToProps, mapDispatchToProps)(SketchesShow)
