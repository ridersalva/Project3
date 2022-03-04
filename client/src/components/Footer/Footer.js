import React from 'react'
import { Navbar, Container, Image, Button } from 'react-bootstrap'
import { NavLink,Link } from 'react-router-dom'
import './Footer.css'
import logo from "./logo.png"



function Footer() {

  let user = "Usuario"
  return (
    <>
      <Navbar className='footer' fixed="top" variant="dark">
        <Container>
          <NavLink to="/home" className="foot">
            <Image
              alt="logo"
              src={logo}
              className="d-inline-block align-top"
              style={{ borderRadius: "50%", marginRight: "25px" }}
            />
            <h1>Hello {user}</h1>
         </NavLink>
          <Link to="#">
          <Button>
            + Vehcicle
          </Button>
          </Link>
          <Link to="#">
          <Button>
            + Alert
          </Button>
          </Link>
        </Container>
      </Navbar>

    </>
  )
}
export default Footer