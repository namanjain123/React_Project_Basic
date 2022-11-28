import React, { Component } from 'react'
// if it is functional components
class App extends Component {
  handleClick = () => {
    alert('Test Alert')
  }
  render() {
    return (
      <a href='#' onClick={this.handleClick}>
        Click me
      </a>
    )
  }
}