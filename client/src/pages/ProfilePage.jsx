import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import { Container, Row, Button } from 'react-bootstrap'



const ProfilePage = () => {
    let sectreto = process.env.REACT_APP_NOT_SECRET_CODE
    return (
        <main className="Profile">
            <Container>
                <Row>
                    <Link to="#"><Button variant="primary" className="start">Start</Button>
                    </Link>
                    <h1>{sectreto}</h1>
                    <p>{process.env.REACT_APP_NOT_SECRET_CODE}</p>
                </Row>
            </Container>
            <Navbar />
        </main>
    )
}

export default ProfilePage