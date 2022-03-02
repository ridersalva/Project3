import axios from 'axios'

class VehicleService {


    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/vehicle` })
    }

    credentials(credentials) {
        return this.api.post('/credentials', credentials)
    }


    verify(token) {
        return this.api.get('/verification', { headers: { Authorization: `Bearer ${token}` } })
    }

}

const authService = new AuthService()

export default VehicleService