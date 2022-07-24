import mongoose from "mongoose";
import { MONGODB_URI } from "./config";
export async function connectDB(){
    try {
       const  db = await mongoose.connect(MONGODB_URI) 
       console.log('conected to', db.connection.name)
    } catch (error) {
        console.log(error)
    }  
}
