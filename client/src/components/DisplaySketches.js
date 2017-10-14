import React, {Component} from 'react'
import Button from '../components/Button'
import SketchCard from '../components/SketchCard'

export default class DisplaySketches extends Component {
  render(){
    const sketches = this.props.sketches
    return(
      <div className="sketch-cards-container">{
        this.props.sketches.map((sketch, key) =>{ return(
          <SketchCard sketch={sketch} key={sketch.id}/>
        )})}
        <div className="pagination">
          <Button onClick={this.prevPage} text='Prev'/>
          <Button onClick={this.nextPage} text='Next'/>
        </div>
      </div>
    )
  }

}
