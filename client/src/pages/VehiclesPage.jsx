import './Style.css'
import { useState, useEffect, useContext } from 'react'
import vehicleService from '../services/vehicle.service'
import VehicleList from '../components/VehicleElements/VehicleList'
import { Container, Modal, Card } from 'react-bootstrap'
import VehicleForm from '../components/VehicleElements/VehicleForm'
import { AuthContext } from '../context/auth.context'
import car from "../components/VehicleElements/car.png"

const VehiclePage = () => {

    const [currentVehicles, setCurrentVehicles] = useState([])
    const [showVehicleModal, setShowVehicleModal] = useState(false)

    const { isLoggedIn, user } = useContext(AuthContext)


    useEffect(() => {
        loadVehicles()
    }, [])

    const loadVehicles = () => {
        vehicleService
            .getAllVehicles(user._id)
            .then(({ data }) => setCurrentVehicles(data))
            .catch(err => console.log(err))
    }

    const deleteVehicle = (_id) => {
        vehicleService
            .deleteOneVehicle(_id)
            .then(() => loadVehicles())
            .catch(err => console.log(err))
    }

    const handleVehicleModalClose = () => setShowVehicleModal(false)
    const handleVehicleModalOpen = () => setShowVehicleModal(true)

    return (
        <>
            <Container>
                <h1>YOUR VEHICLES</h1>

                <VehicleList currentVehicles={currentVehicles} deleteVehicle={deleteVehicle} />

                {isLoggedIn && <Card onClick={handleVehicleModalOpen} className="CardV shadow-lg p-3 mb-5" style={{ width: '18rem' }}>
                    <Card.Title style={{ alignSelf: "center" }}>ADD A VEHICLE</Card.Title>
                    <Card.Img src={car} />
                </Card>}
                <hr />

            </Container>

            <Modal show={showVehicleModal} onHide={handleVehicleModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>New vehicle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <VehicleForm closeVehicleModal={handleVehicleModalClose} refreshVehicles={loadVehicles} />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default VehiclePage