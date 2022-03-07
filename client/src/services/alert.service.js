import axios from 'axios'

class AlertService {


    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/alert` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    createAlert(data) {
        return this.api.post('/create', data)
    }

    getUserAlerts = () => {
        return this.api.get('/allAlerts')
    }

    getVehicleAlerts = (vehicle_id) => {
        return this.api.get(`/vehicle/${vehicle_id}`)
    }
    getOneAlert = _id => {
        return this.api.get(`/${_id}`)
    }
    editOneAlert = (_id, data) => {
        return this.api.put(`/${_id}`, data)
    }
    deleteOneAlert = _id => {
        return this.api.delete(`/${_id}`)
    }

}

const alertService = new AlertService()

export default alertService