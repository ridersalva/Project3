import { Row, Col } from 'react-bootstrap'
import VehicleCard from './VehicleCard'

const VehicleList = ({ currentVehicles, deleteVehicle }) => {

    return (
        <Row>
            {currentVehicles.map(elm => {
                return <Col md={4} key={elm._id}>
                    <VehicleCard {...elm} deleteVehicle={deleteVehicle} />
                </Col>
            })}
        </Row>
    )
}

export default VehicleList