import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AlertPage from '../pages/AlertsPage'
import VehiclePage from '../pages/VehiclesPage'
import SignUpPage from '../pages/AuthPages/SignUpPage'
import LogInPage from '../pages/AuthPages/LogInPage'
import PrivateRoute from './PrivateRoutes'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<LogInPage />} />
            <Route path="register" element={<SignUpPage />} />

            <Route path="/user" element={<PrivateRoute />}>

                <Route path="/user" element={<HomePage />} />
                <Route path="/user/alerts" element={<AlertPage />} />
                <Route path="/user/vehicles" element={<VehiclePage />} />

            </Route>

            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}
export default AppRoutes