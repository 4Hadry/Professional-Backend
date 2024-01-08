import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const connectDB = async () => {
  try {
    const DBconnection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${DBconnection.connection.host}`
    );
  } catch (error) {
    console.log("MONGO CONNECTION ERROR: " + error);
    process.exit(1);
  }
};
export default connectDB;
