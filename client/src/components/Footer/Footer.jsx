import React, { useState, useEffect, useContext } from 'react'
import { Navbar, Container, Row, Col, Image, Button, Collapse, NavDropdown,Nav } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import './Footer.css'
import logo from "./logo.png"

import { AuthContext } from '../../context/auth.context'
import { useNavigate } from 'react-router-dom'


function Footer() {

  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const logOut = () => navigate("/")

  const [show, setShow] = useState(false)
  const controlFooter = () => {
    if (window.scrollY > 190) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', controlFooter)
    return () => {
      window.removeEventListener('scroll', controlFooter)
    }
  }, [])



  return (
    <>{user ? <>

      <Navbar collapseOnSelect expand="lg" className={`footer active ${show && 'hidden'}`} fixed="top" variant="dark">
        <Container fluid="md">
      
          <Row>
            <Col sm={2} md={12}>
          <NavLink to="/user" className="foot">
            <Image
              alt="logo"
              src={logo}
              className="d-inline-block align-top"
              style={{ borderRadius: "50%", marginRight: "25px" }}
            />
            <h1>Hello {user.name}</h1>
          </NavLink>
            </Col >
          </Row >
          <Row>
            
            <Col sm={2} md={4}>
          <NavLink to="/user/vehicles/" className="ico"><Button>My Vehicles</Button></NavLink>
            </Col>
            <Col sm={2} md={4}>
          <NavLink to="/user" className="ico2"><Button>Home</Button></NavLink>
            </Col>
            <Col sm={2} md={4}>
          <Button variant="warning" onClick={logOut}>Log Out</Button>
          </Col>
            
          </Row>
     
        </Container>
      </Navbar>

      {/* <Navbar  className='footer' variant='dark' expand="lg" style={{ marginBottom: 30 }}>
        <Container>
          <NavLink to="/user" className="foot">
            <Image
              alt="logo"
              src={logo}
              className="d-inline-block align-top"
              style={{ borderRadius: "50%", marginRight: "25px" }}
            />
            <h1>Hello {user.name}</h1>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/user/vehicles/">
                <Nav.Link as="span">Vehicle</Nav.Link>
              </NavLink>
              <NavLink to="/user">
                <Nav.Link as="span">Home</Nav.Link>
              </NavLink>
              <Nav.Link as="span" onClick={logOut}>Cerrar sesión</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </> : <></>}</>
  )
}
export default Footer