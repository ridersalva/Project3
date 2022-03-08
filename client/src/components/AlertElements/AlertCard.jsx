import { Button, ListGroup, Modal } from "react-bootstrap";
import { useState } from "react";
import { formatDate } from "../../utils";
import AlertForm from "./AlertForm";


const AlertCard = ({ name, initializedAt, dueAt, _id, deleteAlert, refreshAlerts }) => {

    const alert = { name, initializedAt, dueAt, _id }

    const [editing, setEditing] = useState(false)

    const closeAlertModal = () => setEditing(false)


    return (
        <>
            <ListGroup.Item key={_id}> <div className="alertDetails" onClick={() => setEditing(true)}>

                <p>{name}</p>
                <p>{formatDate(initializedAt)}</p>
                <p>{formatDate(dueAt)}</p>

            </div>
                <Button variant="danger" onClick={() => deleteAlert(_id)}>X</Button>
            </ListGroup.Item>

            <Modal show={editing} onHide={closeAlertModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>edit Alert</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm closeAlertModal={closeAlertModal} refreshAlerts={refreshAlerts} alert={alert} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AlertCard