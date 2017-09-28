import React, {Component} from 'react'
import {SketchField, Tools} from 'react-sketch';
import SaveButton from '../components/SaveButton'

class Canvas extends Component {
  constructor(params){
    super(params);
    this.state ={
      lineColor: 'black',
      lineWidth: 2,
      tool: Tools.Pencil
    }

    this.onSave = this.onSave.bind(this)
  }

  onSave = () => {
    console.log(this.refs.sketch.toJSON())
  }

  render() {
    return (
      <div>
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
        <SaveButton onSave={this.onSave}/>
      </div>
    );
  }
}

export default Canvas;
