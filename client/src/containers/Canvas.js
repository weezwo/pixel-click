import React, {Component} from 'react'
import {SketchField, Tools} from 'react-sketch';
import SaveButton from '../components/SaveButton'
import MenuSelect from '../components/MenuSelect'
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
    this.setState({lineColor: e.target.value})
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
                  lineColor={this.state.lineColor}
                  lineWidth={this.state.lineWidth}
                  onChange={this.handleChange}
                />
        </div>
        <MenuSelect onChange={this.onToolChange}>
          <MenuOption value={Tools.Pencil} text="Pencil"/>
          <MenuOption value={Tools.Select} text="Select"/>
        </MenuSelect>

        <MenuSelect onChange={this.onColorChange}>
          <MenuOption value='black' text="Black"/>
          <MenuOption value='blue' text="Blue"/>
        </MenuSelect>
        <SaveButton onSave={this.onSave}/>
      </div>
    );
  }
}

export default Canvas;
