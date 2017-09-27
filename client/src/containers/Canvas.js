import React, {Component} from 'react'
import {SketchField, Tools} from 'react-sketch';

class Canvas extends Component {
  constructor(params){
    super(params);
    this.state ={
      lineColor: 'black',
      lineWidth: 2,
      tool: Tools.Pencil
    }
  }

  render() {
    return (
      <div className="canvas">
        <SketchField
                ref="sketch"
                width='600px'
                height='400px'
                tool={this.state.tool}
                color={this.state.lineColor}
                lineWidth={this.state.lineWidth}
                onChange={this.handleChange}
              />
      </div>
    );
  }
}

export default Canvas;
