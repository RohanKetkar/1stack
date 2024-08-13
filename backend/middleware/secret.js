const jwt = require("jsonwebtoken")

exports.secret = async (req, res, next) => {
    try {

        //token from header authorization
        let cookie11 =  req?.body?.headers?.Authorization || req?.headers?.authorization||req?.cookies["cookie"] || req?.body?.Authorization
        // console.log(req)
        
        console.log("ccokieis", typeof (cookie11))
        try {
            console.log("cookie11", cookie11)
            console.log(process.env.JSON_SECRET)
            // let token = cookie11.split("=")[1]
            let cookie1 = jwt.verify(cookie11, "secret1")
            req.user = cookie1
            console.log(cookie1)
            // localStorage.setItem("username",cookie1.username)
            // if (cookie1) {
            //     console.log(cookie1)
            //     next()
            // }
            next()
        } catch (e) {
            console.log(e)
            return res.json({
                message: "cookie is invalid1"
            })
        }

    } catch (e) {
        console.log(e)
        return res.json({
            message: "error is token"
        })
    }
} 
