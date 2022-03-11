import React, { useState, useEffect, useContext } from 'react'
import { ExternalLink } from 'react-external-link';
import { Navbar as NavigationBar, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.css'
import ih from './ih_logo.png'
import insta from './insta.png'

import { AuthContext } from '../../context/auth.context'


function Navbar() {

  const [show, setShow] = useState(false)
  const controlNavbar = () => {
    if (window.scrollY < 190) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])
  const { user } = useContext(AuthContext)


  return (

    <>{user ? <><NavigationBar className='Nav' fixed="bottom">

      <Nav className={`active ${show && 'hidden'}`} >
        <p> To know more plase Click the links </p>
        <ExternalLink href="https://www.ironhack.com/es/contacto" ><Image className='Logg' src={ih} alt='Iron Hack logo' /></ExternalLink>
        <ExternalLink href="https://www.instagram.com/ironhackmad/" ><Image className='Logg' src={insta} alt='Iron Hack logo' /></ExternalLink>
        <Link to="/user/contact" ><p>Contact</p></Link>
      </Nav>

    </NavigationBar></> : <></>}</>


  )
}
export default Navbar
