import React, {Component} from 'react'
import {SketchField, Tools} from 'react-sketch';

export default class SketchCard extends Component {
  render(){
    return(
      <div>
        <SketchField
            ref="sketch"
            width='200px'
            height='200px'
            defaultData={this.props.sketch.data}
            defaultDataType="json"
            tool={Tools.Pan}
          />
      </div>
    )
  }

}
