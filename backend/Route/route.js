const express = require("express")

const router = express.Router()

const {signup,signin,secret1,getusername,create1,get1,edit1,delete1,markasdone} = require("../controller/cont")
const {secret} = require("../middleware/secret")

router.post("/signup",signup)

router.post("/signin",signin)
router.get("/secret",secret,secret1)
router.get("/getusername",secret,getusername)



router.post("/create1",secret,create1)











router.put("/edit1/:id",secret,edit1)









router.get("/get1",secret,get1)


router.delete("/delete1/:id",secret,delete1)






router.post("/markasdone/:id",secret,markasdone)

module.exports = {router}
