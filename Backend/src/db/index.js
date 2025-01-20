import mongoose from "mongoose";

const connectDB=async ()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log(`MongoDB Connected ${connectionInstance.connection.host}`);
        
        
    } catch (error) {
        console.log("MONGO_DB ERROR:", error);
        process.exit(1);
    }
}
export default connectDB;