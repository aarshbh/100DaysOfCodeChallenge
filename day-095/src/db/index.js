import mongoose from "mongoose";
import {DB_NAME} from "../constant.js";


const connectDB = async() => {
    try {
       const connectionInstance = await mongoose.connect(`
        ${process.env.MONGODB_URI}/${DB_NAME}`)
         console.log(`\n MongoDB connected !! DB HPST : 
            ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("MONGODB ERROR: " , error);
        process.exit(1);
    }
}


export default connectDB;