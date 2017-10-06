import React, {Component} from 'react'

export default class NavBar extends Component {
  render(){
    return(
      <div className='nav-bar'>
        <div className='nav-item'><a href="/">Draw</a></div>
        <div className='nav-item'><a href="/sketches">Recent</a></div>
      </div>
    )
  }
}
