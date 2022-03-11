import { useState, useContext } from "react"
import vehicleService from "../../services/vehicle.service"
import alertService from "../../services/alert.service"
import { Button, Form } from 'react-bootstrap'
import { MessageContext } from "../../context/userMessage.context"
import { AuthContext } from "../../context/auth.context"
import uploadService from "../../services/upload.service"
import { reduceDate, scheduleITV } from "../../utils"

const VehicleCreationForm = ({ closeModal, loadVehicles }) => {

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)
    const { user } = useContext(AuthContext)
    const [loadingImage, setLoadingImage] = useState(false)

    const [vehicleData, setVehicleData] = useState({
        name: '',
        photo: 'https://media.istockphoto.com/vectors/red-cartoon-car-flat-vector-illustration-icon-design-png-vector-id1326924480?k=20&m=1326924480&s=612x612&w=0&h=ezmH2drfUVNzgqKoAXpclpeY4PHd3wzHsbk3eil-ME8=',
        description: '',
        kmMonth: 0,
        purchaseDate: reduceDate(new Date().toISOString()),
        licensePlate: '',
        alertColor: "#FF7300",
        owner: user
    })

    const { name, photo, description, kmMonth, purchaseDate, licensePlate, alertColor } = vehicleData
    let createdVehicleId

    const handleInputChange = e => {

        const { value, name } = e.target

        setVehicleData({
            ...vehicleData,
            [name]: value
        })
    }

    const uploadVehicleImage = e => {
        setLoadingImage(true)
        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])
        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setVehicleData({ ...vehicleData, photo: data.cloudinary_url })
                console.log(vehicleData)
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {

        e.preventDefault()

        vehicleService
            .createVehicle(vehicleData)
            .then(({ data }) => {

                createdVehicleId = data._id
                setShowMessage(true)
                setMessageInfo({ title: 'Success', desc: 'Vehicle added' })
                loadVehicles()
                closeModal()

                // alertService.createAlert({ name: "ITV", initializedAt: data.purchaseDate.toISOString().split('T')[0], duaAt: scheduleITV(purchaseDate), vehicle: data._id })
            })
            .then(() => {
                console.log(scheduleITV(vehicleData.purchaseDate))
                alertService.createAlert({ name: "ITV", initializedAt: vehicleData.purchaseDate, dueAt: scheduleITV(vehicleData.purchaseDate), vehicle: createdVehicleId })
                loadVehicles()

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
                <Form.Control type="file" onChange={uploadVehicleImage} name="photo" placeholder="Upload a photo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Distinguishing marks</Form.Label>
                <Form.Control as="textarea" rows={3} value={description} onChange={handleInputChange} name="description" placeholder="Any special markings? Scratches, stickers,etc" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="purchseDate">
                <Form.Label>Registered on</Form.Label>
                <Form.Control type="date" value={purchaseDate} onChange={handleInputChange} name="purchaseDate" max={reduceDate(new Date().toISOString())} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="averageKmMonth">
                <Form.Label>Average km per month</Form.Label>
                <Form.Control type="number" value={kmMonth} onChange={handleInputChange} name="kmMonth" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="licensePlate">
                <Form.Label>License Plate</Form.Label>
                <Form.Control type="text" value={licensePlate} onChange={handleInputChange} name="licensePlate" placeholder="Your license plate" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="alertColor">
                <Form.Label >Reminder Color</Form.Label>
                <Form.Control
                    type="color" value={alertColor} onChange={handleInputChange} name="alertColor" />
            </Form.Group>
            <br />
            <div className="d-grid gap-2">
                <Button variant="warning" type="submit" disabled={loadingImage}> {loadingImage ? 'Uploading image' : 'Create vehicle'}</Button>
            </div>

        </Form >
    )
}

export default VehicleCreationForm


