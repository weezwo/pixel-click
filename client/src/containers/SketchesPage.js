import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/sketchActions'
import SketchCard from '../components/SketchCard'

class SketchesPage extends Component {

  constructor(props){
    super(props);
    this.state={
      page: 1,
    }
  }

  nextPage = () => {
    console.log(this.props.sketches.some((sketch)=>sketch.id === 1))
    if(!this.props.sketches.some((sketch)=>sketch.id === 1)){
      this.setState({
        page: this.state.page + 1
      })
    }
  }

  prevPage = () => {
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 1
      })
    }
  }

  componentWillUpdate(nextProps, nextState){
    if(this.state.page !== nextState.page){this.props.actions.fetchSketches(nextState.page)}
  }

  componentDidMount(){
    this.props.actions.fetchSketches(this.state.page)
  }
  render(){
    return(
      <div className="sketch-cards-container">{
        this.props.sketches.map((sketch, key) =>{ return(
          <SketchCard sketch={sketch} key={sketch.id}/>
        )})}
        <div className="pagination">
          <button onClick={this.prevPage}>Prev</button>
          <button onClick={this.nextPage} >Next</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {sketches: state.sketches.sketches}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default SketchesPage = connect(mapStateToProps, mapDispatchToProps)(SketchesPage)
