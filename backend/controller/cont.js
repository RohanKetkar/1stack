const model = require("../model/model")

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const { sendmail } = require("../config/nodemailer")

const { sendmail1 } = require("../mail.js")

const otpgenerator = require("otp-generator")

exports.signup = async (req, res) => {
    try {

        let { username, password,email } = req.body
        console.log("received",email,username,password)
        if (!username || !password || !email) {
            return res.json({
                message: "username is require"
            })
        }
        let exituser = await model.findOne({ email:email })
        





console.log(exituser)

        if (exituser) {
            return res.json({
                message: "exit"
            })
        }
        let encrpassword = await bcrypt.hash(password, 10)
        let user = await model.create({ username, email,password: encrpassword })

console.log(user)

        res.cookie("username", user.username)
        return res.json({
            message: "userwsqws is create1",
            user: user,
            success: true,
        })
    } catch (e) {
        console.log(e)
        return res.send(e)
    }
}

exports.signin = async (req, res) => {
    try {
        let { email, password } = req.body
        if (!email|| !password) {
            return res.json({
                message: "email is invalid"
            })
        }
        let exituser = await model.findOne({ email })
        if (!exituser) {

            return res.json({
                message: "signup to signin"
            })
        }
        let encrpassword = await bcrypt.compare(password, exituser.password)
        if (!encrpassword) {
            return res.json({
                message: "password is invalid"
            })
        }
        let obje = {
            id: exituser._id,
            username: exituser.username,
            email: exituser.email
        }
        let token = await jwt.sign(obje, process.env.JSON_SECRET)
        if (token) {
            req.user = token
            res.cookie("cookie", token)
            console.log("cookie is set", token)
            return res.json({
                message: "token is create",
                token: token,
                success: true,
                exituser: exituser,
                email:email
            })
        } else {
            return res.json({
                message: "error is token"
            })
        }
    } catch (e) {
        console.log(e)
        return res.send(e)
    }
}


exports.secret1 = async (req, res) => {
    try {

        return res.json({
            message: "secret"
        })
    } catch (e) {
        console.log(e)
    }
}










exports.secretdata = async (req, res) => {
    try {














        // let { otpe  } = req.body

        let otp1 = otpgenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false })
        let model1 = await model.findOneAndUpdate({email:req.params.email},{ otp1: otp1 })
        let email1 = req.params.email
        // let username = req.user.username
        let info = await sendmail(email1, sendmail1(email1, "1", otp1))





console.log(info)




        if (otp1 == model1.otp1) {
            // let otp11 = await model.findById({ _id: req.user.id })



            return res.json({

                message: "otp sent",
                success: true,
            })

        }

        return res.json({
            message: "mail",
            model1: model1,
        })

    } catch (e) {
        console.log(e)
        return res.send(e)
    }
}


exports.password = async (req, res) => {
    try {





let email = req.params.email


console.log("email",email)

        let otp11 = await model.findOne({ email:email })
// console.log(otp11)
        let { password,otpe } = req.body
        // if (!password || !otpe) {
        //     return res.json({
        //         message: "field is require"
        //     })
        // }
console.log(otpe)
console.log(otp11.otp1==otpe)

        if (otp11.otp1==otpe) {
            let encrpassword =await bcrypt.hash(password, 10)

            let model1 = await model.findOneAndUpdate({email:email},{password:encrpassword})
            return res.json({






                message: "passwordupdate",
                success: true

            })
        }





        return res.json({

            message: "invalid",
            success: false

        })



    } catch (e) {
        console.log(e)
    }
}



exports.getusername = async (req, res) => {
    try {
        let user = await model.findById({ _id: res.user._id })
        return res.json({
            message: "user",
            user: user,
        })
    } catch (e) {

    }
}





exports.create1 = async (req, res) => {
    try {
        let { todoname, _id1 } = req.body
        let todoitem = { todoname, _id1 }

        console.log({ todoitem })
        let user = await model.findById(req.user.id)

        if (!user) {
            return res.json({
                message: "sign1"
            })
        }
        let todo1 = await model.findOneAndUpdate({ _id: req.user.id }, { $push: { todo: todoitem } })
        return res.json({
            message: "todo",
            todo1: todo1,
            user: user
        })
    } catch (e) {

        console.log(e)
    }
}

exports.get1 = async (req, res) => {
    try {
        let todo = await model.findById({ _id: req.user.id })
        if (!todo) {

            return res.json({
                message: "todo",
            })
        }
        if (todo) {

            return res.json({
                message: "todo",
                success: true,
                todo: todo
            })
        }


    } catch (e) {

        console.log(e)
    }
}



exports.edit1 = async (req, res) => {
    try {
        //     let{todoid,userid}=req.params
        //     console.log("id",todoid)
        let { todo } = req.body
        let { id } = req.params

        let id1 = new mongoose.Types.ObjectId(id)
        { console.log("index", id1) }
        let id11 = new mongoose.Types.ObjectId(1)
        // {console.log(todo)}
        // const userObjectId = mongoose.Types.ObjectId(userId);
        const todoObjectId = new mongoose.Types.ObjectId(id);

        // Find the user document and specific todo item by ID
        const rese = await model.findOneAndUpdate({
            _id: req.user.id,
            'todo._id': todoObjectId
        }, {
            $set: {
                'todo.$.todoname': todo
            }
        }, { 'todo.$': 1 });
        if (!rese) {
            return res.json({
                message: "rese is invalid"
            })
        }
        console.log("todo._id")

        console.log("rese", rese)
        return res.json({
            message: "edit1",
            rese: rese,
            success: true,
            todo: todo
        })
    } catch (e) {
        console.log(e)
    }
}















exports.delete1 = async (req, res) => {
    try {

        let { id } = req.params
        console.log("todoindex", id)
        // let id=new mongoose.Types.ObjectId("66b1ca931c061e32431eb8b5")
        if (req.user.id) {
            let rese = await model.findOneAndUpdate({ _id: req.user.id }, {











                $pull: {


                    todo: { _id: id }
                }
            }, { new: true })



            console.log(id)

            console.log("rese", rese)
            if (!rese) {
                return res.json({
                    message: "rese is invalid"
                })
            }
            return res.json({
                message: "rese",
                rese: rese,
            })
        }
    } catch (e) {
        console.log(e)
    }
}




exports.markasdone = async (req, res) => {
    try {
        let { markasdone } = req.body
        let { id } = req.params
        console.log("todoid", id)
        console.log("markasdone", markasdone)
        let rese = await model.findOneAndUpdate({ _id: req.user.id, "todo._id": id }, {
            $set: {
                "todo.$.markasdone": markasdone
            }
        }, { new: true })




        if (!rese) {
            return res.json({
                message: "rese is invalid"
            })
        }





        if (rese) {
            return res.json({
                message: "rese",
                rese: rese,
            })
        }
    } catch (e) {
        console.log(e)
    }
}