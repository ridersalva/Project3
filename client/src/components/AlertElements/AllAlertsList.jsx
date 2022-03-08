import { ListGroup } from 'react-bootstrap'
import { reduceDate } from "../../utils/index"
const AllAlertList = ({ alerts }) => {

    return (
        <ListGroup >
            {alerts.map(elm => {

                return <ListGroup.Item key={elm._id}>
                    <p>{elm.name}</p>
                    <br></br>
                    <p>{reduceDate(elm.dueAt)}</p>
                    <br></br>
                    <p>{elm.vehicle.name}</p>
                </ListGroup.Item >
            })}

        </ListGroup>
    )
}
export default AllAlertList