import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import AlertPage from '../pages/AlertsPage'
import VehiclePage from '../pages/VehiclesPage'
import SignUp from '../pages/AuthPages/SignUp'
import LogIn from '../pages/AuthPages/LogIn'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/user/alerts" element={<AlertPage />} />
            <Route path="/user/vehicles/" element={<VehiclePage />} />
        </Routes>
    )
}
export default AppRoutes