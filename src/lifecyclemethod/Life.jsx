import React, { Component } from 'react'
import Updating from './Updating';
import Counter1 from './Counter1';

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
    componentWillUnmount(){
        console.log("Component unmount")
    }
     increment() {
        this.setState({count: this.state.count + 1});
    }
  render() {
    return (
      <div>
        {/* <h1>{this.state.count}</h1> */}
        <Updating number={this.state.count}></Updating>
        <Counter1 number={this.state.count} />
        {/* sending as a prop for update */}
        {/* arrow fn to increment */}
        <button onClick={()=>{this.increment()}}>increment</button>
        {/* bind method to access this to increment */}
        <button onClick={this.increment.bind(this)}>increment</button>
        
      </div>
    )
  }
}
