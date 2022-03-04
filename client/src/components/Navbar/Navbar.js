import React from 'react'
import { Navbar as NavigationBar, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.css'
import home from "./Icons/home.png"
import bell from "./Icons/bell.png"
import clip from "./Icons/clipboard.png"


function Navbar() {
  return (
    <NavigationBar className='Nav' fixed="bottom">
      <Nav className='Navv'>
        <Link to="/user/vehicles/" ><Image src={clip} alt='vehicles' /></Link>
        <Link to="/user/alerts">< Image src={bell} alt="alerts" /></Link>
        <Link to="/user"><Image src={home} alt='home' /></Link>
      </Nav>
    </NavigationBar>
  )
}
export default Navbar