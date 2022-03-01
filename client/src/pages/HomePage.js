import React from 'react'
import { Link } from 'react-router-dom'
import { Button,Container,Row } from 'react-bootstrap'
import './Style.css'

function Home() {
    return (
        <div className="Home">
            <Container>
                <Row>
                    <Link to="#"><Button variant="primary" className="start">Start</Button>
                    </Link>
                </Row>
            </Container>
        </div>
    )
}

export default Home
