import axios from 'axios'

class VehicleService {


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

    getAllAllerts = () => {
        return this.api.get('/allAlerts')
    }
    getOneAlert = _id => {
        return this.api.get(`/${_id}`)
    }
    editOneAlert = (data) => {
        return this.api.put(`/${data._id}`, data)
    }
    deleteOneAlert = _id => {
        return this.api.delete(`/${_id}`)
    }

}

const vehicleService = new VehicleService()

export default vehicleService