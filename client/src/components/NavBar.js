import React, {Component} from 'react'

export default class NavBar extends Component {
  render(){
    return(
      <div className='nav-bar'>
        <div className='nav-item'>Draw</div>
        &nbsp;|&nbsp;
        <div className='nav-item'>Recent Drawings</div>
      </div>
    )
  }
}
