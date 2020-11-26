import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Landing from './Components/Landing/Landing'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

export default class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <Landing/>
          <About/>
          <Contact/>
      </div>
    )
  }
}
