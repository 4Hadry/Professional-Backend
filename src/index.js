// require("dotenv").config({ path: "./env" });
// import { connectDB } from "./db/index.js";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
const app = express();

dotenv.config({
  path: "./env",
});

// connectDB();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (err) => {
      console.log("ERR: ", err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is Listenening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("MONGODB CONNECTION ERROR: " + error);
    throw error;
  }
})();
