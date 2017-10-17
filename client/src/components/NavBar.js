import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
  render(){
    return(
      <div className='nav-bar'>
        <div className='nav-item'><Link to='/'>Draw</Link></div>
        <div className='nav-item'><Link to="/sketches">Recent</Link></div>
      </div>
    )
  }
}
