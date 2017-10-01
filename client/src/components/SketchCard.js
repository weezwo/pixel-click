import React, {Component} from 'react'
import {SketchField, Tools} from 'react-sketch';

export default class SketchCard extends Component {
  render(){
    const sketch = this.props.sketch
    return(
      <div>
        <SketchField
          ref="sketch"
          width='200px'
          height='200px'
          defaultData={sketch.data}
          defaultDataType="json"
          tool={Tools.Pan}
        />
        <div className="sketch-info">
          <h3>{sketch.id}</h3>
        </div>
      </div>
    )
  }

}
