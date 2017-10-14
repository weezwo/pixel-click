import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/sketchActions'
import DisplaySketches from '../components/DisplaySketches'
import Button from '../components/Button'

class SketchesPage extends Component {

  constructor(props){
    super(props);
    this.state={
      page: 1,
    }
  }

  nextPage = () => {
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
      const sketchesExist = this.props.sketches.length > 0
    return(
      <div>
        {sketchesExist ? (
          <div>
            <DisplaySketches sketches={this.props.sketches}/>
            <div className="pagination">
              <Button onClick={this.prevPage} text='Prev'/>
              <Button onClick={this.nextPage} text='Next'/>
            </div>
          </div>
        ) : (
          <p className='no-sketch'>No sketches yet! Why not <a href='/'>draw</a> one?</p>
        )
        }
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
