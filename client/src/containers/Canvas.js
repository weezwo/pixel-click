import React, {Component} from 'react'
import {SketchField, Tools} from 'react-sketch';
import SaveButton from '../components/SaveButton'
import ToolSelect from '../components/ToolSelect'
import MenuOption from '../components/MenuOption'

class Canvas extends Component {
  constructor(params){
    super(params);
    this.state ={
      lineColor: 'black',
      lineWidth: 2,
      tool: Tools.Pencil
    }

    this.onSave = this.onSave.bind(this)
    this.onToolChange = this.onToolChange.bind(this)
  }

  onSave = () => {
    console.log(this.refs.sketch.toJSON())
  }

  onToolChange = (e) => {
    this.setState({tool: e.target.value})
  }

  onColorChange = (e) => {
    this.setState({color: e.target.value})
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
        <ToolSelect onChange={this.onToolChange}>
          <MenuOption tool={Tools.Pencil} text="Pencil"/>
          <MenuOption tool={Tools.Select} text="Select"/>
        </ToolSelect>
        <SaveButton onSave={this.onSave}/>
      </div>
    );
  }
}

export default Canvas;
