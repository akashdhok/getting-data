const express = require("express")
const route = express.Router()
const controller = require("../controller/stuController")
route.post("/savedata" , controller.saveData)
route.get("/display" , controller.displayData)
route.post("/searchdata"  , controller.searchData)
module.exports = route
