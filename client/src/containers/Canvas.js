import React, { Component} from 'react'
import {SketchField, Tools} from 'react-sketch';

class Canvas extends Component {
  render() {
    return (
      <div className="canvas">
        <SketchField width='600px'
                height='400px'
                tool={Tools.Pencil}
                color='black'
                lineWidth={3}/>
      </div>
    );
  }
}

export default Canvas;
