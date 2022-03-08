import "./SignUpForm.css"
import { useState, useContext, useEffect } from "react"
import { Form, Button, } from "react-bootstrap"
import authService from "../../services/auth.service"
import { useNavigate, Link } from "react-router-dom"
import { MessageContext } from "../../context/userMessage.context"
import { AuthContext } from "../../context/auth.context"
const SignUpForm = () => {


    const { logOutUser } = useContext(AuthContext)

    useEffect(() => { logOutUser() }, [])

    const [signUpForm, setSignUpForm] = useState({
        name: "",
        password: "",
        email: ""
    })

    const { setMessageInfo, setShowMessage } = useContext(MessageContext)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setSignUpForm({
            ...signUpForm,
            [name]: value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        authService
            .signup(signUpForm)
            .then(({ data }) => {
                setShowMessage(true)
                setMessageInfo({ title: 'Éxito', desc: 'Te has registrado correctamente' })
                navigate('/')
            })
            .catch(err => console.log(err))
    }


    return (

        <Form className="form text-center" onSubmit={handleSubmit}>


            <Form.Group className="mb-3 text-start" controlId="usernameInput">
                <Form.Label className="label">Username</Form.Label>
                <Form.Control className="input" type="text" name="name" placeholder="Choose a username" value={signUpForm.name} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="emailInput">
                <Form.Label className="label">Email</Form.Label>
                <Form.Control className="input" type="email" name="email" placeholder="Register an email" value={signUpForm.email} onChange={handleInputChange} />
            </Form.Group>


            <Form.Group className="mb-3 text-start" controlId="pwdInput" >
                <Form.Label className="label">Password</Form.Label>
                <Form.Control className="input" type="password" name="password" placeholder="Choose a password" value={signUpForm.password} onChange={handleInputChange} />
            </Form.Group>

            <Button className="button" variant="info" type="submit">
                Sign Up
            </Button>
            <br />
            <Form.Text><span>Already have an account? </span></Form.Text>
            <Link to="/">Log in!</Link>
        </Form>

    )
}

export default SignUpForm