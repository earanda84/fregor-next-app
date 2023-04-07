import mongoose from "mongoose";

const connectMongo = async()=>{
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URL)
        if(connection.readyState == 1 ){
            return Promise.resolve(true)
        }
        console.log(connection, 'Conexión exitosa')
    } catch (error) {
        return Promise.reject(error)
    }
}

export default connectMongo;