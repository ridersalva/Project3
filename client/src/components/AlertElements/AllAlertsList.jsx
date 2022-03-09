import { ListGroup } from 'react-bootstrap'
import { reduceDate } from "../../utils/index"
import './AlertElement.css'

const AllAlertList = ({ alerts }) => {

    return (
        <ListGroup >
            {alerts.map(elm => {

                return <ListGroup.Item key={elm._id}>
                    <h3>{elm.name}</h3>
                    <br></br>
                    <h5>{reduceDate(elm.dueAt)}</h5>
                    <br></br>
                    <h5>{elm.vehicle.name}</h5>
                </ListGroup.Item >
            })}

        </ListGroup>
    )
}
export default AllAlertList