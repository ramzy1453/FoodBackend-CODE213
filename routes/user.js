import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteAllUsers,
  deleteUser,
  login,
} from "../controllers/user.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.delete("/", deleteAllUsers);

userRouter.post("/register", createUser);
userRouter.post("/login", login);

export default userRouter;
