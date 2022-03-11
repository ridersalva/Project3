import { Col, Modal, Badge, Button } from "react-bootstrap"
import alertService from "../../services/alert.service"
import VehicleCard from "./VehicleCard"
import AlertCard from "../AlertElements/AlertCard"
import AlertCreationForm from "../AlertElements/AlertCreationForm"
import { useState } from "react"
import AlertEditionForm from "../AlertElements/AlertEditionForm"
import './VehicleElement.css'

const VehicleList = ({ allVehicles, deleteVehicle, editVehicle }) => {
    const [showAlertModal, setShowAlertModal] = useState(false)
    const [currentAlerts, setCurrentAlerts] = useState([])

    const [vehicleData, setVehicleData] = useState()
    const [alertData, setAlertData] = useState()

    const [editForm, setEditForm] = useState(false)
    const [createForm, setCreateForm] = useState(false)

    const alertModalClose = () => {
        setCreateForm(false)
        setEditForm(false)
        setShowAlertModal(false)
    }

    const alertModalOpen = () => {
        setCreateForm(false)
        setEditForm(false)
        setShowAlertModal(true)
    }



    const deleteAlert = (alert_id) => {

        alertService
            .deleteOneAlert(alert_id)
            .then(() => loadAlerts(vehicleData))
            .catch(err => console.log(err))
    }


    const loadAlerts = (vehicle) => {
        alertModalClose()
        alertService
            .getVehicleAlerts(vehicle._id)
            .then(({ data }) => {
                setCurrentAlerts(data)
                setVehicleData(vehicle)
                alertModalOpen()
            })
            .catch(err => console.log(err))
    }

    const renderAlertForm = () => {
        setCreateForm(true)
        setEditForm(false)
    }


    const renderEditForm = (alert) => {
        setAlertData(alert)
        setCreateForm(false)
        setEditForm(true)
    }


    return (
        // <Container fluid="md">
        //     <Row xs={1} md={2}>
        //         {currentVehicles.map(elm => {
        //             return <Col  md={4} key={elm._id}>
        //                 <VehicleCard {...elm} deleteVehicle={deleteVehicle} />
        //             </Col>
        //         })}
        //     </Row>

        // </Container>
        <>
            {allVehicles.map(elm => {

                return <Col md={4} key={elm._id} >
                    <VehicleCard {...elm} deleteVehicle={deleteVehicle}
                        editVehicle={editVehicle} loadAlerts={loadAlerts} />
                </Col>
            })}

            <Modal className="Modall" show={showAlertModal} onHide={alertModalClose} >

                <Modal.Header closeButton>
                    <Modal.Title><h3>Next alerts</h3></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div style={{textAlign:"center"}}>
                        {!createForm && !editForm && <Button variant="warning" text="dark" onClick={() => renderAlertForm()} ><h1 >ADD ALERT</h1></Button>}
                    </div>
                    <br />
                    {createForm && <AlertCreationForm vehicleData={vehicleData} loadAlerts={loadAlerts} />}
                    {editForm && <AlertEditionForm alertData={alertData} loadAlerts={loadAlerts} />}
                    <br />


                    {currentAlerts.map(elm =>
                        <>
                            <AlertCard {...elm} deleteAlert={deleteAlert} renderEditForm={renderEditForm} />
                        </>
                    )}

                </Modal.Body>




            </Modal>





        </>
    )
}

export default VehicleList