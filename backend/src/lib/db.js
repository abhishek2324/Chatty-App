import mongoose from "mongoose";

export const connectDB = async() =>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connection successful !!");
        console.log(`MongoDB connected : ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MONGDB connection failed !! ",error);
        process.exit();
    }
}