const {Router} = require("express");

const route = Router()

const {getApi} = require("./indexControl")

route.get("/", getApi)


module.exports = route