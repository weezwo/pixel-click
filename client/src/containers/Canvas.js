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
        <MenuSelect onChange={this.onToolChange} value={Tools.Pencil}>
          <MenuOption value={Tools.Select} text="Select"/>
          <MenuOption value={Tools.Pencil} text="Pencil"/>
          <MenuOption value={Tools.Rectangle} text="Rectangle"/>
          <MenuOption value={Tools.Circle} text="Circle"/>
        </MenuSelect>

        <MenuSelect onChange={this.onColorChange} value="black">
          <MenuOption value='black' text="Black"/>
          <MenuOption value='red' text="Red"/>
          <MenuOption value='orange' text="Orange"/>
          <MenuOption value='yellow' text="Yellow"/>
          <MenuOption value='green' text="Green"/>
          <MenuOption value='blue' text="Blue"/>
          <MenuOption value='purple' text="Purple"/>
          <MenuOption value='violet' text="Pink"/>
          <MenuOption value='brown' text="Brown"/>
          <MenuOption value='white' text="White"/>
        </MenuSelect>
        <SaveButton onSave={this.onSave}/>
      </div>
    );
  }
}

export default Canvas;
