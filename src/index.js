import dotenv from "dotenv";
dotenv.config({ path: "./env" });

import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";

import "./config/dbIndex.js";
// import { app } from "./app.js";

const app = express();

const PORT = process.env.PORT;

app.use(json({ limit: "16kb" }));
app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.set("view engine", "ejs");

import ownersRouter from "./routes/ownersRouter.js";
import usersRouter from "./routes/usersRouter.js";
import productsRouter from "./routes/productsRouter.js";

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
