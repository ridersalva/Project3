import { useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { Navigate, Outlet } from 'react-router-dom'
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Footerw2 from "../components/Footer/Footerw2"
function PrivateRoute() {

    const { isLoggedIn, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (!isLoggedIn) {
        return <Navigate to="/" />
    }

    return (
        <>
          
            <Outlet />
          
          
        </>
    )




}

export default PrivateRoute