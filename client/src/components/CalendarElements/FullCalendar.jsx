import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import './fullC.css'
import { Container,Row,Col } from 'react-bootstrap'

const AllAlertCalendar = ({ events }) => {

    return (
        <Container>
            <Row>
                <Col sm={12} md={12}>
        <div className='full'>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
                eventColor='#ffffff'
            />
        </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AllAlertCalendar