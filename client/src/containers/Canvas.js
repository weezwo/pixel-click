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
    var data = JSON.stringify({data: this.refs.sketch.toJSON()})
    console.log(data)
    fetch('/api/sketches', {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: data
    }).then(resp => resp.json()
  ).then(json=> console.log(json))
  this.props.history.push('/sketches')
  }

  onToolChange = (e) => {
    this.setState({tool: e.target.value})
  }

  onColorChange = (e) => {
    this.setState({lineColor: e.target.value})
  }

  onWidthChange = (e) => {
    this.setState({lineWidth: +e.target.value})
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
                />
        </div>
        <div className="menus">
        <MenuSelect onChange={this.onToolChange} value={Tools.Pencil} menuName="Tool">
          <MenuOption value={Tools.Select} text="Select"/>
          <MenuOption value={Tools.Pencil} text="Pencil"/>
          <MenuOption value={Tools.Line} text="Line"/>
          <MenuOption value={Tools.Rectangle} text="Rectangle"/>
          <MenuOption value={Tools.Circle} text="Circle"/>
        </MenuSelect>

        <MenuSelect onChange={this.onColorChange} value="black" menuName="Color">
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

        <MenuSelect onChange={this.onWidthChange} value='2' menuName="Size">
          <MenuOption value='1' text='1'/>
          <MenuOption value='2' text='2'/>
          <MenuOption value='3' text='3'/>
          <MenuOption value='4' text='4'/>
          <MenuOption value='5' text='5'/>
          <MenuOption value='10' text='10'/>
          <MenuOption value='100' text='100'/>
        </MenuSelect>
        <SaveButton onSave={this.onSave}/>
        </div>
      </div>
    );
  }
}

export default Canvas;
