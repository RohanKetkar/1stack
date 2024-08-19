const express = require("express")

const router = express.Router()

const {signup,signin,secret1,getusername,create1,get1,edit1,delete1,markasdone,secretdata,password} = require("../controller/cont")
const {secret} = require("../middleware/secret")

router.post("/signup",signup)

router.post("/signin",signin)
router.get("/secret",secret,secret1)
router.get("/getusername",secret,getusername)



router.post("/create1",secret,create1)











router.put("/edit1/:id",secret,edit1)


router.get("/get",(req,res)=>{
    console.log("get")
    return res.json({
        message:"get"
    })
})

router.get("/secretedata/:email",secretdata)

router.post("/password/:email",password)





router.get("/get1",secret,get1)


router.delete("/delete1/:id",secret,delete1)






router.post("/markasdone/:id",secret,markasdone)

module.exports = {router}
