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
    getOneAlert = alert_id => {
        return this.api.get(`/${alert_id}`)
    }
    editOneAlert = (alert_id, data) => {
        return this.api.put(`/${alert_id}`, data)
    }
    deleteOneAlert = alert_id => {
        return this.api.delete(`/${alert_id}`)
    }
    sendEmail = contactData =>{
        return this.api.post('/contact', contactData)
    }

}

const alertService = new AlertService()

export default alertService