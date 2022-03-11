import React, { useContext, useState } from 'react'
import { Container, Form, Row, Button, Col, Image } from 'react-bootstrap'
import './Contact.css'
import lost from './lost.jpg'
import Footer from "../Footer/Footer"
import alertService from '../../services/alert.service'
import { useNavigate } from 'react-router-dom'
import { MessageContext } from '../../context/userMessage.context'

function ContactElement() {

    const [contactData, setContactData] = useState({
        text: "",
        email: ""
    })

    const navigate = useNavigate()
    const { setMessageInfo, setShowMessage } = useContext(MessageContext)

    const { text, email } = contactData

    const handleInputChange = e => {
        const { value, name } = e.target

        setContactData({
            ...contactData,
            [name]: value
        })
    }


    const handleSubmit = e => {

        e.preventDefault()

        alertService
            .sendEmail(contactData)
            .then(({ data }) => {
                setShowMessage(true)
                setMessageInfo({ title: 'Success', desc: 'our team will contact you soon' })
                console.log("yeahhhhhhhh")
                navigate("/")
            })
        
            .catch(err => console.log(err))
    }


    return (
        <>
            <Footer />
            <Container>
                <Row>
                    <Col md={4} >
                        <Image className="lost" src={lost} alt='lost img' />
                    </Col>
                    <Col md={8}>

                        <Form className='cont' onSubmit={handleSubmit}>
                            <h1>Doubts? Plase Contact us¡¡</h1>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Yuor email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" name="email" value={contactData.email} onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Write to Us</Form.Label>
                                <Form.Control name="text" value={contactData.text} onChange={handleInputChange} as="textarea" rows={3} />
                            </Form.Group>
                            <Button className="buttonS" type="submit">
                                Send
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ContactElement