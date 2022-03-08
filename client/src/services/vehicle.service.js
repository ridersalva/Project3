import axios from 'axios'




class VehicleService {


    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/vehicle` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }


    createVehicle(data) {
        return this.api.post('/create', data)
    }
    getAllVehicles = () => {
        return this.api.get(`/allVehicles`)
    }

    getOneVehicle = vehicle_id => {
        return this.api.get(`/${vehicle_id}`)
    }
    editOneVehicle = (data) => {
        return this.api.put(`/${data._id}`, data)
    }
    deleteOneVehicle = _id => {
        return this.api.delete(`/${_id}`)
    }

}

const vehicleService = new VehicleService()

export default vehicleService