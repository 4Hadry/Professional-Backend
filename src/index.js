// require("dotenv").config({ path: "./env" });
// import { connectDB } from "./db/index.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

// connectDB();

(async () => {
  try {
    await mongoose
      .connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      .then(() => {
        app.listen(process.env.PORT || 4000, () => {
          console.log(`Server listening on ${process.env.PORT}`);
        });
        app.on("error", (err) => {
          console.log("ERR: ", err);
          throw err;
        });
      })
      .catch((err) => {
        console.log(`DB connection error !!!  ${err}`);
      });
  } catch (error) {
    console.error("MONGODB CONNECTION ERROR: " + error);
    throw error;
  }
})();
