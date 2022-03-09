import React, { useState, useEffect } from 'react'
import AllAlertCalendar from '../components/CalendarElements/FullCalendar'
import { Container, Row, Col } from 'react-bootstrap'
import './Style.css'
import alertService from '../services/alert.service'
import AllAlertList from '../components/AlertElements/AllAlertsList'


const HomePage = () => {
    const eventArr = []

    const [currentEvents, setCurrentEvents] = useState([])
    const [currentAlerts, setCurrentAlerts] = useState([])


    useEffect(() => {
        loadCurrentAlerts()
    }, [])

    const loadCurrentAlerts = () => {

        alertService
            .getUserAlerts()
            .then(({ data }) => {

                setCurrentAlerts(data)
                data.forEach((elm) => {

                    eventArr.push({
                        title: elm.name, date: elm.dueAt.split('T')[0], backgroundColor: elm.vehicle.alertColor
                    })
                })
            })
            .then(() => setCurrentEvents(eventArr))
            .catch(err => console.log(err))
    }

    return (
      

            <Container>
          
                <Row>
                            <AllAlertCalendar events={currentEvents} />
                        <AllAlertList alerts={currentAlerts} />
                </Row>
        
            </Container>
      
    )
}

export default HomePage
