import React, {Component} from 'react';

class MenuSelect extends Component {
  render(){
    return(
      <select onChange={this.props.onChange}>
        {this.props.children}
      </select>
    )
  }
}

export default MenuSelect;
