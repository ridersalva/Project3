const router = require("express").Router();



router.use("/auth", require('./auth.routes'))
//router.use("/user", require('./profile.routes'))
//router.use("/vehicle", require('./vehicle.routes'))
//router.use("/alert", require("./auth.routes"))
module.exports = router