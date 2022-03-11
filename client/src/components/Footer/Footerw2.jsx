import React,{useState,useEffect,useContext} from 'react'
import { Nav, Link,Button,Image,NavLink} from 'react-bootstrap';
import { AuthContext } from '../../context/auth.context'
import { useNavigate } from 'react-router-dom'
import logo from "./logo.png"
import './Footer.css'


function Footerw2() {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const logOut = () => navigate("/")

    const [show, setShow] = useState(false)
    const controlFooter = () => {
        if (window.scrollY > 190) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlFooter)
        return () => {
            window.removeEventListener('scroll', controlFooter)
        }
    }, [])
    return (
    <>{user ? <>
      <Nav fill variant="tabs" defaultActiveKey="/home">
          <NavLink to="/user" className="foot">
              <Image
                  alt="logo"
                  src={logo}
                  className="d-inline-block align-top"
                  style={{ borderRadius: "50%", marginRight: "25px" }}
              />
              <h1>Hello {user.name}</h1>
          </NavLink>
          <Nav.Item>
                <Nav.Link to="/user/vehicles/" className="ico">Vehicle</Nav.Link>
          </Nav.Item>
          <Nav.Item>
                <Nav.Link to="/user" className="ico2">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
                <Button variant="warning" onClick={logOut}>Log Out</Button>
          </Nav.Item>
         
      </Nav>
        </> : <></>}</>
  )
}
export default Footerw2