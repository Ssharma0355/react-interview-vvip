import React, { Component } from 'react'
import UpdateClass from "./UpdateClass"
import UpdateFunc from './UpdateFunc';

export default class LifeClass extends Component {
    //  before render initialization
    constructor(){
        super();
        this.state={
            count:0,
        }
    }
    componentDidMount(){
      console.log("Mounting 1st after render")
  }
    componentWillUnmount(){
        console.log("Component unmount")
    }
   
    increment(){
        this.setState({count: this.state.count + 1})
    }

  render() {
    return (
      <div>
        {/* <h1>{this.state.count}</h1> */}
        {/* <UpdateClass number={this.state.count}></UpdateClass> */}
        <UpdateFunc number={this.state.count}  />
        <button onClick={this.increment.bind(this)}>Increment</button>
      </div>
    )
  }
}
