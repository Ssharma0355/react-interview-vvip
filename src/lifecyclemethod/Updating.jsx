import React, { Component } from 'react'

export default class Updating extends Component {
    componentDidUpdate(prevstate, preprop){
        if(preprop != prevstate){
            console.log("Component updated")
        }
        else{
            console.log("Not updated")
        }
    }
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
        hehe
      </div>
    )
  }
}
