import { Spinner } from "react-bootstrap"
import './Spiner.css'

const LoadingSpinner = () => {

    return (
        <div className="spin">
            <span className="loader"></span>
        {/* <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner> */}
        </div>
    )
}

export default LoadingSpinner