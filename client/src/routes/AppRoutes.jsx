import { Routes, Route } from 'react-router-dom'


import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import TestPage from '../pages/TestPage'
import AlertPage from '../pages/AlertsPage'
import VehiclePage from '../pages/VehiclesPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<TestPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/user" element={<ProfilePage />} />
            <Route path="/user/alerts" element={<AlertPage />} />
            <Route path="/user/vehicles/" element={<VehiclePage />} />

        </Routes>
    )
}
export default AppRoutes