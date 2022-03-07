import { useState, useContext } from "react"
import vehicleService from "../../services/vehicle.service"
import { Button, Form } from 'react-bootstrap'
import { MessageContext } from "../../context/userMessage.context"
import { AuthContext } from "../../context/auth.context"


const VehicleForm = ({ closeVehicleModal, refreshVehicles }) => {

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)
    const { user } = useContext(AuthContext)

    const [vehicleData, setVehicleData] = useState({
        name: '',
        photo: '',
        description: '',
        purchaseDate: new Date().toISOString().split('T')[0],
        licensePlate: '',
        owner: user
    })

    const { name, photo, description, purchaseDate, licensePlate, owner } = vehicleData


    const handleInputChange = e => {

        const { value, name } = e.target

        setVehicleData({
            ...vehicleData,
            [name]: value           // computed propery names
        })
    }


    const handleSubmit = e => {

        e.preventDefault()

        vehicleService
            .createVehicle(vehicleData)
            .then(({ data }) => {
                setShowMessage(true)
                setMessageInfo({ title: 'Success', desc: 'Vehicle added' })
                refreshVehicles()
                closeVehicleModal()
            })
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" placeholder="Name of the vehicle" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="photo">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" value={photo} onChange={handleInputChange} name="photo" placeholder="Upload a photo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Distinguishing marks</Form.Label>
                <Form.Control as="textarea" rows={3} value={description} onChange={handleInputChange} name="description" placeholder="Any special markings? Scratches, stickers,etc" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="purchseDate">
                <Form.Label>Date of purchase</Form.Label>
                <Form.Control type="date" value={purchaseDate} onChange={handleInputChange} name="purchaseDate" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="licensePlate">
                <Form.Label>LicensePlate</Form.Label>
                <Form.Control type="text" value={licensePlate} onChange={handleInputChange} name="licensePlate" placeholder="Your license plate" />
            </Form.Group>


            <div className="d-grid gap-2">
                <Button variant="warning" type="submit">Create vehicle</Button>
            </div>

        </Form >
    )
}

export default VehicleForm


