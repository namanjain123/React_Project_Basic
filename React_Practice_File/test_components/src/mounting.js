import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
class mounting extends Component{
    constructor(props) {
        super(props)
        console.log('I am  the constructor and  I will be the first to run.')
        this.state = {
          firstName: '',
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log(
          'I am getDerivedStateFromProps and I will be the second to run.'
        )
        return null
      }
      componentDidMount() {
        console.log('I am componentDidMount and I will be last to run.')
      }
    
}
export default function mounting(){
    return (
<div className='mounting'>
        <h1>React Component Life Cycle</h1>
      </div>
    );
}