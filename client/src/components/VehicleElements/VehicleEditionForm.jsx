import { useState, useContext } from "react"
import vehicleService from "../../services/vehicle.service"
import { Button, Form } from 'react-bootstrap'
import { MessageContext } from "../../context/userMessage.context"
import { AuthContext } from "../../context/auth.context"
import uploadService from "../../services/upload.service"

const VehicleEditionForm = ({ closeModal, loadVehicles, vehicleToEdit }) => {




    const { setShowMessage, setMessageInfo } = useContext(MessageContext)
    const { user } = useContext(AuthContext)
    const [loadingImage, setLoadingImage] = useState(false)

    const [vehicleData, setVehicleData] = useState({
        name: vehicleToEdit.name,
        photo: vehicleToEdit.photo,
        description: vehicleToEdit.description,
        kmMonth: vehicleToEdit.kmMonth,
        alertColor: vehicleToEdit.alertColor,
        _id: vehicleToEdit._id,
        owner: user
    })

    const { name, description, kmMonth, alertColor } = vehicleData


    const handleInputChange = e => {
        console.log(vehicleData)
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

            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {

        e.preventDefault()

        vehicleService
            .editOneVehicle(vehicleData)
            .then(({ data }) => {
                setShowMessage(true)
                setMessageInfo({ title: 'Success', desc: 'Vehicle edited' })
                loadVehicles()
                closeModal()
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


            <Form.Group className="mb-3" controlId="averageKmMonth">
                <Form.Label>Average km per month</Form.Label>
                <Form.Control type="number" value={kmMonth} onChange={handleInputChange} name="kmMonth" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="alertColor">
                <Form.Label >Reminder Color</Form.Label>
                <Form.Control
                    type="color" value={alertColor} onChange={handleInputChange} name="alertColor" />
            </Form.Group>
            <br />
            <div className="d-grid gap-2">
                <Button variant="warning" type="submit" disabled={loadingImage}> {loadingImage ? 'Uploading image' : 'Edit vehicle'}</Button>
            </div>

        </Form >
    )
}

export default VehicleEditionForm


