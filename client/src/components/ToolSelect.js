import React, {Component} from 'react';

class ToolSelect extends Component {
  render(){
    return(
      <select onChange={this.props.onToolChange}>
        {this.props.children}
      </select>
    )
  }
}

export default ToolSelect;
