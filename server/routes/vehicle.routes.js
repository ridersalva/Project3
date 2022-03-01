const express = require("express")
const router = require("express").Router();
const { isAuthenticated } = require('./../middlewares/jwt.middleware')

const Vehicle = require("../models/Vehicle.model")

////////////////// L I S T  A L L ////////////////////////

router.get('/vehicle/allvehicles', isAuthenticated, (req, res, next) => {

    Vehicle
        //.populate owner?
        .find({ owner: req.payload._id }) //owner: req.payload
        .select("name photo identifier")
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err))
})

///////////////// C R E A T E  O N E /////////////////////////

router.post("/vehicle/create", isAuthenticated, (req, res) => {

    Vehicle
        .create({ ...req.body, owner: req.payload._id })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err))
})

//////////////////// L I S T  O N E //////////////////////////

router.get('/vehicle/:vehicle_id', (req, res, next) => {

    const { vehicle_id } = req.params

    Vehicle
        .findById(vehicle_id)
        .then(result => res.json(result)) //result.data
        .catch(err => res.status(500).json(err))
})

///////////////// E D I T  O N E /////////////////////////

router.put("/vehicle/:vehicle_id", (req, res, next) => {

    const { vehicle_id } = req.params

    Vehicle
        .findByIdAndUpdate(vehicle_id, { ...req.body }, { new: true })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err))


})

router.delete("/vehicle/:vehicle_id", (req, res, next) => {

    const { vehicle_id } = req.params

    Vehicle
        .findByIdAndDelete(vehicle_id)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err))

})


module.exports = router