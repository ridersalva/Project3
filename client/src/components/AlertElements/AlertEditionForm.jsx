import { useState, useContext, useEffect } from "react"
import alertService from "../../services/alert.service"
import { Button, Form } from 'react-bootstrap'
import { MessageContext } from "../../context/userMessage.context"
import { scheduleAlert, reduceDate, } from "../../utils"


const AlertEditionForm = ({ alertData, loadAlerts }) => {

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)

    console.log("todo data", alertData)
    console.log("vehiculo", alertData.vehicle)
    console.log("id vehiculo", alertData.vehicle._id)
    console.log("alertid", alertData._id)




    const [AlertData, setAlertData] = useState({
        name: alertData.name,
        initializedAt: reduceDate(alertData.initializedAt),
        dueAt: reduceDate(alertData.dueAt),
        vehicle: alertData.vehicle._id
    })

    const { name, initializedAt, dueAt } = AlertData

    let suggestedDate = scheduleAlert(name, initializedAt, alertData.vehicle.kmMonth)

    useEffect(() => {

        setAlertData({ ...AlertData, dueAt: suggestedDate })

    }, [name, initializedAt])

    const handleInputChange = e => {
        const { value, name } = e.target
        setAlertData({
            ...AlertData,
            [name]: value,
        })
    }

    const handleSubmit = e => {

        e.preventDefault()

        alertService
            .editOneAlert(alertData._id, AlertData)
            .then(() => {
                setShowMessage(true)
                setMessageInfo({ title: 'Success', desc: 'Alert edited' })
                loadAlerts(alertData.vehicle)
            })
            .catch(err => {
                setShowMessage(true)
                setMessageInfo({ title: 'Error', desc: `You must fill all the fields. ${err}` })
                console.log(err)
            })
    }





    return (

        <Form onSubmit={handleSubmit}>
            <hr />
            <Form.Select name="name" onChange={handleInputChange} required defaultValue={name}>
                <option>Choose an alert</option>
                <option value='Oil change'>Oil change</option>
                <option value='Brake pads change'>Brake pads change</option>
                <option value='Lubrication'>Lubrication</option>
                <option value='Technical checkup'>Technical checkup</option>
                <option value='Tire pressure check'>Tire pressure check</option>
                <option value='Wipers change'>Wipers change</option>
                <option value='Clean up'>Clean up</option>
                <option value='Suspension check'>Suspension check</option>
            </Form.Select>

            <br />

            <Form.Group className="mb-3" controlId="initializedAt">
                <Form.Label>Last maintenance</Form.Label>
                <Form.Control type="date" value={initializedAt} onChange={handleInputChange} name="initializedAt" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="dueAt">
                <Form.Label>Next maintenance</Form.Label>
                <Form.Control type="date" value={dueAt} onChange={handleInputChange} name="dueAt" />
            </Form.Group>

            <div className="d-grid gap-2">
                <Button variant="warning" type="submit">Edit alert</Button>
            </div>
            <hr />
        </Form >
    )
}

export default AlertEditionForm


