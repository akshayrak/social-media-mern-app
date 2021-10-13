import dotenv from "dotenv";
dotenv.config();
import  mongoose from 'mongoose'

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    
    console.log("MongoDB connection is SUCCESS")
    } catch (error) {
        console.log("MongoDB connection FAILED")
        process.exit(1)
    }
}

export default connectDB