 import mongoose from "mongoose";

 //function to coonect dbase

 export const connectDB=async()=>{
    try{
      const conn=  await mongoose.connect(process.env.MONGODB_URI)  ;
      console.log(`MongoDB connected:${conn.connection.host}`);
    }catch(error){
    console.error("MongoDB connection failed:",error);
    }
 }; 
