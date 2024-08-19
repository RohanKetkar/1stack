const mongoose = require("mongoose")

const model = new mongoose.Schema({
    username: String,
    password: String,
    email:{
        type:String,
    },

    account: {
        enum: ["admin", "user"],

        type: String,
    },
    todo: [
        {
            todoname: String,
            _id1:{
                type:String,
            },
            markasdone:{
                type:Boolean,
                default:false,
            }
            
        }
    ],





otp1:{

    type:String,
    expires:"5m"
}


})
module.exports = mongoose.model("model", model)