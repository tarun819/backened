import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"
const connectDB= async()=>{
    try{
    const connectioninstance=  await mongoose.connect(`${process.env.mongodb_uri}/${DB_NAME}`)
       console.log(`\n mongoDB connected succesfully at DB HOST: ${connectioninstance.connection.host} `)
    }catch(error){
        console.log("mongoDB connection error",error);
        process.exit(1)
    }
} 

export default connectDB