import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/sketchActions'


class SketchesPage extends Component {
  render(){
    return(
      <div>HEY</div>
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
