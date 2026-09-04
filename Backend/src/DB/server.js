import mongoose from "mongoose";
import {MONGODB_NAME} from "../constants.js";

const connectDB=async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${MONGODB_NAME}`)
        console.log(`\nMongoDB  connected !! DB HOST:${connectionInstance.connection.host}\n`)
        console.log("Connected to MongoDB successfully")
    }
    catch(err){
        console.log("Error while connecting to MongoDB",err);
        process.exit(1)
    }
}
export default connectDB;