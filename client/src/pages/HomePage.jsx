import React, { useState } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Button, Container, Row } from 'react-bootstrap'
import './Style.css'
import Cal from '../components/Calendar2/Cal'
import { useEffect } from 'react'

import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button, Container, Row } from 'react-bootstrap'
import './Style.css'

import Calendar from '../components/CalendarElements/FullCalendar'

import Cal from "../components/CalendarElements/Cal"
import AlertList from '../components/AlertElements/AlertList'


const HomePage = () => {
    const [value, setValue] = useState(moment())


    const loadAlerts = (date) => {
        //llamada al servicio de alertas para traer las que correspondan
    }

    return (
        <div className="Home">
            <Container>

                <Row>
                    <h1> Proximas Alertas</h1>

                </Row>
            </Container>
        </div>
    )
}

export default HomePage
