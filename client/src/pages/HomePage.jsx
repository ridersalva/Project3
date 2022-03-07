<<<<<<< HEAD
import React, { useState } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Button, Container, Row } from 'react-bootstrap'
import './Style.css'
import Cal from '../components/Calendar2/Cal'
import { useEffect } from 'react'
=======
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button, Container, Row } from 'react-bootstrap'
import './Style.css'
import Cal from "../components/CalendarElements/Cal"
import AlertList from '../components/AlertElements/AlertList'
>>>>>>> 37b1ba45126a05b7e007f07e55cc4933047f97b9

const HomePage = () => {
    const [value, setValue] = useState(moment())


    const loadAlerts = (date) => {
        //llamada al servicio de alertas para traer las que correspondan
    }

    return (
        <div className="Home">
            <Container>
                <Row>
<<<<<<< HEAD
                    <Cal loadAlerts={loadAlerts} />
                </Row>
                <Row>
                    <h1> Proximas Alertas</h1>
=======
                    <Cal />
                </Row>
                <Row>
                    <AlertList />
>>>>>>> 37b1ba45126a05b7e007f07e55cc4933047f97b9
                </Row>
            </Container>
        </div>
    )
}

export default HomePage
