import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const DB = await mongoose.connect(process.env.MONGODB_URI);
    if (DB) {
      console.log("Database Connect Successfully 😎");
    }
  } catch (error) {
    console.log("Database Connection Failed ⚠");
  }
};

export default connectDB;
