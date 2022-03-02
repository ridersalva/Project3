import React from 'react'
import {Navbar as NavigationBar, Nav,Container, Row}  from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'



function Navbar() {
  return (
    <>
    <Container>
      <Row>
      <NavigationBar className="Nav" fixed="bottom">
            <Nav className='col-4' >
              <Link to="/Vehicles"><FontAwesomeIcon icon={faHouse} /><p>Vehículos</p></Link>
              <Link to="/Alerts"><FontAwesomeIcon icon={faHouse}/><p>Alertas</p></Link>
              <Link to="/Profile"><FontAwesomeIcon icon={faHouse} /><p>Home</p></Link>
          </Nav>
      </NavigationBar>
        </Row>
      </Container>
    </>
  )
}
export default Navbar