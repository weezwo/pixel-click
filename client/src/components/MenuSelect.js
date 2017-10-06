import React, {Component} from 'react';

class MenuSelect extends Component {
  render(){
    return(
      <div className="menu">
      <h3>{this.props.menuName}</h3>
      <select onChange={this.props.onChange} defaultValue={this.props.value}>
        {this.props.children}
      </select>
      </div>
    )
  }
}

export default MenuSelect;
