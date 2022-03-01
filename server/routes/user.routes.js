const express = require("express")
const router = require("express").Router();
const bcrypt = require('bcryptjs')

const User = require("../models/User.model");


const saltRounds = 10

/////////////////// E D I T   U S E R ////////////////////////////////

router.put('/user/:user_id', (req, res, next) => {


    const { user_id } = req.params
    const { username, email, oldPwd, newPwd, } = req.body
    let newPassword = undefined
    User

        .findOne({ email })
        .then(result => {
            if (result) {
                res.status(400).json({ message: "Email already in use." })
                return
            }
            return User.findById(user_id)
        })
        .then(result => {
            if (bcrypt.compareSync(oldPwd, result.password) === false) {
                res.status(400).json({ message: "The curent password is incorrect." })
            }
            else {

                bcrypt
                    .genSalt(saltRounds)
                    .then(salt => bcrypt.hash(newPwd, salt))
                    .then(hashedPassword => newPassword = hashedPassword)
            }
            return User.findByIdAndUpdate(user_id, { username, email, password: newPassword })

            //  return User.findByIdAndUpdate(user_id, { ...req.body, password:newPassword })
        })
        .catch(err => res.status(500).json(err))
})

/////////////////// D E L E T E   U S E R ////////////////////////////////
router.delete('/user/:user_id', (req, res, next) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .catch(err => res.status(500).json(err))
})



module.exports = router