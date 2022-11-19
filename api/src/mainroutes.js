const {Router} = require("express")

const geckoroute = require("./routes/coinroute")


const router = Router()

router.use("/market",geckoroute)

module.exports = router