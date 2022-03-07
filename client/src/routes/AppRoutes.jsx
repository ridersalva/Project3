import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import AlertPage from '../pages/AlertsPage'
import VehiclePage from '../pages/VehiclesPage'
import SignUpPage from '../pages/AuthPages/SignUpPage'
import LogInPage from '../pages/AuthPages/LogInPage'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<LogInPage />} />
            <Route path="register" element={<SignUpPage />} />
            <Route path="/user" element={<HomePage />} />
            <Route path="/user/alerts" element={<AlertPage />} />
            <Route path="/user/vehicles/" element={<VehiclePage />} />





        </Routes>
    )
}
export default AppRoutes