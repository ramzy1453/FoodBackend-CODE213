// 0 - import express and mongoose with require
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/User.js";
import "dotenv/config";

// 1 - create server
const server = express();

// 3 - use express.json to handle objects
server.use(express.json());

// 4 - use router
server.use("/user", userRouter);

// - database connection
mongoose.connect(process.env.mongo_uri).then(function () {
  console.log("Database connected");
});

// - run server
server.listen(8000, function () {
  console.log("Server is running at PORT 8000");
});
