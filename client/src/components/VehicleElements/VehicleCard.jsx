import { Card, Button, Modal } from "react-bootstrap"
import { useEffect, useState } from "react"
import './VehicleElement.css'
import alertService from "../../services/alert.service"
import AlertForm from "../AlertElements/AlertForm"
import AlertList from "../AlertElements/AlertList"
import { formatDate } from "../../utils"


const VehicleCard = ({ name, photo, description, purchaseDate, licensePlate, owner, _id, deleteVehicle }) => {

    const vehicle = {
        name, photo, description, purchaseDate, licensePlate, owner, _id
    }

    const [currentAlerts, setCurrentAlerts] = useState([])
    const [showAlertModal, setShowAlertModal] = useState(false)
    const handleAlertModalClose = () => setShowAlertModal(false)
    const handleAlertModalOpen = () => setShowAlertModal(true)


    useEffect(() => {
        loadAlerts()
    }, [])

    const loadAlerts = () => {
        alertService
            .getVehicleAlerts(_id)
            .then(({ data }) => {
                setCurrentAlerts(data)
            })
            .catch(err => console.log(err))
    }

    const deleteAlert = (_id) => {
        alertService
            .deleteOneAlert(_id)
            .then(result => loadAlerts())
            .catch(err => console.log(err))
    }

    return (

        <Card className="CardV shadow-lg p-3 mb-5" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={photo} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted details">{licensePlate}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted details">Registered on {formatDate(purchaseDate)}</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
            </Card.Body>


            <AlertList currentAlerts={currentAlerts} refreshAlerts={loadAlerts} closeAlertModal={handleAlertModalClose} deleteAlert={deleteAlert} />


            <Button variant="warning" onClick={handleAlertModalOpen}>+</Button>

            <Modal show={showAlertModal} onHide={handleAlertModalClose} size="lg" >
                <Modal.Header closeButton>
                    <Modal.Title>New alert</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm closeAlertModal={handleAlertModalClose} refreshAlerts={loadAlerts} vehicle={vehicle} />
                </Modal.Body>
            </Modal>

            <Card.Body>
                <Button variant="warning" onClick={() => deleteVehicle(_id)}>Delete vehicle</Button>
            </Card.Body>
        </Card >

    )

}

export default VehicleCard