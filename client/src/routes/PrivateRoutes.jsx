import { useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { Navigate, Outlet } from 'react-router-dom'
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner"
import Footer from "../components/Footer/Footer"

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
            <Footer />
        </>
    )




}

export default PrivateRoute