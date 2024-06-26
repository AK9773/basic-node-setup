import app from "./app.js";
import { connectDB } from "./db/connection.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(
    app.listen(process.env.PORT || 3001, () => {
      console.log(`app is listening at port: ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });
