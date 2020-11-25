import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Landing from './Components/Landing/Landing'
import About from './Components/About/About'

export default class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <Landing/>
          <About/>
      </div>
    )
  }
}
