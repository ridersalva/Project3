import { Col, Card, Button } from "react-bootstrap"
import car from "./car.png"


const VehicleDummy = ({ openModal }) => {


    return (

        < Col >
            <Card className="CardV shadow-lg p-3 mb-5" style={{ width: '18rem' }}>
                <Card.Body onClick={() => openModal()} >
                    <Card.Img variant="top" src={car} />
                    <Card.Title className="blur">NEW VEHICLE</Card.Title>
                    <Card.Subtitle className="mb-2  details blur">ITV 01-01-2000</Card.Subtitle>
                    <Card.Subtitle className="mb-2 details blur">1234XYZ</Card.Subtitle>
                    <Card.Subtitle className="mb-2 details blur">1234 km/month on average</Card.Subtitle>
                    <Card.Text className="blur">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button variant="warning" onClick={() => openModal()} >Add vehicle</Button>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default VehicleDummy