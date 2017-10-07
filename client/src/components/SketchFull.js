import React, {Component} from 'react'
import {SketchField, Tools} from 'react-sketch';

export default class SketchFull extends Component {
  render(){
    const {sketch} = this.props
    return(
      <div>
        <div className="canvas">
          <SketchField
            ref="sketch"
            width='600px'
            height='400px'
            defaultData={sketch.data}
            defaultDataType="json"
            tool={Tools.Pan}
          />
        </div>
        <div className="full-sketch-info">
        <strong>Sketch ID:</strong> {sketch.id}<br/>
        <strong>Timestamp:</strong> {sketch.created_at}
        </div>
      </div>
    )
  }
}
