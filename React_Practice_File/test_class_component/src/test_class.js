import React from 'react'
import ReactDOM from 'react-dom'
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome </h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Naman Jain</p>
      <small>Oct 2, 2022</small>
    </div>
  </header>
)
const rootElement = document.getElementById('root')
ReactDOM.render(<Header />, rootElement)