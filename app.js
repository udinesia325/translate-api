const express = require("express")
const cors = require("cors")
const app = express()
const router = require("./router/router")
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", router)
app.listen(port, () => console.log(`Server Berjalan Pada Port ${port}`))
