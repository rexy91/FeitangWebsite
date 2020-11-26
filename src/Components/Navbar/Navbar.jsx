import React, { Component } from 'react'
import './Navbar.scss' 
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class Navbar extends Component {
    render() {
        return (

<nav>
  <ul>
  {/* <Link className='navbar-logo'
                        style={{color:'white'}}
                        activeClass = 'active'
                        to='main'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}>
                            Yu Hao(Rex) Ye
    </Link> */}
    <Link>
    <li><a href="#0">Home</a></li>
    </Link>

    <Link
      to='about-page'
      smooth={true}
      offset={-40}
      duration= {500}
    >
    <li><a href="#0">About</a></li>
    </Link>

    <Link>
    <li><a href="#0">Clients</a></li>
    </Link>
    <Link>
    <li><a href="#0">Services</a></li>
    </Link>
    <Link
      to='contact-div'
      smooth={true}
      offset={-40}
      duration= {500}
    >
    <li><a href="#0">Contact</a></li>
    </Link>
  </ul>
</nav>
        )
    }
}
