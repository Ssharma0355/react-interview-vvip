import React, { Component } from 'react'

export default class UpdateClass extends Component {
    componentDidUpdate(prevProp, preState){
        console.log(prevProp.number);
        console.log(this.props.number)
        if(prevProp.number != this.props.number){
         console.log("Component update")
        }
    }
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}
