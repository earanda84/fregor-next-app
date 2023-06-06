import mongoose from "mongoose"

const connection = async()=>{
    try{
        // I had to change the URI, for a problem with a connection with SRV
        await mongoose.connect(process.env.MONGO_URL_WITHOUT_SRV)//'mongodb://127.0.0.1:27017/fregor-app'
        console.log('Connection successfully to fregor-app-DB')
    }catch(error){
        console.log(error)
        
    }
}

module.exports={
    connection
}
