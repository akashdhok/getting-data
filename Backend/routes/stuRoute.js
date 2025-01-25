const express = require("express")
const route = express.Router()
const controller = require("../controller/stuController")
route.post("/savedata" , controller.saveData)

module.exports = route