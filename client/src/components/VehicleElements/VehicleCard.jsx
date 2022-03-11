import { Card, Button, Modal } from "react-bootstrap"
import { useEffect, useState } from "react"
import './VehicleElement.css'
import alertService from "../../services/alert.service"
import HelpElement from './HelpElement'
import { formatDate, scheduleITV } from "../../utils"


const VehicleCard = ({ name, photo, description, purchaseDate, kmMonth, licensePlate, owner, _id, deleteVehicle, editVehicle, loadAlerts }) => {

    const vehicleData = { name, photo, description, purchaseDate, kmMonth, licensePlate, owner, _id, }




    return (

        <Card className="CardV zoom shadow-lg p-3 mb-5" style={{ width: '18rem' }}>
            <Card.Body onClick={() => loadAlerts(vehicleData)} >
                <Card.Img className='cardImg' variant="top" src={photo} />
                <Card.Title><h1>{name}</h1></Card.Title>
                <Card.Subtitle className="mb-2  details"><span style={{ fontWeight: "bolder" }}>ITV {formatDate(scheduleITV(purchaseDate))}</span></Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted details">{licensePlate}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted details">{kmMonth} km/month on average</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
            </Card.Body>

            <Card.Body>
                <Button className='cardButtons' variant="warning" onClick={() => loadAlerts(vehicleData)}>Alerts</Button>
                <Button className='cardButtons' variant="warning" onClick={() => editVehicle(_id)}>Edit</Button>
                <Button className='cardButtons' variant="warning" onClick={() => deleteVehicle(_id)}>Delete</Button>
                < HelpElement />
            </Card.Body>
           
        </Card >
    )

}

export default VehicleCard

    