import React from 'react'
import {Navbar as NavigationBar, Nav,Container}  from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faHouse} from '@fortawesome/free-solid-svg-icons'



function Navbar() {
  return (
    <>
      <NavigationBar className="Nav" fixed="bottom">
          <Nav >
            <Link to="/Vehicles"><FontAwesomeIcon icon={faHouse}/>Vehículos</Link>
          <Link to="/Alerts"><FontAwesomeIcon icon={faHouse}/><p>Alertas</p></Link>
          <Link to="/Profile"><FontAwesomeIcon icon={faHouse}/>Home</Link>
          </Nav>
      </NavigationBar>
    </>
  )
}
export default Navbar