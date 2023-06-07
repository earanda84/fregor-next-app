 import mongoose from "mongoose"
//const mongoose = require("mongoose");
const connection = async()=>{
    try{
        // I had to change the URI, for a problem with a connection with SRV
        await mongoose.connect(process.env.MONGO_URL)//'mongodb://127.0.0.1:27017/fregor-app'
        console.log('Connection successfully to DB')
        // return conn;
    }catch(error){
        console.log(error)
        return error;
        // Promise.reject(error)        
    }
}

module.exports = connection;