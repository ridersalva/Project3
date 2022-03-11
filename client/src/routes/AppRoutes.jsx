import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import VehiclePage from '../pages/VehiclesPage'
import SignUpPage from '../pages/AuthPages/SignUpPage'
import LogInPage from '../pages/AuthPages/LogInPage'
import PrivateRoute from './PrivateRoutes'
import ErrorPage from '../pages/ErrorPage'
import Contact from '../pages/Contact'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<LogInPage />} />
            <Route path="register" element={<SignUpPage />} />
            <Route path="/user" element={<PrivateRoute />}>
                <Route path="/user" element={<HomePage />} />
                <Route path="/user/vehicles" element={<VehiclePage />} />
                <Route path="/user/contact" element={<Contact />} />

            </Route>
           
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
}
export default AppRoutes