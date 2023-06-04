import mongoose from "mongoose"


const connection = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/fregor-app')
        console.log('Connection successfully to fregor-app-DB')
    }catch(error){
        console.log(error)
        throw new Error('Failed to connect to database')
    }
}

module.exports={
    connection
}
