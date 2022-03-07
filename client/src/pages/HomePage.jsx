import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button, Container, Row } from 'react-bootstrap'
import './Style.css'
import Cal from "../components/CalendarElements/Cal"
import AlertList from '../components/AlertElements/AlertList'

const HomePage = () => {
    return (
        <div className="Home">
            <Container>
                <Row>
                    <Cal />
                </Row>
                <Row>
                    <AlertList />
                </Row>
            </Container>
        </div>
    )
}

export default HomePage
