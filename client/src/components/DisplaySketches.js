import React, {Component} from 'react'
import SketchCard from '../containers/SketchCard'

export default class DisplaySketches extends Component {
  render(){
    const sketches = this.props.sketches
    return(
      <div className="sketch-cards-container">{
        sketches.map((sketch, key) =>{ return(
          <SketchCard sketch={sketch} key={sketch.id}/>
        )})}
      </div>
    )
  }

}
