import { ListGroup } from 'react-bootstrap'
import { reduceDate } from "../../utils/index"
import './AllAlert.css'

const AllAlertList = ({ alerts }) => {

    return (
        <ListGroup>
            {alerts.map(elm => {

                return <ListGroup.Item key={elm._id}>
                    <div style={{ width: "30%",textAlign:"center" }}> <h3>{elm.name}</h3></div>
                    <div style={{ width: "30%" ,textAlign:"center"}}><h5 className='HH5'>{reduceDate(elm.dueAt)}</h5></div>
                    <div style={{ width: "30%" ,textAlign:"center"}}><h5>{elm.vehicle.name}</h5></div>


                </ListGroup.Item >
            })}

        </ListGroup>
    )
}
export default AllAlertList