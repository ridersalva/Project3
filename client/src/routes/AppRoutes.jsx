import { Routes, Route } from 'react-router-dom'
import Home from '../pages/HomePage'
import Profile from '../pages/ProfilePage'
import TestPage from '../pages/TestPage'

const AppRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/test" element={<TestPage/>}/>
        </Routes>
    )
}
export default AppRoutes