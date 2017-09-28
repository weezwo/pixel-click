import React, {Component} from 'react';

class MenuOption extends Component {
  render(){
    return(
      <option value={this.props.value}>{this.props.text}</option>
    )
  }
}

export default MenuOption;
