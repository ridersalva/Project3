import React, { useContext } from 'react'
import { Navbar, Container, Image, Button } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import './Footer.css'
import logo from "./logo.png"
import home from "./Icons/home.png"
import clip from "./Icons/clipboard.png"
import { AuthContext } from '../../context/auth.context'
import { useNavigate } from 'react-router-dom'


function Footer() {

  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const logOut = () => navigate("/")

  return (
    <>{user ? <>
      <Navbar className='footer' fixed="top" variant="dark">
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
          <NavLink to="/user/vehicles/"><Image src={clip} alt='vehicles' /></NavLink>
          <NavLink to="/user"><Image src={home} alt='alerts' /></NavLink>
          <Button variant="warning" onClick={logOut}>Log Out</Button>
        </Container>
      </Navbar>

    </> : <></>}</>
  )
}
export default Footer