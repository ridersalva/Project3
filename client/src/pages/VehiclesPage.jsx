
import vehicleService from "../services/vehicle.service"
import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../context/auth.context"
import { Container, Row, Modal } from "react-bootstrap"
import VehicleDummy from "../components/VehicleElements/VehicleDummy"
import VehicleList from "../components/VehicleElements/VehicleList"
import VehicleCreationForm from "../components/VehicleElements/VehicleCreationForm"
import VehicleEditionForm from "../components/VehicleElements/VehicleEditionForm"
import './Style.css'

const VehiclePage = () => {

    const { user } = useContext(AuthContext)

    const [allVehicles, setAllVehicles] = useState([])
    const [modal, setModal] = useState(false)
    const [editing, setEditing] = useState(false)
    const [vehicleToEdit, setVehicleToEdit] = useState(undefined)


    const closeModal = () => {
        setModal(false)
        setEditing(false)
    }
    const openModal = () => setModal(true)

    useEffect(() => {
        loadVehicles()
    }, [user])

    const loadVehicles = () => {

        vehicleService
            .getAllVehicles()
            .then(({ data }) => {
                setAllVehicles(data)
            })
            .catch(err => console.log(err))
    }

    const editVehicle = (_id) => {

        vehicleService
            .getOneVehicle(_id)
            .then(({ data }) => {
                setVehicleToEdit(data)
                setEditing(true)
                setModal(true)
            })
            .catch(err => console.log(err))
    }

    const deleteVehicle = (_id) => {

        vehicleService
            .deleteOneVehicle(_id)
            .then(() => loadVehicles())
            .catch(err => console.log(err))
    }




    return (<>

        <Container>
            <Row>
                <VehicleList allVehicles={allVehicles} deleteVehicle={deleteVehicle} editVehicle={editVehicle} />
                <VehicleDummy openModal={openModal} />
            </Row>
        </Container>

        <Modal show={modal} onHide={closeModal} size="md">
            <Modal.Header closeButton>
                <Modal.Title>{editing ? "Edit vehicle" : "Create vehicle"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {!editing ? <VehicleCreationForm closeModal={closeModal} loadVehicles={loadVehicles} />
                    : <VehicleEditionForm closeModal={closeModal} loadVehicles={loadVehicles} vehicleToEdit={vehicleToEdit} />}
            </Modal.Body>
        </Modal>

      
    </>
    )

}

export default VehiclePage