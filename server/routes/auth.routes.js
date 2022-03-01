const express = require("express")
const router = require("express").Router();
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const { isAuthenticated } = require('./../middlewares/jwt.middleware')

const User = require("../models/User.model")

const saltRounds = 10


router.post('/register', (req, res, next) => {

    const { username, email, password } = req.body

    if (username === '' || email === '' || password === '') {
        res.status(400).json({ message: "Provide email, password and name" })
        return
    }

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    // if (!emailRegex.test(email)) {
    //     res.status(400).json({ message: 'Provide a valid email address.' })
    //     return
    // }

    // const pwdRegax = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    // if (!pwdRegax.test(password) {
    //     res.status(400).json({ message: 'Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.' })
    //     return
    // }

    User
        .findOne({ email })
        .then((result) => {
            if (result) {
                res.status(400).json({ message: "Email already in use." })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            console.log("salt generated")
            const hashedPassword = bcrypt.hashSync(password, salt)
            console.log("pass encrypted")
            return User.create({ username, email, password: hashedPassword })
        })

        //saca detalles del usuario creado
        .then((createdUser) => {
            console.log("user created")
            const { email, username, _id } = createdUser

            const user = { email, username, _id }

            res.status(201).json({ user })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Internal Server Error" })
        })
})

router.post('/log-in', (req, res, next) => {
    const { email, password } = req.body;

    if (email === '' || password === '') {
        res.status(400).json({ message: "Provide email and password." });
        return;
    }

    User
        .findOne({ email })
        .then((result) => {

            if (!result) {
                res.status(401).json({ message: "Email is not registered." })
                return;
            }

            if (bcrypt.compareSync(password, result.password)) {

                const { _id, email, username } = result;

                const payload = { _id, email, username };

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "6h" }
                );

                res.status(200).json({ authToken });
            }
            else {
                res.status(401).json({ message: "Unable to authenticate the user" });
            }
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