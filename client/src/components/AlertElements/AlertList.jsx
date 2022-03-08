import { Button, ListGroup } from "react-bootstrap";
import AlertCard from "./AlertCard";
import './AlertElement.css'

const AlertList = ({ currentAlerts, deleteAlert, refreshAlerts, closeAlertModal }) => {

    return (

        <ListGroup >
            {currentAlerts.map(elm => {
                return <AlertCard key={elm._id}{...elm} deleteAlert={deleteAlert} refreshAlerts={refreshAlerts
                } closeAlertModal={closeAlertModal} />
            })}
        </ListGroup>


    )
}


export default AlertList