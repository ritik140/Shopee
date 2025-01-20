import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000);
    console.log(`Server is Running at ${process.env.PORT}`);
  })
  .catch((error) => {
    console.log("Error while connecting-->", error);
  });
