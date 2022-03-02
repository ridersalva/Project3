import React from 'react'
import { Navbar as NavigationBar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'



function Navbar() {
  return (
    <>
      <NavigationBar className="Nav" fixed="bottom">
        <Nav >

        </Nav>
      </NavigationBar>
    </>
  )
}
export default Navbar