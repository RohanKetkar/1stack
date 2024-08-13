const express = require("express")

const web = express()
require("dotenv").config()
const { connecttodatabase } = require("./database/database")
const cors = require("cors")
const cookieparser = require("cookie-parser")
const { router } = require("./Route/route")

connecttodatabase()
web.use(cors())
web.use(express.json())
web.use(cookieparser())
web.use("/api/v1", router)

web.get("/api/v1", (req, res) => {
    return res.send("Working")
})

web.get("/api/v1/get1", (req, res) => {//getting res from axios.get frontend
    res.send({
        message: "get1"
    })
})
console.log("index")
web.listen(process.env.PORT);