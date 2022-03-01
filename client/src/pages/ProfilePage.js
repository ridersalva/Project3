import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import {Link} from 'react-router-dom'
import {Container,Row,Button} from 'react-bootstrap'


 function Profile() {
  return (
      <main className="Profile">
          <Container>
              <Row>
                  <Link to="#"><Button variant="primary" className="start">Start</Button>
                  </Link>
              </Row>
          </Container>
          <Navbar/>
      </main>
  )
}

export default Profile