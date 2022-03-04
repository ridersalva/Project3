import "./SignUpForm.css"
import { Form, Button, Image } from "react-bootstrap"
import { Link } from "react-router-dom"

const SignIn = () => {

    return (

        <Form className="form text-center" >


            <Form.Group className="mb-3 text-start" controlId="usernameInput">
                <Form.Label className="label">Nombre de usuario</Form.Label>
                <Form.Control className="input" type="email" placeholder="Nombre de usuario" />
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="emailInput">
                <Form.Label className="label">Correo electrónico</Form.Label>
                <Form.Control className="input" type="email" placeholder="Correo electrónico" />
            </Form.Group>


            <Form.Group className="mb-3 text-start" controlId="pwdInput" >
                <Form.Label className="label">Contraseña</Form.Label>
                <Form.Control className="input" type="password" placeholder="Contraseña" />
            </Form.Group>

            <Link to="/log-in"> <Button className="button" variant="info" type="submit">
                Registrarse
            </Button></Link>
        </Form>

    )
}

export default SignIn