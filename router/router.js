const express = require("express")
const router = express.Router()
const translateText = require("../controller/controller")
router.get("/terjemah", translateText)


module.exports = router
