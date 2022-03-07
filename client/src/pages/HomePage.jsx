import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button, Container, Row } from 'react-bootstrap'
import './Style.css'
import Calendar from '../components/CalendarElements/FullCalendar'

const HomePage = () => {
    return (
        <div className="Home">
            <Container>
                <Calendar />
            </Container>
        </div>
    )
}

export default HomePage
