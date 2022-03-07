import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
import './VehicleCard.css'


const VehicleCard = (props) => {

    const { name, photo, description, purchaseDate, vehicleType, identifier, owner } = props
    return (

        <Card className="CardV shadow-lg p-3 mb-5" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://media.istockphoto.com/vectors/red-cartoon-car-flat-vector-illustration-icon-design-png-vector-id1326924480?k=20&m=1326924480&s=612x612&w=0&h=ezmH2drfUVNzgqKoAXpclpeY4PHd3wzHsbk3eil-ME8=" />
            <Card.Body>
                <Card.Title>MiCarro</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">MATRICULA</Card.Subtitle>
                <Card.Text>
                    los arañazos y el color
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush p-3 mb-5">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Alerts</Card.Link>
                <Card.Link href="#">Edit</Card.Link>
                <Card.Link href="#">Delete</Card.Link>
            </Card.Body>
        </Card>

    )
}

export default VehicleCard