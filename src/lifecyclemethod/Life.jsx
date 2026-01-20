import React, { Component } from 'react'

export default class Life extends Component {

    // if we want to intialize this before render we make a constructor
    constructor(){
        super();
        this.state={
            count:0,
        }
    }
    componentDidMount(){
        console.log("component did mount this will come from 1st when rendered")
    }
     increment() {
        console.log("clicked")
        this.setState({count: this.state.count + 1});
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        {/* arrow fn to increment */}
        <button onClick={()=>{this.increment()}}>increment</button>
        {/* bind method to access this to increment */}
        <button onClick={this.increment.bind(this)}>increment</button>
      </div>
    )
  }
}
