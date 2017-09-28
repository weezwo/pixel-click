import React, {Component} from 'react';

class SaveButton extends Component {
  render(){
    return(
      <button onClick={this.props.onSave}>Save</button>
    )
  }
}

export default SaveButton;
