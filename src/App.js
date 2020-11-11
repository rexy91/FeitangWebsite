import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Landing from './Components/Landing/Landing'

export default class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <Landing/>
      </div>
    )
  }
}
