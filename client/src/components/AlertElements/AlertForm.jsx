import { useState, useContext, useEffect } from "react"
import alertService from "../../services/alert.service"
import { Button, Form } from 'react-bootstrap'
import { MessageContext } from "../../context/userMessage.context"



const AlertForm = ({ closeAlertModal, refreshAlerts, vehicle, alert }) => {

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)


    const [AlertData, setAlertData] = useState({
        name: alert ? alert.name : '',
        initializedAt: alert ? alert.initializedAt.split('T')[0] : new Date().toISOString().split('T')[0],
        dueAt: alert ? alert.dueAt.split('T')[0] : new Date().toISOString().split('T')[0],
        vehicle: alert ? alert.vehicle : vehicle._id
    })

    const { name, initializedAt, dueAt } = AlertData

    const handleInputChange = e => {

        const { value, name } = e.target

        setAlertData({
            ...AlertData,
            [name]: value
        })
    }

    const handleSubmit = e => {

        e.preventDefault()

        if (alert) {
            alertService
                .editOneAlert(alert._id, AlertData)
                .then(({ data }) => {
                    setShowMessage(true)
                    setMessageInfo({ title: 'Success', desc: 'Alert edited' })
                    refreshAlerts()
                    closeAlertModal()
                })
                .catch(err => console.log(err))
        }
        else {
            alertService
                .createAlert(AlertData)
                .then(({ data }) => {
                    setShowMessage(true)
                    setMessageInfo({ title: 'Success', desc: 'Alert added' })
                    refreshAlerts()
                    closeAlertModal()
                })
                .catch(err => console.log(err))
        }
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Select name="name" onChange={handleInputChange} required>
                <option>Choose an alert</option>
                <option value='CAMBIO DE ACEITE'>CAMBIO DE ACEITE</option>
                <option value='CAMBIO PASTILLAS DE FRENO'>CAMBIO PASTILLAS DE FRENO</option>
                <option value='ENGRASADO'>ENGRASADO</option>
                <option value='REVISIÓN GENERAL'>REVISIÓN GENERAL</option>
                <option value='HINCHADO DE RUEDAS'>HINCHADO DE RUEDAS</option>
                <option value='CAMBIO DE LIMPIA PARABRISAS'>CAMBIO DE LIMPIA PARABRISAS</option>
                <option value='LIMPIEZA'>LIMPIEZA</option>
                <option value='SUSPENSIONES'>SUSPENSIONES</option>
            </Form.Select>

            <hr />

            <Form.Group className="mb-3" controlId="initializedAt">
                <Form.Label>Last maintenance</Form.Label>
                <Form.Control type="date" value={initializedAt} onChange={handleInputChange} name="initializedAt" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="dueAt">
                <Form.Label>Next maintenance</Form.Label>
                <Form.Control type="date" value={dueAt} onChange={handleInputChange} name="dueAt" />
            </Form.Group>

            <div className="d-grid gap-2">
                <Button variant="warning" type="submit">Create alert</Button>
            </div>

        </Form >
    )
}

export default AlertForm


