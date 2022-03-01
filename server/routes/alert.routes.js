const express = require("express")
const router = require("express").Router();
const { isAuthenticated } = require('./../middlewares/jwt.middleware')
const Vehicle = require("../models/Vehicle.model")
const Alert = require("../models/Alert.model")

////////////////// L I S T  A L L////////////////////////

router.get('/alert/allalerts', isAuthenticated, (req, res, next) => {

    let allPromise = []
    Vehicle
        .find({ owner: req.payload._id })
        .then(result => {
            result.forEach(elm => {
                allPromise.push(Alert.find({ vehicle: elm._id }))
            })
            return Promise.all(allPromise)
        })
        .then(allAlerts => res.json(allAlerts))///pain point
        .catch(err => res.status(500).json(err))
})

///////////////// C R E A T E  O N E /////////////////////////

router.post("/alert/create", (req, res) => {

    Alert
        .create({ ...req.body })//importante pasar el id del vehiculo a traves de un campo oculto
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err))
})

//////////////////// L I S T  O N E  //////////////////////////

router.get('/alert/:alert_id', (req, res, next) => {

    const { alert_id } = req.params

    Alert
        .findById(alert_id)
        .then(result => res.json(result)) //result.data
        .catch(err => res.status(500).json(err))
})

///////////////// E D I T  O N E /////////////////////////

router.put('/alert/:alert_id', (req, res, next) => {

    const { alert_id } = req.params

    Alert
        .findByIdAndUpdate(alert_id, { ...req.body }, { new: true })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err))


})

router.delete("/alert/:alert_id", (req, res, next) => {

    const { alert_id } = req.params

    Alert
        .findByIdAndDelete(alert_id)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err))

})


module.exports = router