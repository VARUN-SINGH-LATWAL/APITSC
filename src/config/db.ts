import mongoose from "mongoose";
import { config } from "./config";

const connectDb = async ()=>{
   try {

    mongoose.connection.on('connected', ()=>{
        console.log("connected successfully")
    })

    mongoose.connection.on('error',(err)=>{
        console.log("connection error",err)
    })
    await mongoose.connect(config.databaseUrl as string)
   } catch (error) {
    console.error('faile to connect database',error)
    process.exit(1);
   }
}

export default connectDb;
