import React, { Component } from 'react';

export default class Updating extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.number);
    console.log(this.props.number);

    if (prevProps.number !== this.props.number) {
      console.log("Component updated");
    } else {
      console.log("Not updated");
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
        hehe
      </div>
    );
  }
}
