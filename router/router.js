const express = require("express")
const router = express.Router()
const translateText = require("../controller/controller")
router.get("/", (req, res) => {
	const data = `https://fahruddinsalim.herokuapp.com/terjemah?teks=coba&kode=en 
<br>
atau pelajari lebih lanjut di dokumentasi github
<a href="https://github.com/udinesia325/translate-api" target="_blank">klik disini</a>

`
	res.send(data)
})
router.get("/terjemah", translateText)


module.exports = router
