import './Style.css'
import VehicleCard from '../components/VehicleCard/VehicleCard'
import { Container, Row, Col, Image } from 'react-bootstrap'



const VehiclePage = () => {

    return (
        <Container >
            <div className='tituloV'> <h1>Todos tus Vehículos</h1></div>
           
            <Row className='justify-content-center'>
              
                <Col className='lg-4 col-md-12 mb-4 mb-lg-0'>
                    <VehicleCard />
                </Col>
            </Row>
        </Container>
    )
}

export default VehiclePage