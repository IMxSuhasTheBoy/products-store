import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

mongoose
  .connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  .then(() => {
    console.error("connected to db!!!");
  })
  .catch((err) => {
    console.error(err);
  });

export default mongoose.connection;
