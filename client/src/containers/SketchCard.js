import React, {Component} from 'react'
import {SketchField, Tools} from 'react-sketch';
import {Link} from 'react-router-dom'
import Button from '../components/Button'

export default class SketchCard extends Component {

  callApi = () => {
    fetch('/api/sketches/?page=1', {
    accept: 'application/json'
  }).then(res => {
    return  res.json()}
).then(responseJSON => console.log(responseJSON))
  }

  render(){
    const onLike = this.props.onLike
    const sketch = this.props.sketch
    return(
      <table className="w3-table sketch-card-container">
        <tbody>
        <tr>
        <td>
          <SketchField
            ref="sketch"
            width='200px'
            height='200px'
            defaultData={sketch.data}
            defaultDataType="json"
            tool={Tools.Pan}
          />
        </td>
        <td className="sketch-info">
          <Link to={"/sketches/" + sketch.id}><h1>{sketch.id}</h1></Link>
          <h5>{sketch.created_at}</h5>
          <Button text='Like' onClick={function(){onLike(sketch.id)}}/>
          <Button text='Call Api' onClick={this.callApi}/>
          <h5>{sketch.likes}</h5>
        </td>
        </tr>
        </tbody>
      </table>
    )
  }

}
