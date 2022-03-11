import { Button, ListGroup, Row, Col } from "react-bootstrap";

import { formatDate } from "../../utils";

import './AlertElement.css'


const AlertCard = ({ name, initializedAt, dueAt, _id, vehicle, deleteAlert, renderEditForm }) => {

    const alert = { name, initializedAt, dueAt, _id, vehicle }


    return (
        <ListGroup.Item className='AllAL '>

            <div style={{ width: "30%" }} >
                <h3>{name} </h3>
            </div>


            <div style={{ width: "30%" }}>
                <p className="dueAt">{formatDate(dueAt)}</p>
            </div>


            <div style={{ width: "30%", display: "flex", justifyContent: "flex-end" }}>
                {name !== "ITV" && <Button onClick={() => renderEditForm(alert)}>Edit</Button>}
                {name !== "ITV" && <Button onClick={() => deleteAlert(_id)}>Delete</Button>}
            </div>


        </ListGroup.Item >
    )
}

export default AlertCard