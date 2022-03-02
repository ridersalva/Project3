const express = require("express")
const router = require("express").Router();
const jwt = require("jsonwebtoken")

const { isAuthenticated } = require('./../middlewares/jwt.middleware')

const User = require("../models/User.model");
const { response } = require("express");
const { rawListeners } = require("../models/User.model");





router.post('/credentials', (req, res, next) => {

    const { name, googleId, email } = req.body    //  req.body= response.profileObj
    //   tokenObj.access_token

    User
        .findOne({ email })
        .then(result => {
            if (result) {
                console.log(" YA HAY UN USUARIO")
                //const { _id, email, name, googleId } = result;

                const payload = { ...result };

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "6h" }
                );
                console.log(" T O K E N  D E V U E L T O")
                res.status(200).json({ authToken });
                return
            }

            console.log("N O  H A Y  U S E R ")
            return User.create({ name, googleId, email })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Internal Server Error" })
        })
})


router.get('/verification', isAuthenticated, (req, res, next) => {
    res.status(200).json(req.payload)
})

module.exports = router