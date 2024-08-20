const jwt = require("jsonwebtoken")

exports.secret = async (req, res, next) => {
    try {

        //token from header authorization
        let cookie11 =  req?.body?.headers?.Authorization || req?.headers?.authorization||req?.cookies["cookie"] || req?.body?.Authorization

        
        try {
            // let token = cookie11.split("=")[1]
            let cookie1 = jwt.verify(cookie11, process.env.JSON_SECRET)
            req.user = cookie1
            // localStorage.setItem("username",cookie1.username)
            // if (cookie1) {
            //     next()
            // }
            next()
        } catch (e) {
            return res.json({
                message: "cookie is invalid11"
            })
        }

    } catch (e) {
        return res.json({
            message: "error is token"
        })
    }
} 
