const mongoose = require("mongoose")

exports.connecttodatabase = async() =>{
    try{
    await mongoose.connect(process.env.MONGO_URL)
}catch(e){

}

}