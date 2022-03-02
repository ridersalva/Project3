const router = require("express").Router();



router.use("/auth", require('./auth.routes'))
router.use("/vehicle", require('./vehicle.routes'))
router.use("/alert", require("./alert.routes"))
module.exports = router