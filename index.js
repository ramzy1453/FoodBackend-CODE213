// 0 - import express and mongoose with require
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/User.js";

// 1 - create server
const server = express();

// 3 - use express.json to handle objects
server.use(express.json());

// 4 - use router
server.use("/user", userRouter);

// - database connection
mongoose
  .connect(
    "mongodb+srv://eren_yeager_1453:islamicworld1453@cluster0.lhb5c.mongodb.net/code213?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(function () {
    console.log("Database connected");
  });

// - run server
server.listen(8000, function () {
  console.log("Server is running at PORT 8000");
});
