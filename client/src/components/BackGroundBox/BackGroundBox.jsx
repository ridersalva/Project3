import React, { children } from 'react'
import './BackGroundBox.css'
import { Container } from 'react-bootstrap'

function BackGroundBox(props) {
  return (

    <div className='box'>
      <Container fluid="md">
        {props.children}
      </Container>
    </div>

  )
}
export default BackGroundBox
